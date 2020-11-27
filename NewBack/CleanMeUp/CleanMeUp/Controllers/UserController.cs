using CleanMeUp.Domain.Model;
using CleanMeUp.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CleanMeUp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ISigninService _signinService;

        public UserController(ISigninService signinService)
        {
            this._signinService = signinService;
        }

        [HttpGet]
        public async Task<ActionResult<User>> SignIn(string email, string password)
        {
            return Ok(await _signinService.Signin(email, password));
        }

    }
}
