using CleanMeUp.Infrastructure.Data;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ServiceEntity = CleanMeUp.Domain.Model.Service;

namespace CleanMeUp.Domain.Service.Service
{
    public class GetAllServicesQueryHandler : IRequestHandler<GetAllServicesQuery, IList<ServiceEntity>>
    {
        private readonly IRepository<ServiceEntity> _serviceRepository;

        public GetAllServicesQueryHandler(IRepository<ServiceEntity> priceListRepository)
        {
            _serviceRepository = priceListRepository;
        }

        public async Task<IList<ServiceEntity>> Handle(GetAllServicesQuery request, CancellationToken cancellationToken)
        {
            var prices = _serviceRepository.QueryAll().ToList();
            return await Task.FromResult(prices);
        }
    }
}
