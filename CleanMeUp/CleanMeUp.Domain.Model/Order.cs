using System.Collections.Generic;

namespace CleanMeUp.Domain.Model
{
    public class Order : Entity
    {
        public IList<Item> Items { get; set; }
        public string PickUpAddress { get; set; }
        public string DeliveryAddress { get; set; }
        public string Phone { get; set; }
    }
}
