using CleanMeUp.Domain.Model;
using MediatR;
using System.Collections.Generic;

namespace CleanMeUp.Domain.Service.Price
{
    public  class GetAllPricesQuery: IRequest<IList<PriceList>>
    {
    }
}
