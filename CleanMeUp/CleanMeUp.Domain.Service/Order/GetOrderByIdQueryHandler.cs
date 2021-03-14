using CleanMeUp.Infrastructure.Data;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service.Order
{
    public class GetOrderByIdQueryHandler : IRequestHandler<GetOrderByIdQuery, CommandResult<Model.Order>>
    {
        private readonly IRepository<Model.Order> _orderRepository;

        public GetOrderByIdQueryHandler( IRepository<Model.Order> orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public async Task<CommandResult<Model.Order>> Handle(GetOrderByIdQuery request, CancellationToken cancellationToken)
        {
            var order = _orderRepository.FindById(request.OrderId);
            if (order == null)
                return await Task.FromResult(CommandResult<Model.Order>.Fail("Fail find order"));
            return await Task.FromResult(CommandResult<Model.Order>.Success(order));
        }
    }
}
