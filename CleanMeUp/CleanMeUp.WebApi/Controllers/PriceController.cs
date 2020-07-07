using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Service.Price;
using CleanMeUp.Domain.Service.SignIn;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CleanMeUp.WebApi.Controllers
{
    [Route("[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class PriceController : Controller
    {
        private readonly IMediator _mediator;

        public PriceController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        [Route("price-list")]
        public async Task<ActionResult<IList<PriceList>>> Search()
        {
            return Ok(await _mediator.Send(new GetAllPricesQuery{ }));
        }

    }
}