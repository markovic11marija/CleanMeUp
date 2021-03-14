using MediatR;
using System.Collections.Generic;

namespace CleanMeUp.Domain.Service.Order
{
   public class GetOrderListQuery : IRequest<CommandResult<IList<Model.Order>>>
    {
    }
}
