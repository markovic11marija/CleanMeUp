using CleanMeUp.Domain.Model;
using CleanMeUp.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CleanMeUp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            
            this._orderService = orderService;
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
