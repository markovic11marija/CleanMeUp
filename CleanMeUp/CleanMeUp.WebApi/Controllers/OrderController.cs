using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Model.Core;
using CleanMeUp.Domain.Service;
using CleanMeUp.Domain.Service.Order;
using CleanMeUp.Domain.Service.SignIn;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CleanMeUp.WebApi.Controllers
{
    [Route("[controller]")]
    //[Produces("application/json")]
    [ApiController]
    public class OrderController : Controller
    {
        private readonly IMediator _mediator;

        public OrderController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<CommandResult<IList<Order>>>> All()
        {
            return Ok(await _mediator.Send(new GetOrderListQuery()));
        }

        [HttpGet]
        [Route("by-id")]
        public async Task<ActionResult<CommandResult<Order>>> GetById([FromBody] GetOrderByIdQuery query)
        {
            return Ok(await _mediator.Send(query));
        }

        [HttpGet]
        [Route("by-user-id/{id}")]
        public async Task<ActionResult<CommandResult<OrderData>>> GetByUserId(int id)
        {
            return Ok(await _mediator.Send(new GetOrderByUserIdQuery { UserId = id}));
        }

        [HttpPost]
        [Route("insert")]
        public async Task<ActionResult<CommandResult<IdentifierResponse>>> Add([FromBody]AddOrderCommand command)
        {
            var result = await _mediator.Send(command);

            if (result.IsSuccess)
                return Ok(result.Payload);

            return BadRequest(result.FailureReason);
        }


        [HttpPost]
        [Route("confirmation")]
        public async Task<ActionResult<CommandResult<CommandEmptyResult>>> ConfirmOrder([FromForm]ConfirmOrderCommand command)
        {
            var result = await _mediator.Send(command);

            if (result.IsSuccess)
                return Ok(result.Payload);

            return BadRequest(result.FailureReason);
        }

        [HttpPost]
        [Route("cash-on-delivery")]
        public async Task<ActionResult<CommandResult<CommandEmptyResult>>> CashOnDeliveryOrder([FromBody] CashOnDeliveryOrderCommand command)
        {
            var result = await _mediator.Send(command);

            if (result.IsSuccess)
                return Ok(result.Payload);

            return BadRequest(result.FailureReason);
        }

        [HttpDelete]
        public async Task<ActionResult<CommandResult<CommandEmptyResult>>> DeleteOrder([FromBody]DeleteOrderCommand command)
        {
            var result = await _mediator.Send(command);

            if (result.IsSuccess)
                return Ok(result.Payload);

            return BadRequest(result.FailureReason);
        }

    }
}