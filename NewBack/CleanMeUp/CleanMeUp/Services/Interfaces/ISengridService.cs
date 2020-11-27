using CleanMeUp.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CleanMeUp.Services.Interfaces
{
    public interface ISengridService
    {

        public Task<bool> SendMailAsync(Order model);
    }
}
