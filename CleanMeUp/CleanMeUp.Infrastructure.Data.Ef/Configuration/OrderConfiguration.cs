using CleanMeUp.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace CleanMeUp.Infrastructure.Data.Ef.Configuration
{
  public  class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.HasKey(u => u.Id);
            builder.HasOne(u => u.User).WithMany(u => u.Orders);
        }
    }
}