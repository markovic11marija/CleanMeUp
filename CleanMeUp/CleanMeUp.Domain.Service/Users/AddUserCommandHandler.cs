using CleanMeUp.Domain.Model;
using CleanMeUp.Infrastructure.Data;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service.Users
{
    public class AddUserCommandHandler : IRequestHandler<AddUserCommand, CommandResult<int>>
    {
        private readonly IRepository<User> _userRepository;
        private readonly IUnitOfWork _unitOfWork;

        public AddUserCommandHandler(IRepository<User> userRepository, IUnitOfWork unitOfWork)
        {
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<CommandResult<int>> Handle(AddUserCommand request, CancellationToken cancellationToken)
        {
            var user = new User { FullName = request.FullName, Email = request.Email, Password = request.Password };
            _userRepository.Add(user);
            _unitOfWork.SaveChanges();

            return await Task.FromResult(CommandResult<int>.Success(user.Id));
        }
    }
}
