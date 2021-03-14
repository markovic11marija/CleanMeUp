using CleanMeUp.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CleanMeUp.Infrastructure.Data.Ef.Configuration
{
    public class UserOrderConfiguration : IEntityTypeConfiguration<UserOrder>
    {
        public void Configure(EntityTypeBuilder<UserOrder> builder)
        {
            builder.HasKey(t => new { t.UserId, t.OrderId });

            builder.HasOne(pt => pt.User)
                .WithMany(p => p.UserOrders)
                .HasForeignKey(pt => pt.UserId);

          
        }
    }
}