using CleanMeUp.Domain.Model;
using System.Threading.Tasks;

namespace CleanMeUp.Services.Interfaces
{
    public interface ISigninService
    {
        public Task<User> Signin(string email, string password);
    }
}
