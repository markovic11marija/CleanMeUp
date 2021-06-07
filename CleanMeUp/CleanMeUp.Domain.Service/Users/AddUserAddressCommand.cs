using MediatR;

namespace CleanMeUp.Domain.Service.Users
{
    public class AddUserAddressCommand : IRequest<CommandResult<IdentifierResponse>>
    {
        public int UserId { get; set; }
        public string Street { get; set; }
        public string Floor { get; set; }
        public string Interphone { get; set; }
        public string District { get; set; }
    }
}
