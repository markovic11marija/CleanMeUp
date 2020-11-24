using CleanMeUp.Domain.Model.Core;
using MediatR;

namespace CleanMeUp.Domain.Service.Order
{
   public class DeleteOrderCommand : IRequest<CommandResult<CommandEmptyResult>>
    {
        public int OrderId { get; set; }
    }
}
