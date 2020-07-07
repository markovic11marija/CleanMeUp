namespace CleanMeUp.Domain.Model
{
    public class PriceList:Entity
    {
        public ClothesType ClothesType { get; set; }
        public decimal Price { get; set; }
    }
}
