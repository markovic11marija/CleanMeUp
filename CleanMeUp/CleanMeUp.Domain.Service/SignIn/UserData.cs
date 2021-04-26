using CleanMeUp.Domain.Model;
using System.Collections.Generic;

namespace CleanMeUp.Domain.Service.SignIn
{
    public class UserData
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public Address Address { get; set; }
        public IList<Model.Order> Orders { get; set; }
    }
}
