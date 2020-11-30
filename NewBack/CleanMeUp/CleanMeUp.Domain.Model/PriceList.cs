using CleanMeUp.Domain.Model.Enums;

namespace CleanMeUp.Domain.Model
{
    public class PriceList : Entity
    {
        public ServiceType ServiceType { get; set; }
        public ClothesType ClothesType { get; set; }
        public decimal Price { get; set; }
    }
}
