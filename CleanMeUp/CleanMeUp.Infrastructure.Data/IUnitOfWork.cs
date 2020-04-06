using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Infrastructure.Data
{
    public interface IUnitOfWork
    {
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken));
        int SaveChanges();
        void CancelSaving();
    }
}
