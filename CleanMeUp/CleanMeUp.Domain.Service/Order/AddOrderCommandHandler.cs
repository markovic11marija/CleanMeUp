using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Model.Core;
using CleanMeUp.Domain.Service.SignIn;
using CleanMeUp.Infrastructure.Data;
using MediatR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service
{
    public class AddOrderCommandHandler : IRequestHandler<AddOrderCommand, CommandResult<CommandEmptyResult>>
    {
        private readonly IRepository<Order> _orderRepository;
        private readonly IUnitOfWork _unitOfWork;

        public AddOrderCommandHandler(IRepository<Order> orderRepository, IUnitOfWork unitOfWork)
        {
            _orderRepository = orderRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<CommandResult<CommandEmptyResult>> Handle(AddOrderCommand request, CancellationToken cancellationToken)
        {
            var order = new Order { Items = request.Items, DeliveryAddress = request.DeliveryAddress, PickUpAddress = request.PickUpAddress };
            _orderRepository.Add(order);
            _unitOfWork.SaveChanges();

            return await Task.FromResult(CommandResult<CommandEmptyResult>.Success(new CommandEmptyResult()));
        }
    }
}
