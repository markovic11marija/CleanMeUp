using CleanMeUp.Domain.Model;
using CleanMeUp.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CleanMeUp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PriceController : ControllerBase
    {
        private readonly IPriceListService _priceListService;

        public PriceController(IPriceListService priceListService)
        {
            _priceListService = priceListService;
        }
        [HttpGet]
        public async Task<ActionResult<IList<PriceList>>> AllPriceList()
        {
            return Ok(await _priceListService.GetAllPrices());
        }

    }
}
