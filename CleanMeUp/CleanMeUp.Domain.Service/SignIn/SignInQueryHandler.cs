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
        private readonly IRepository<Model.Order> _orderRepository;

        public SignInQueryHandler(IRepository<User> userRepository, IRepository<Model.Order> orderRepository)
        {
            _userRepository = userRepository;
            _orderRepository = orderRepository;
        }

        public async Task<CommandResult<UserData>> Handle(SignInQuery request, CancellationToken cancellationToken)
        {
            var user = _userRepository.QueryAll().FirstOrDefault(u => u.Email == request.Email && u.Password == request.Password);
            if (user == null)
            {
                return await Task.FromResult(CommandResult<UserData>.Fail("Fail to log in. Wrong email or password"));

            }
            var orders = _orderRepository.QueryAll().Where(o => o.User.Id == user.Id)?.ToList();
            return await Task.FromResult(CommandResult<UserData>.Success(new UserData { User = user, Orders = orders}));


        }
    }
}
