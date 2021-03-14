namespace CleanMeUp.Domain.Model
{
    public class Address : Entity
    {
        public string Street { get; set; }
        public int HouseNumber { get; set; }
        public string District { get; set; }

        public string AddressForMail()
        {
            return $"<p><ul><li>Ulica: { Street }</li><li>Broj: { HouseNumber }</li><li>Opština: { District }</li></ul></p>";
        }
    }
}
