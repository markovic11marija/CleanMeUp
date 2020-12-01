using System.Collections.Generic;

namespace CleanMeUp.Domain.Model
{
    public class Order : Entity
    {
        public IList<Item> Items { get; set; }
        public string PickUpAddress { get; set; }
        public string DeliveryAddress { get; set; }
        public string Phone { get; set; }
        public string BankReferenceId { get; set; }


        public string ReturnItems()
        {
            var items = "";

            for (int i = 0; i < Items.Count; i++)
            {
                items += $"<p><ul><li>Br stavke: { i + 1 }</li><li>Naziv usluge: {Items[i].ServiceType }</li><li>Naziv stvke: {Items[i].Name }</li><li>Količina: {Items[i].Count }</li><li>Cena: {Items[i].Price }</li></ul></p>";
            }

            return items;
        }
    }
}
