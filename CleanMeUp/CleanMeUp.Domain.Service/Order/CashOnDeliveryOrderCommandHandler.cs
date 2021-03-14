using CleanMeUp.Domain.Model.Core;
using CleanMeUp.Domain.Service.SendGrid;
using CleanMeUp.Infrastructure.Data;
using MediatR;
using Microsoft.Extensions.Configuration;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service.Order
{
  public class CashOnDeliveryOrderCommandHandler : IRequestHandler<CashOnDeliveryOrderCommand, CommandResult<CommandEmptyResult>>
    {
        private readonly IRepository<Model.Order> _orderRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IConfiguration _configuration;

        public CashOnDeliveryOrderCommandHandler(IRepository<Model.Order> orderRepository, IUnitOfWork unitOfWork, IConfiguration configuration)
        {
            _orderRepository = orderRepository;
            _unitOfWork = unitOfWork;
            _configuration = configuration;
        }

        public async Task<CommandResult<CommandEmptyResult>> Handle(CashOnDeliveryOrderCommand request, CancellationToken cancellationToken)
        {
            var order = _orderRepository.QueryAllIncluding(o => o.Items, o => o.DeliveryAddress, o => o.PickUpAddress, o => o.File).FirstOrDefault(a => a.Id == request.OrderId);

            if (order == null)
            {
                return await Task.FromResult(CommandResult<CommandEmptyResult>.Fail("Fail to add cash on delivery paiment method order - order does not exist."));

            }
          
            order.PaymentMethod = "Plaćanje pouzećem";
            _unitOfWork.SaveChanges();

            var sendGrid = new SendGridService(order, _configuration);
            var success = await sendGrid.SendMailAsync();

            order.File.Name = null;
            order.File.FileInBytes = null;

            _unitOfWork.SaveChanges();

            if (!success)
                return await Task.FromResult(CommandResult<CommandEmptyResult>.Fail(new CommandEmptyResult()));

            return await Task.FromResult(CommandResult<CommandEmptyResult>.Success(new CommandEmptyResult()));
        }
    }
}
