using System;
using System.Collections.Generic;

namespace CleanMeUp.Domain.Model
{
    public class Order : Entity
    {
        public IList<Item> Items { get; set; }
        public IList<OrderService> Services { get; set; }
        public Address PickUpAddress { get; set; }
        public Address DeliveryAddress { get; set; }
        public DateTime PickupDate { get; set; }
        public DateTime? DeliveryDate { get; set; }
        public string Phone { get; set; }
        public string BankReferenceId { get; set; }
        public string Signature { get; set; }
        public string Email { get; set; }
        public DateTime DateCreated { get; set; }
        public string Note { get; set; }
        public string DeliveryNote { get; set; }
        public string PaymentMethod { get; set; }
        public File File { get; set; }
        public User User { get; set; }

        public string ReturnItems() {
            var items = "";

            for (int i = 0; i < Items.Count; i++)
            {
                items += $"<p><ul><li>Br stavke: { i+1 }</li><li>Naziv stvke: {Items[i].Name }</li><li>Količina: {Items[i].Count }</li><li>Cena: {Items[i].Price }</li></ul></p>";
            }

            return items;
        }
    }
}
