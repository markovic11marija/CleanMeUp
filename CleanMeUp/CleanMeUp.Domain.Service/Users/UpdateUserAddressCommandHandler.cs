using CleanMeUp.Domain.Model;
using CleanMeUp.Infrastructure.Data;
using MediatR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service.Users
{
    public class UpdateUserAddressCommandHandler : IRequestHandler<UpdateUserAddressCommand, CommandResult<int>>
    {
        private readonly IRepository<User> _userRepository;
        private readonly IUnitOfWork _unitOfWork;

        public UpdateUserAddressCommandHandler(IRepository<User> userRepository, IUnitOfWork unitOfWork)
        {
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
        }
    
        public async Task<CommandResult<int>> Handle(UpdateUserAddressCommand request, CancellationToken cancellationToken)
        {
            var user = _userRepository.QueryAllIncluding(u => u.Address).FirstOrDefault(i => i.Id == request.UserId);
            if (user == null)
            {
                return await Task.FromResult(CommandResult<int>.Fail("User with this ID does not exist."));

            }

            user.Address.Street = request.Street;
            user.Address.District = request.District;
            user.Address.HouseNumber = request.HouseNumber;
            _unitOfWork.SaveChanges();

            return await Task.FromResult(CommandResult<int>.Success(user.Id));
        }
    }
}
