using MediatR;

namespace CleanMeUp.Domain.Service.SignIn
{
    public class SignInUserQuery : IRequest<CommandResult<UserData>>
    {
        public int Id { get; }

        public SignInUserQuery(int id)
        {
            Id = id;
        }
    }
}
