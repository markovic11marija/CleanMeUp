using CleanMeUp.Domain.Model.Core;
using MediatR;
using Newtonsoft.Json;

namespace CleanMeUp.Domain.Service.Order
{
    public class ConfirmOrderCommand : IRequest<CommandResult<CommandEmptyResult>>
    {
        public int OrderId { get; set; }
        public string BankReferenceId { get; set; }
        [JsonProperty("MerchantID")]
        public string MerchantId { get; set; }
        public string Signature { get; set; }
    }
}
