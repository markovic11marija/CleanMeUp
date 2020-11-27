using CleanMeUp.Domain.Model;
using System.Threading.Tasks;

namespace CleanMeUp.Services.Interfaces
{
    public interface IOrderService
    {
        public Task<int> AddOrder(Order model);

        public Task<int> ConfirmOrder(int orderId, string bankReferenceId);

        public void Delete(Order order);
    }
}
