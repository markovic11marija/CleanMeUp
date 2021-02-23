using CleanMeUp.Infrastructure.Data;
using MediatR;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service.Order
{
    public class GetOrderListQueryHandler : IRequestHandler<GetOrderListQuery, CommandResult<IList<Model.Order>>>
    {
        private readonly IRepository<Model.Order> _orderRepository;

        public GetOrderListQueryHandler(IRepository<Model.Order> orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public async Task<CommandResult<IList<Model.Order>>> Handle(GetOrderListQuery request, CancellationToken cancellationToken)
        { 
            return await Task.FromResult(CommandResult<IList<Model.Order>>.Success(_orderRepository.QueryAllIncluding(o => o.Items, o => o.DeliveryAddress, o => o.PickUpAddress, o => o.File).ToList()));
        }
    }
}
