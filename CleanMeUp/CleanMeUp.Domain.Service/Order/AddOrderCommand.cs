using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Service.Addresses;
using MediatR;
using System;
using System.Collections.Generic;

namespace CleanMeUp.Domain.Service
{
    public class AddOrderCommand : IRequest<CommandResult<IdentifierResponse>>
    {
        public IList<Item> Items { get; set; }
        public IList<OrderService> Services { get; set; }
        public AddressModel PickUpAddress { get; set; }
        public AddressModel DeliveryAddress { get; set; }
        public string Phone { get; set; }
        public string UserId { get; set; }
        public string Note { get; set; }
        public string DeliveryNote { get; set; }
        public string FileName { get; set; }
        public string FileInBytes { get; set; }
        public DateTime PickupDate { get; set; }
        public DateTime? DeliveryDate { get; set; }

    }
}
