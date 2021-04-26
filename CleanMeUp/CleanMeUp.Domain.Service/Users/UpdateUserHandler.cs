using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Service.SignIn;
using CleanMeUp.Infrastructure.Data;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service.Users
{
    public class UpdateUserHandler : IRequestHandler<UpdateUserCommand, CommandResult<UserData>>
    {
        private readonly IRepository<User> _userRepository;
        private readonly IUnitOfWork _unitOfWork;

        public UpdateUserHandler(IRepository<User> userRepository, IUnitOfWork unitOfWork)
        {
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<CommandResult<UserData>> Handle(UpdateUserCommand request, CancellationToken cancellationToken)
        {
            var user = _userRepository.QueryAll().FirstOrDefault(x => x.Id == request.UserId);
            if (!string.IsNullOrEmpty(request.FullName))
            {
                user.FullName = request.FullName;
            }
            if (!string.IsNullOrEmpty(request.Email))
            {
                user.Email = request.Email;
            }
            
            if (!string.IsNullOrEmpty(request.Password))
            {
                user.Password = request.Password;
            }
            _unitOfWork.SaveChanges();

            return await Task.FromResult(CommandResult<UserData>.Success(new UserData() {Id=user.Id, Email =user.Email, FullName = user.FullName }));
        }
    }
}
