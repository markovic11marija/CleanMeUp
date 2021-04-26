using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Service;
using CleanMeUp.Domain.Service.SignIn;
using CleanMeUp.Domain.Service.Users;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CleanMeUp.WebApi.Controllers
{
    [Route("[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IMediator _mediator;

        public UserController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        [Route("sign-in")]
        public async Task<ActionResult<CommandResult<UserData>>> Search(string email, string password)
        {
            return Ok(await _mediator.Send(new SignInQuery(email, password)));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CommandResult<UserData>>> GetUser(int id)
        {
            return Ok(await _mediator.Send(new SignInUserQuery(id)));
        }

        [HttpPost]
        public async Task<ActionResult<CommandResult<int>>> Add([FromBody] AddUserCommand command)
        {
            var result = await _mediator.Send(command);

            if (result.IsSuccess)
                return Ok(result.Payload);

            return BadRequest(result.FailureReason);
        }

        [HttpPost]
        [Route("add-address")]
        public async Task<ActionResult<CommandResult<int>>> AddAddress([FromBody] AddUserAddressCommand command)
        {
            var result = await _mediator.Send(command);

            if (result.IsSuccess)
                return Ok(result.Payload);

            return BadRequest(result.FailureReason);
        }

        [HttpPost]
        [Route("update-address")]
        public async Task<ActionResult<CommandResult<int>>> UpdateAddress([FromBody] UpdateUserAddressCommand command)
        {
            var result = await _mediator.Send(command);

            if (result.IsSuccess)
                return Ok(result.Payload);

            return BadRequest(result.FailureReason);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<CommandResult<int>>> Update(int id, [FromBody] UpdateUserCommand command)
        {
            command.UserId = id;
            var result = await _mediator.Send(command);

            if (result.IsSuccess)
                return Ok(result.Payload);

            return BadRequest(result.FailureReason);
        }

    }
}