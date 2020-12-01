using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Model.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CleanMeUp.Services
{
    public interface IPriceListService
    {
        public  Task<List<PriceList>> GetAllPrices();
        public Task<int> AddPriceList(PriceList model);
        public Task<List<EnumResponse>> GetAllServices();
        public Task<List<EnumResponse>> GetAllClothesTypes();
        public void Delete(PriceList priceList);
    }
}
