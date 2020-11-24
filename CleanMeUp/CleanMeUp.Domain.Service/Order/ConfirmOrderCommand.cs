using CleanMeUp.Domain.Model.Core;
using MediatR;

namespace CleanMeUp.Domain.Service.Order
{
    public class ConfirmOrderCommand : IRequest<CommandResult<CommandEmptyResult>>
    {
        public int OrderId { get; set; }
        public string BankReferenceId { get; set; }
    }
}
