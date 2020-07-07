namespace CleanMeUp.Domain.Model
{
    public class Item:Entity
    {
        public ClothesType ClothesType { get; set; }
        public ServiceType ServiceType { get; set; }
        public string AdditionalComment { get; set; }
        public Image Image { get; set; }
    }
}
