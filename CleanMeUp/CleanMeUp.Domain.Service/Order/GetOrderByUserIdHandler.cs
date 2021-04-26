using CleanMeUp.Infrastructure.Data;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service.Order
{
    public class GetOrderByUserIdHandler : IRequestHandler<GetOrderByUserIdQuery, CommandResult<List<OrderData>>>
    {
        private readonly IRepository<Model.Order> _orderRepository;

        public GetOrderByUserIdHandler(IRepository<Model.Order> orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public async Task<CommandResult<List<OrderData>>> Handle(GetOrderByUserIdQuery request, CancellationToken cancellationToken)
        {
            var orders = _orderRepository.QueryAllIncluding(x => x.User).Where(x=> x.User.Id == request.UserId).ToList();
            var response = orders.Select(x => new OrderData {
                Id = x.Id,
                DateCreated = x.DateCreated
            }).OrderByDescending(x => x.DateCreated).ToList();
            return await Task.FromResult(CommandResult<List<OrderData>>.Success(response));
        }
    }
}
