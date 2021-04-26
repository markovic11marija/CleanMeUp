using MediatR;
using System.Collections.Generic;

namespace CleanMeUp.Domain.Service.Order
{
    public class GetOrderByUserIdQuery : IRequest<CommandResult<List<OrderData>>>
    {
        public int UserId { get; set; }
    }
}
