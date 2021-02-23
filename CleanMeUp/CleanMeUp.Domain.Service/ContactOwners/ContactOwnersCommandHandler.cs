using CleanMeUp.Domain.Model.Core;
using CleanMeUp.Domain.Service.SendGrid;
using MediatR;
using Microsoft.Extensions.Configuration;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service.ContactOwners
{
    public class ContactOwnersCommandHandler : IRequestHandler<ContactOwnersCommand, CommandResult<CommandEmptyResult>>
    {
        private readonly IConfiguration _configuration;
        public ContactOwnersCommandHandler( IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<CommandResult<CommandEmptyResult>> Handle(ContactOwnersCommand request, CancellationToken cancellationToken)
        {
            var sendGrid = new SendGridContactByUser( _configuration, request);
            var success = await sendGrid.SendMailAsync();

            if (!success)
                return await Task.FromResult(CommandResult<CommandEmptyResult>.Fail(new CommandEmptyResult()));

            return await Task.FromResult(CommandResult<CommandEmptyResult>.Success(new CommandEmptyResult()));
        }
    }
}
