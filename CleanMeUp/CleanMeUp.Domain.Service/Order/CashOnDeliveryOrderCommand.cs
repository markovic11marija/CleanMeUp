using CleanMeUp.Domain.Model.Core;
using MediatR;

namespace CleanMeUp.Domain.Service.Order
{
  public  class CashOnDeliveryOrderCommand : IRequest<CommandResult<CommandEmptyResult>>
    {
        public int OrderId { get; set; }
    }
}
