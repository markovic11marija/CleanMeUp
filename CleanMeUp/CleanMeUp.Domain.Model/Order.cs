using System.Collections.Generic;

namespace CleanMeUp.Domain.Model
{
    public class Order : Entity
    {
        public IList<Item> Items { get; set; }
        public Address PickUpAddress { get; set; }
        public Address DeliveryAddress { get; set; }
        public string Phone { get; set; }
    }
}
