using CleanMeUp.Domain.Model;
using CleanMeUp.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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

        [HttpPost]
        public async Task<ActionResult<int>> Add(PriceList model)
        {
            var result = await _priceListService.AddPriceList(model);

            if (result == 1)
                return Ok(result);

            return BadRequest(result);
        }

        [HttpPost("{priceListId}")]
        public async Task<ActionResult<int>> Update(int priceListId, PriceList model)
        {
            var result = await _priceListService.UpdatePriceList(priceListId, model);

            if (result == 1)
                return Ok(result);

            return BadRequest(result);
        }


        [HttpDelete]
        public ActionResult Delete(PriceList priceList)
        {
            if (priceList == null || priceList.Id <= 0)
            {
                return BadRequest();
            }

            _priceListService.Delete(priceList);

            return NoContent();

        }

        [HttpGet("services")]
        public async Task<ActionResult<IList<EnumResponse>>> AllServices()
        {
            return Ok(await _priceListService.GetAllServices());
        }

        [HttpGet("clothes")]
        public async Task<ActionResult<IList<EnumResponse>>> AllClothesTypes()
        {
            return Ok(await _priceListService.GetAllClothesTypes());
        }

    }
}
