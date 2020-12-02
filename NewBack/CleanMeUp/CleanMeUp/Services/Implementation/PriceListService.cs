using CleanMeUp.Domain.Model;
using CleanMeUp.Domain.Model.Enums;
using CleanMeUp.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CleanMeUp.Services.Implementation
{
    public class PriceListService : IPriceListService
    {
        private readonly IRepository<PriceList> _priceListRepository;
        private readonly IUnitOfWork _unitOfWork;

        public PriceListService(IRepository<PriceList> repository, IUnitOfWork unitOfWork)
        {
            _priceListRepository = repository;
            _unitOfWork = unitOfWork;

        }

        public async Task<List<PriceList>> GetAllPrices()
        {
            return await Task.FromResult(_priceListRepository.QueryAll().ToList());
        }

        public Task<int> AddPriceList(PriceList model)
        {
            try
            {
                var priceList = new PriceList { ServiceType = model.ServiceType, ClothesType = model.ClothesType, Price = model.Price };
                _priceListRepository.Add(priceList);
                _unitOfWork.SaveChanges();
                return Task.FromResult(priceList.Id);
            }
            catch
            {
                return Task.FromResult(0);
            }
        }

        public Task<int> UpdatePriceList(int priceListId, PriceList model)
        {
            try
            {
                var priceList = _priceListRepository.FindById(priceListId);
                priceList.ClothesType = model.ClothesType;
                priceList.ServiceType = model.ServiceType;
                priceList.Price = model.Price;               
                _unitOfWork.SaveChanges();
                return Task.FromResult(priceList.Id);
            }
            catch
            {
                return Task.FromResult(0);
            }
        }

        public async Task<List<EnumResponse>> GetAllServices()
        {
            var a = Enum.GetValues(typeof(ServiceType))
      .Cast<ServiceType>()
          .Select(v => new EnumResponse { Id = (int)v, Name = v.ToString() })
      .ToList();
            return await Task.FromResult(a);
        }

        public async Task<List<EnumResponse>> GetAllClothesTypes()
        {
            var a = Enum.GetValues(typeof(ClothesType))
        .Cast<ClothesType>()
          .Select(v => new EnumResponse { Id = (int)v, Name = v.ToString() })
        .ToList();
            return await Task.FromResult(a);
        }

        public void Delete(PriceList priceList)
        {

            _priceListRepository.Delete(priceList);
            _unitOfWork.SaveChanges();

        }


    }
}
