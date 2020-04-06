﻿using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Service.SignIn;
using CleanMeUp.Infrastructure.Data;
using MediatR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service
{
    public class SignInQueryHandler : IRequestHandler<SignInQuery, User>
    {
        private readonly IRepository<User> _userRepository;
        public SignInQueryHandler(IRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> Handle(SignInQuery request, CancellationToken cancellationToken)
        {
            return await Task.FromResult(_userRepository.QueryAll().FirstOrDefault(u => u.Email == request.Email && u.Password == request.Password));
        }
    }
}
