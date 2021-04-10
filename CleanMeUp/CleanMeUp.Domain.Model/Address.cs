namespace CleanMeUp.Domain.Model
{
    public class Address : Entity
    {
        public string Street { get; set; }
        public string Floor { get; set; }
        public string Interphone { get; set; }
        public string District { get; set; }

        public string AddressForMail()
        {
            return $"<p><ul><li>Ulica: { Street }</li><li>Sprat: { Floor }</li><li>Interfon: { Interphone }</li><li>Opština: { District }</li></ul></p>";
        }
    }
}
