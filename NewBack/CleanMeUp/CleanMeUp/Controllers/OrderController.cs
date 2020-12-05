using CleanMeUp.Domain.Model;
using CleanMeUp.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Nancy.Json;
using System.Threading.Tasks;

namespace CleanMeUp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        private readonly IHttpContextAccessor accessor;
        private readonly ILogger<OrderController> logger;

        public OrderController(IOrderService orderService,IHttpContextAccessor accessor,ILogger<OrderController> logger)
        {
            
            this._orderService = orderService;
            this.accessor = accessor;
            this.logger = logger;
        }

        [HttpPost]
        public async Task<ActionResult<int>> Add(Order model)
        {
            var result = await _orderService.AddOrder(model);

            if (result > 0)
                return Ok(result);

            return BadRequest(result);
        }


        [HttpPost("{orderId}/{bankReferenceId}")]
        public async Task<ActionResult<string>> ConfirmOrder(int orderId, string bankReferenceId)
        {
            var result = await _orderService.ConfirmOrder(orderId,bankReferenceId);

            if (result == 1)
                return Ok(result);

            return BadRequest(result);
        }

        [HttpPost("confirmation")]
        public void BankConfirmation()
        {
            logger.LogInformation("BankReqest", accessor.HttpContext.Request.Form["TranCode"]);
          
            var formData = new JavaScriptSerializer()
      .Deserialize<BankReqest>(accessor.HttpContext.Request.Form["FormData"]);
            _orderService.BankConfirmation(formData);

            logger.LogInformation("BankRequest", formData);
        }

        [HttpDelete]
        public  ActionResult DeleteOrder(Order order)
        {
            if (order == null || order.Id <= 0)
            {
                return BadRequest();
            }

             _orderService.Delete(order);

            return NoContent();

        }

    }
}
