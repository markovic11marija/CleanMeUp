using CleanMeUp.Domain.Model;
using CleanMeUp.Infrastructure.Data.Ef.Configuration;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace CleanMeUp.Infrastructure.Data.Ef
{
    public class CleanMeUpDbContext : DbContext
    {
        public Action<ModelBuilder> ModelBuilderConfigurator { private get; set; }

        public CleanMeUpDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var a = typeof(UserConfiguration).Assembly;
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(UserConfiguration).Assembly);

            RegisterEntities(modelBuilder);

            ModelBuilderConfigurator?.Invoke(modelBuilder);

            base.OnModelCreating(modelBuilder);
        }

        private void RegisterEntities(ModelBuilder modelBuilder)
        {
            MethodInfo entityMethod = typeof(ModelBuilder).GetMethods().First(m => m.Name == "Entity" && m.IsGenericMethod);

            IEnumerable<Type> entityTypes = Assembly.GetAssembly(typeof(User)).GetTypes()
                .Where(x => (x.IsSubclassOf(typeof(Entity)) && !x.IsAbstract));

            foreach (Type type in entityTypes)
            {
                entityMethod.MakeGenericMethod(type).Invoke(modelBuilder, new object[] { });
            }
        }
    }
}
