using CleanMeUp.Domain.Model.Core;
using MediatR;

namespace CleanMeUp.Domain.Service.ContactOwners
{
    public class ContactOwnersCommand : IRequest<CommandResult<CommandEmptyResult>>
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
    }
}
