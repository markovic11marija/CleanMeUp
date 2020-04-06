using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Service.SignIn;
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
        public async Task<ActionResult<User>> Search(string email, string password)
        {
            return Ok(await _mediator.Send(new SignInQuery(email, password)));
        }

    }
}