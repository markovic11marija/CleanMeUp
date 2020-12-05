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
        public int Currency { get; set; }
        public int AltCurrency { get; set; }
        public int ApprovalCode { get; set; }
        public string OrderID { get; set; }
        public string Signature { get; set; }
        public int PurchaseTime { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal AltTotalAmount { get; set; }
        public string ProxyPan { get; set; }
        public string SD { get; set; }
        public string XID { get; set; }
        public string Rrn { get; set; }
        public string Delay { get; set; }
        public string local { get; set; }
        public string Email { get; set; }
    }
}
