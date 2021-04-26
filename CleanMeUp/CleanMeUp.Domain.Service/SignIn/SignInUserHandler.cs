using CleanMeUp.Domain.Model;
using CleanMeUp.Infrastructure.Data;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service.SignIn
{
    class SignInUserHandler : IRequestHandler<SignInUserQuery, CommandResult<UserData>>
    {
        private readonly IRepository<User> _userRepository;
        private readonly IRepository<UserOrder> _userorderRepository;

        public SignInUserHandler(IRepository<User> userRepository, IRepository<UserOrder> userorderRepository)
        {
            _userRepository = userRepository;
            _userorderRepository = userorderRepository;
        }

        public async Task<CommandResult<UserData>> Handle(SignInUserQuery request, CancellationToken cancellationToken)
        {
            var user = _userRepository.QueryAllIncluding(a => a.Address).FirstOrDefault(u => u.Id == request.Id);
            if (user == null)
            {
                return await Task.FromResult(CommandResult<UserData>.Fail("You are not logged in."));

            }
            var orders = _userorderRepository.QueryAll().Where(o => o.User.Id == user.Id)?.Select(p => p.Order).ToList();
            return await Task.FromResult(CommandResult<UserData>.Success(new UserData { Id = user.Id, Address = user.Address, FullName = user.FullName, Email = user.Email, Orders = orders }));
        }
    }
}
