using CleanMeUp.Domain.Model;
using System.Collections.Generic;

namespace CleanMeUp.Domain.Service.SignIn
{
    public class UserData
    {
        public User User { get; set; }
        public IList<Model.Order> Orders { get; set; }
    }
}
