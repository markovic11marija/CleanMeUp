using CleanMeUp.Domain.Model.Core;
using CleanMeUp.Domain.Service.SendGrid;
using CleanMeUp.Infrastructure.Data;
using MediatR;
using Microsoft.Extensions.Configuration;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service.Order
{
    public class ConfirmOrderCommandHandler : IRequestHandler<ConfirmOrderCommand, CommandResult<CommandEmptyResult>>
    {
        private readonly IRepository<Model.Order> _orderRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IConfiguration _configuration;

        public ConfirmOrderCommandHandler(IRepository<Model.Order> orderRepository, IUnitOfWork unitOfWork, IConfiguration configuration)
        {
            _orderRepository = orderRepository;
            _unitOfWork = unitOfWork;
            _configuration = configuration;
        }

        public async Task<CommandResult<CommandEmptyResult>> Handle(ConfirmOrderCommand request, CancellationToken cancellationToken)
        {
            var order = _orderRepository.QueryAllIncluding(o => o.Items).FirstOrDefault(a => a.Id == request.OrderId);

            if (order == null)
            {
                return await Task.FromResult(CommandResult<CommandEmptyResult>.Fail("Fail to remove order - order does not exist."));

            }
            var bankReference = $"{request.MerchantId};{request.TerminalId};{request.PurchaseTime};{request.OrderId};{request.Currency};{request.TotalAmount};";

            if (bankReference == null || bankReference == "")
            {
                return await Task.FromResult(CommandResult<CommandEmptyResult>.Fail("Cannot confirm without bank reference."));

            }
            order.BankReferenceId = bankReference;
            order.Signature = request.Signature;

            _unitOfWork.SaveChanges();

            var sendGrid = new SendGridService(order, _configuration);
            await sendGrid.SendMailAsync();

            return await Task.FromResult(CommandResult<CommandEmptyResult>.Success(new CommandEmptyResult()));
        }
    }
}
