using CleanMeUp.Domain.Model;
using CleanMeUp.Infrastructure.Data;
using CleanMeUp.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CleanMeUp.Services.Implementation
{
    public class OrderService : IOrderService
    {
        private readonly IRepository<Order> _orderRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly ISengridService _sengridService;
        private readonly ILogger<OrderService> _logger;
        public OrderService(IRepository<Order> orederRepository,
            IUnitOfWork unitOfWork,
            ILogger<OrderService> logger,
            ISengridService sengridService)
        {
            _orderRepository = orederRepository;
            _unitOfWork = unitOfWork;
            _sengridService = sengridService;
            _logger = logger;
        }
        public Task<int> AddOrder(Order model)
        {
            try
            {
                var order = new Order { Items = model.Items, DeliveryAddress = model.DeliveryAddress, PickUpAddress = model.PickUpAddress, Phone = model.Phone };
                _orderRepository.Add(order);
                _unitOfWork.SaveChanges();
                return Task.FromResult(order.Id);
            }
            catch (Exception ex)
            {
                _logger.LogError("Error", ex);
                return Task.FromResult(0);
            }
        }

        public async Task<int> ConfirmOrder(int orderId, string bankReferenceId)
        {
            var order = _orderRepository.QueryAllIncluding(o => o.Items).FirstOrDefault(a => a.Id == orderId);

            if (order == null)
            {
                _logger.LogInformation("Fail to remove order - order does not exist.", orderId);
                return 0;

            }

            if (bankReferenceId == null || bankReferenceId == "")
            {
                _logger.LogInformation("Cannot confirm without bank reference.", bankReferenceId);
                return 0;
            }
            order.BankReferenceId = bankReferenceId;
            _unitOfWork.SaveChanges();

            await _sengridService.SendMailAsync(order);

            return 1;

        }

        public void Delete(Order order)
        {
            try
            {
                _orderRepository.Delete(order);
                _unitOfWork.SaveChanges();
            }
            catch (Exception ex)
            {
                _logger.LogError("Error while deleting order", ex);
            }
        }
    }
}