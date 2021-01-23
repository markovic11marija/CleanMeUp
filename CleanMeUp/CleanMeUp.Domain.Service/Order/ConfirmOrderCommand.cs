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
        public long? TranCode { get; set; }
        public long? Currency { get; set; }
        public long? AltCurrency { get; set; }
        public long? ApprovalCode { get; set; }
        public string Signature { get; set; }
        public long? PurchaseTime { get; set; }
        public double? TotalAmount { get; set; }
        public int? AltTotalAmount { get; set; }
        public string Email { get; set; }
    }
}
