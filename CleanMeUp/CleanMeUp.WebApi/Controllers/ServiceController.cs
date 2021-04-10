using System.Collections.Generic;
using System.Threading.Tasks;
using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Service.Service;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace CleanMeUp.WebApi.Controllers
{
    [Route("[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class ServiceController : Controller
    {
        private readonly IMediator _mediator;

        public ServiceController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<IList<Service>>> Search()
        {
            return Ok(await _mediator.Send(new GetAllServicesQuery { }));
        }
    }
}
