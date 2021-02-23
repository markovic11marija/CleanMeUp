using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Service.Addresses;
using MediatR;
using System.Collections.Generic;

namespace CleanMeUp.Domain.Service
{
    public class AddOrderCommand : IRequest<CommandResult<int>>
    {
        public IList<Item> Items { get; set; }
        public AddressModel PickUpAddress { get; set; }
        public AddressModel DeliveryAddress { get; set; }
        public string Phone { get; set; }
        public int? UserId { get; set; }
        public string Note { get; set; }
        public string DeliveryNote { get; set; }

    }
}
