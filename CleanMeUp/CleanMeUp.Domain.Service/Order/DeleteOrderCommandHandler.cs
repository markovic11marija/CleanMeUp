using CleanMeUp.Domain.Model.Core;
using CleanMeUp.Infrastructure.Data;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service.Order
{
    public  class DeleteOrderCommandHandler : IRequestHandler<DeleteOrderCommand, CommandResult<CommandEmptyResult>>
    {
        private readonly IRepository<Model.Order> _orderRepository;
        private readonly IUnitOfWork _unitOfWork;

        public DeleteOrderCommandHandler(IRepository<Model.Order> orderRepository, IUnitOfWork unitOfWork)
        {
            _orderRepository = orderRepository;
            _unitOfWork = unitOfWork;
        }


        public async Task<CommandResult<CommandEmptyResult>> Handle(DeleteOrderCommand request, CancellationToken cancellationToken)
        {
            var order = _orderRepository.FindById(request.OrderId);
            if (order == null)
            {
                return await Task.FromResult(CommandResult<CommandEmptyResult>.Fail("Fail to remove order - order does not exist."));

            }

            if (order.BankReferenceId != null) 
            {
                return await Task.FromResult(CommandResult<CommandEmptyResult>.Fail("Cannot delete order with bank reference."));

            }

            _orderRepository.Delete(request.OrderId);
            _unitOfWork.SaveChanges();

            return await Task.FromResult(CommandResult<CommandEmptyResult>.Success(new CommandEmptyResult()));

          
        }
    }
}