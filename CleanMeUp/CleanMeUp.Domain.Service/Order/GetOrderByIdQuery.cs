using MediatR;

namespace CleanMeUp.Domain.Service.Order
{
    public class GetOrderByIdQuery : IRequest<CommandResult<Model.Order>>
    {
        public int OrderId { get; set; }
    }
}
