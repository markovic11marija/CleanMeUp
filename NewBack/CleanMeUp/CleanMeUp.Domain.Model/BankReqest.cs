using System;
using System.Collections.Generic;
using System.Text;

namespace CleanMeUp.Domain.Model
{
    public class BankReqest:Entity
    {

        public string MerchantID { get; set; }
        public string TerminalID { get; set; }
        public string TranCode { get; set; }
        public string Currency { get; set; }
        public string AltCurrency { get; set; }
        public string ApprovalCode { get; set; }
        public string OrderID { get; set; }
        public string Signature { get; set; }
        public string PurchaseTime { get; set; }
        public string TotalAmount { get; set; }
        public string AltTotalAmount { get; set; }
        public string ProxyPan { get; set; }
        public string SD { get; set; }
        public string XID { get; set; }
        public string Rrn { get; set; }
        public string Delay { get; set; }
        public string local { get; set; }
        public string Email { get; set; }
    }
}
