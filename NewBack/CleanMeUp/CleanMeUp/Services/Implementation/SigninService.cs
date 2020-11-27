using CleanMeUp.Domain.Model;
using CleanMeUp.Infrastructure.Data;
using CleanMeUp.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CleanMeUp.Services.Implementation
{
    public class SigninService : ISigninService
    {
        private readonly IRepository<User> _userRepository;

        public SigninService(IRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }
        public Task<User> Signin(string email, string password)
        {
            return Task.FromResult(_userRepository.QueryAll().FirstOrDefault(u => u.Email == email && u.Password == password));
        }
    }
}
