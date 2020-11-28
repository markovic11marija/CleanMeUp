using CleanMeUp.Infrastructure.Data;
using CleanMeUp.Infrastructure.Data.Ef;
using CleanMeUp.Services;
using CleanMeUp.Services.Implementation;
using CleanMeUp.Services.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace CleanMeUp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddDbContext<CleanMeUpDbContext>( b => b.UseSqlServer(Configuration.GetConnectionString("CleanMeUpDbContext")));

           // services.AddScoped(typeof(DbContext), typeof(CleanMeUpDbContext));
            services.AddScoped(typeof(IRepository<>), typeof(EntityFrameworkRepository<>));
            services.AddScoped<IUnitOfWork, DbContextUnitOfWork>();

            services.AddScoped<IOrderService,OrderService>();
            services.AddScoped<IPriceListService, PriceListService>();
            services.AddScoped<ISengridService, SendGridService>();
            services.AddScoped<ISigninService,SigninService>();
           

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
            });

            services.AddCors();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
              
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger();
            app.UseSwaggerUI(c => {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            app.UseHttpsRedirection();

            app.UseRouting();

            //app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
