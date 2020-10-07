using CleanMeUp.Domain.Model;
using CleanMeUp.Infrastructure.Data;
using MediatR;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service.Price
{
    public  class GetAllPricesQueryHandler : IRequestHandler<GetAllPricesQuery, IList<PriceList>>
    {
        private readonly IRepository<PriceList> _priceListRepository;

        public GetAllPricesQueryHandler(IRepository<PriceList> priceListRepository)
        {
            _priceListRepository = priceListRepository;
        }

        public async Task<IList<PriceList>> Handle(GetAllPricesQuery request, CancellationToken cancellationToken)
        {
            var prices = _priceListRepository.QueryAll().ToList();
            return await Task.FromResult(prices);
        }
    }
}
