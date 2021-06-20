using MediatR;

namespace CleanMeUp.Domain.Service.Order
{
    public class NotifyOrderCommand : IRequest<CommandResult<string>>
    {
        public long PurchaseTime { get; set; }
        public string ProxyPan { get; set; }
        public string Currency { get; set; }
        public string ApprovalCode { get; set; }
        public string MerchantID { get; set; }
        public string OrderID { get; set; }
        public string Signature { get; set; }
        public string Rrn { get; set; }
        public string XID { get; set; }
        public string Email { get; set; }
        public string SD { get; set; }
        public string TranCode { get; set; }
        public string TerminalID { get; set; }
        public string TotalAmount { get; set; }

    }
}
