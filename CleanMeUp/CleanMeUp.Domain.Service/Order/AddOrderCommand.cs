using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Model.Core;
using MediatR;
using System.Collections.Generic;

namespace CleanMeUp.Domain.Service
{
    public class AddOrderCommand : IRequest<CommandResult<CommandEmptyResult>>
    {
        public IList<Item> Items { get; set; }
        public string PickUpAddress { get; set; }
        public string DeliveryAddress { get; set; }
        public string Phone { get; set; }

    }
}
