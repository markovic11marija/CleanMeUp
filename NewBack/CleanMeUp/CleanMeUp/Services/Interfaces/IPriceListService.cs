using CleanMeUp.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CleanMeUp.Services
{
    public interface IPriceListService
    {
        public  Task<List<PriceList>> GetAllPrices();
    }
}
