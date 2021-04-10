using CleanMeUp.Domain.Model;
using CleanMeUp.Infrastructure.Data;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service.Users
{
   public class AddUserAddressCommandHandler : IRequestHandler<AddUserAddressCommand, CommandResult<int>>
    {
        private readonly IRepository<User> _userRepository;
        private readonly IUnitOfWork _unitOfWork;

        public AddUserAddressCommandHandler(IRepository<User> userRepository, IUnitOfWork unitOfWork)
        {
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<CommandResult<int>> Handle(AddUserAddressCommand request, CancellationToken cancellationToken)
        {
            var address = new Address {Street = request.Street, District = request.District, Floor = request.Floor, Interphone = request.Interphone };
            var user = _userRepository.FindById(request.UserId);
            if (user == null)
            {
                return await Task.FromResult(CommandResult<int>.Fail("User with this ID does not exist."));

            }
            user.Address = address;
            _unitOfWork.SaveChanges();

            return await Task.FromResult(CommandResult<int>.Success(user.Id));
        }

     
    }
}
