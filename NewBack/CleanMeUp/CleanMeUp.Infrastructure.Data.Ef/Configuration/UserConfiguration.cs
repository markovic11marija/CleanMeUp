using CleanMeUp.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CleanMeUp.Infrastructure.Data.Ef.Configuration
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(u => u.Id);
            builder.Property(u => u.Email).HasMaxLength(255);
            builder.Property(u => u.PhoneNumber).HasMaxLength(255);
            builder.Property(u => u.Password).HasMaxLength(255);

        }
    }
}
