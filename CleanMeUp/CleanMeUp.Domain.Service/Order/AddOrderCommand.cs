using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Model.Core;
using MediatR;
using System.Collections.Generic;

namespace CleanMeUp.Domain.Service
{
    public class AddOrderCommand : IRequest<CommandResult<CommandEmptyResult>>
    {
        public IList<Item> Items { get; set; }
        public Address PickUpAddress { get; set; }
        public Address DeliveryAddress { get; set; }
        public string Phone { get; set; }

        AddOrderCommand(IList<Item> items, Address pickUpAddress, Address deliveryAddress, string phone) {
            Items = items;
            PickUpAddress = pickUpAddress;
            DeliveryAddress = deliveryAddress;
            Phone = phone;
        }

    }
}
