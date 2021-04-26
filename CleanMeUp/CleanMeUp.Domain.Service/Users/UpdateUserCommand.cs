using CleanMeUp.Domain.Service.SignIn;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace CleanMeUp.Domain.Service.Users
{
    public class UpdateUserCommand : IRequest<CommandResult<UserData>>
    {
        public int UserId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
