using MediatR;

namespace CleanMeUp.Domain.Service.Users
{
    public class AddUserAddressCommand : IRequest<CommandResult<int>>
    {
        public int UserId { get; set; }
        public string Street { get; set; }
        public int HouseNumber { get; set; }
        public string District { get; set; }
    }
}
