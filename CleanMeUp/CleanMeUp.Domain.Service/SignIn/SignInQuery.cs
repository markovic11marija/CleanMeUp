using CleanMeUp.Domain.Model;
using MediatR;

namespace CleanMeUp.Domain.Service.SignIn
{
    public class SignInQuery : IRequest<User>
    {
        public string Email { get; }
        public string Password { get; }

        public SignInQuery(string email, string password)
        {
            Email = email;
            Password = password;
        }
    }
}
