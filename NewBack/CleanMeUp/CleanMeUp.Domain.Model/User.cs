namespace CleanMeUp.Domain.Model
{
    public class User : Entity
    {
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Password { get; set; }
        public Address Address { get; set; }

        public User(string email, string phoneNumber, string password)
        {
            Email = email;
            PhoneNumber = phoneNumber;
            Password = password;
        }

    }
}
