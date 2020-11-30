namespace CleanMeUp.Domain.Model
{
    public class Item : Entity
    {
        public string Name { get; set; }
        public int Count { get; set; }
        public decimal Price { get; set; }
        public string ServiceType { get; set; }
    }
}
