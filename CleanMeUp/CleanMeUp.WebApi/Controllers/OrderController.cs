﻿using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Model.Core;
using CleanMeUp.Domain.Service;
using CleanMeUp.Domain.Service.SignIn;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CleanMeUp.WebApi.Controllers
{
    [Route("[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class OrderController : Controller
    {
        private readonly IMediator _mediator;

        public OrderController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult<CommandResult<CommandEmptyResult>>> Add([FromBody]AddOrderCommand command)
        {
            var result = await _mediator.Send(command);

            if (result.IsSuccess)
                return Ok(result.Payload);

            return BadRequest(result.FailureReason);
        }

    }
}