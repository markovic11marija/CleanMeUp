

using Microsoft.EntityFrameworkCore;

namespace CleanMeUp.Infrastructure.Data.Ef
{
    public static class DbInitializer
    {
        public static void Initialize(CleanMeUpDbContext context)
        {
            // context.Database.Migrate();
            context.SaveChanges();
        }
    }
}
