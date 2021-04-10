using MediatR;
using System.Collections.Generic;
using ServiceEntity = CleanMeUp.Domain.Model.Service;

namespace CleanMeUp.Domain.Service.Service
{
    public class GetAllServicesQuery : IRequest<IList<ServiceEntity>>
    {
    }
}
