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
    public class AddOrderCommandHandler : IRequestHandler<AddOrderCommand, CommandResult<int>>
    {
        private readonly IRepository<Model.Order> _orderRepository;
        private readonly IUnitOfWork _unitOfWork;

        public AddOrderCommandHandler(IRepository<Model.Order> orderRepository, IUnitOfWork unitOfWork)
        {
            _orderRepository = orderRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<CommandResult<int>> Handle(AddOrderCommand request, CancellationToken cancellationToken)
        {
            var order = new Model.Order { Items = request.Items, DeliveryAddress = request.DeliveryAddress, PickUpAddress = request.PickUpAddress, Phone = request.Phone };
            _orderRepository.Add(order);
            _unitOfWork.SaveChanges();

            return await Task.FromResult(CommandResult<int>.Success(order.Id));
        }
    }
}
