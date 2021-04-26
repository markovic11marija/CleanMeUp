using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Service.SignIn;
using CleanMeUp.Infrastructure.Data;
using MediatR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service
{
    public class SignInQueryHandler : IRequestHandler<SignInQuery, CommandResult<UserData>>
    {
        private readonly IRepository<User> _userRepository; 
        private readonly IRepository<UserOrder> _userorderRepository;

        public SignInQueryHandler(IRepository<User> userRepository, IRepository<UserOrder> userorderRepository)
        {
            _userRepository = userRepository;
            _userorderRepository = userorderRepository;
        }

        public async Task<CommandResult<UserData>> Handle(SignInQuery request, CancellationToken cancellationToken)
        {
            var user = _userRepository.QueryAllIncluding(a => a.Address).FirstOrDefault(u => u.Email == request.Email && u.Password == request.Password);
            if (user == null)
            {
                return await Task.FromResult(CommandResult<UserData>.Fail("Fail to log in. Wrong email or password"));

            }
            return await Task.FromResult(CommandResult<UserData>.Success(new UserData { Id= user.Id, Address = user.Address, FullName = user.FullName, Email = user.Email}));
        }
    }
}
