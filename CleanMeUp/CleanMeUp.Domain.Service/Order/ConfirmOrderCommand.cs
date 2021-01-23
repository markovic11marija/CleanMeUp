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
        [JsonProperty("TerminalID")]
        public string TerminalId { get; set; }
        public int TranCode { get; set; }
        public int Currency { get; set; }
        public int? AltCurrency { get; set; }
        public int ApprovalCode { get; set; }
        public string Signature { get; set; }
        public int PurchaseTime { get; set; }
        public int TotalAmount { get; set; }
        public int? AltTotalAmount { get; set; }
    }
}
