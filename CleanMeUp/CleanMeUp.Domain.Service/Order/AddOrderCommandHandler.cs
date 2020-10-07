using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Model.Core;
using CleanMeUp.Domain.Service.SendGrid;
using CleanMeUp.Infrastructure.Data;
using MediatR;
using Microsoft.Extensions.Configuration;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service
{
    public class AddOrderCommandHandler : IRequestHandler<AddOrderCommand, CommandResult<CommandEmptyResult>>
    {
        private readonly IRepository<Order> _orderRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IConfiguration _configuration;

        public AddOrderCommandHandler(IRepository<Order> orderRepository, IUnitOfWork unitOfWork, IConfiguration configuration)
        {
            _orderRepository = orderRepository;
            _unitOfWork = unitOfWork;
            _configuration = configuration;
        }

        public async Task<CommandResult<CommandEmptyResult>> Handle(AddOrderCommand request, CancellationToken cancellationToken)
        {
            var order = new Order { Items = request.Items, DeliveryAddress = request.DeliveryAddress, PickUpAddress = request.PickUpAddress, Phone = request.Phone };
            _orderRepository.Add(order);
            _unitOfWork.SaveChanges();

            var sendGrid = new SendGridService(order, _configuration);
            await sendGrid.SendMailAsync();

            return await Task.FromResult(CommandResult<CommandEmptyResult>.Success(new CommandEmptyResult()));
        }
    }
}
