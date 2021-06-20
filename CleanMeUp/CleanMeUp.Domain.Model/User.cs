using System;
using System.Collections.Generic;

namespace CleanMeUp.Domain.Model
{
    public class User : Entity
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Address Address { get; set; }
        public IList<Order> Orders { get; set; }

    }
}
