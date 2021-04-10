using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Model.Core;
using CleanMeUp.Domain.Service.SendGrid;
using CleanMeUp.Infrastructure.Data;
using MediatR;
using Microsoft.Extensions.Configuration;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service
{
    public class AddOrderCommandHandler : IRequestHandler<AddOrderCommand, CommandResult<int>>
    {
        private readonly IRepository<Model.Order> _orderRepository;
        private readonly IRepository<UserOrder> _userOrderRepository;

        private readonly IUnitOfWork _unitOfWork;

        public AddOrderCommandHandler(IRepository<Model.Order> orderRepository, IRepository<UserOrder> userOrderRepository, IUnitOfWork unitOfWork)
        {
            _orderRepository = orderRepository;
            _userOrderRepository = userOrderRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<CommandResult<int>> Handle(AddOrderCommand request, CancellationToken cancellationToken)
        {
            var deliveryAddress = new Address { Street = request.DeliveryAddress.Street, Floor = request.DeliveryAddress.Floor, Interphone = request.DeliveryAddress.Interphone, District = request.DeliveryAddress.District };
            var pickUpAddress = new Address { Street = request.PickUpAddress.Street, Floor = request.PickUpAddress.Floor, Interphone = request.PickUpAddress.Interphone, District = request.PickUpAddress.District };
            var order = new Model.Order { Items = request.Items, DeliveryAddress = deliveryAddress, PickUpAddress = pickUpAddress, Phone = request.Phone, Note = request.Note, DeliveryNote = request.DeliveryNote, File = new File { FileInBytes = request.FileInBytes, Name = request.FileName } };
            _orderRepository.Add(order);
            _unitOfWork.SaveChanges();

            if (request.UserId != null && request.UserId != 0)
            {
                _userOrderRepository.Add(new UserOrder { UserId = request.UserId.Value, OrderId = order.Id });
                _unitOfWork.SaveChanges();
            }

            return await Task.FromResult(CommandResult<int>.Success(order.Id));
        }
    }
}
