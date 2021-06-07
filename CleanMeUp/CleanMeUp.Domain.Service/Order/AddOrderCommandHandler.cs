using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Model.Core;
using CleanMeUp.Domain.Service.SendGrid;
using CleanMeUp.Infrastructure.Data;
using MediatR;
using Microsoft.Extensions.Configuration;
using System;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service
{
    public class AddOrderCommandHandler : IRequestHandler<AddOrderCommand, CommandResult<IdentifierResponse>>
    {
        private readonly IRepository<Model.Order> _orderRepository;
        private readonly IRepository<User> _userRepository;
        private readonly IRepository<UserOrder> _userOrderRepository;

        private readonly IUnitOfWork _unitOfWork;

        public AddOrderCommandHandler(IRepository<Model.Order> orderRepository, IRepository<User> userRepository, IRepository<UserOrder> userOrderRepository, IUnitOfWork unitOfWork)
        {
            _orderRepository = orderRepository;
            _userOrderRepository = userOrderRepository;
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<CommandResult<IdentifierResponse>> Handle(AddOrderCommand request, CancellationToken cancellationToken)
        {
            var deliveryAddress = new Address { Street = request.DeliveryAddress.Street, Floor = request.DeliveryAddress.Floor, Interphone = request.DeliveryAddress.Interphone, District = request.DeliveryAddress.District };
            var pickUpAddress = new Address { Street = request.PickUpAddress.Street, Floor = request.PickUpAddress.Floor, Interphone = request.PickUpAddress.Interphone, District = request.PickUpAddress.District };
            var order = new Model.Order { Items = request.Items, DeliveryAddress = deliveryAddress, PickUpAddress = pickUpAddress, Phone = request.Phone, Note = request.Note, DeliveryNote = request.DeliveryNote};
            order.DateCreated = DateTime.Now;

            if(request.FileInBytes != null)
            {
                order.File = new File { FileInBytes = Encoding.ASCII.GetBytes(request.FileInBytes), Name = request.FileName };
            }
            _orderRepository.Add(order);
            await _unitOfWork.SaveChangesAsync();

            if (request.UserId != null)
            {
                order.User = _userRepository.FindById(request.UserId ?? 0);
            }
            var success = await _unitOfWork.SaveChangesAsync();

            if(success != 0)
            {
                if (request.UserId != null && request.UserId != 0)
                {
                    _userOrderRepository.Add(new UserOrder { UserId = request.UserId.Value, OrderId = order.Id });
                    await _unitOfWork.SaveChangesAsync();
                }
            }
           

            return await Task.FromResult(CommandResult<IdentifierResponse>.Success(new IdentifierResponse() { Id = order.Id, Success = success }));
        }
    }
}
