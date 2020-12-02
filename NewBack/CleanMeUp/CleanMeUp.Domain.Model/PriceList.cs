using CleanMeUp.Domain.Model.Enums;

namespace CleanMeUp.Domain.Model
{
    public class PriceList : Entity
    {
        public string ServiceType { get; set; }
        public string ClothesType { get; set; }
        public decimal Price { get; set; }
    }
}
