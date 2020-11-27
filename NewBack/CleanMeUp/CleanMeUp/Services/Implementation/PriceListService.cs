using CleanMeUp.Domain.Model;
using CleanMeUp.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CleanMeUp.Services.Implementation
{
    public class PriceListService : IPriceListService
    {
        private readonly IRepository<PriceList> _priceListRepository;

        public PriceListService(IRepository<PriceList> repository)
        {
            this._priceListRepository = repository;
        }

        public async Task<List<PriceList>> GetAllPrices()
        {
           return await Task.FromResult(_priceListRepository.QueryAll().ToList());
        }
    }
}
