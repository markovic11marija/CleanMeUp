using CleanMeUp.Domain.Model;
using MediatR;

namespace CleanMeUp.Domain.Service.Users
{
    public class AddUserCommand : IRequest<CommandResult<int>>
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
