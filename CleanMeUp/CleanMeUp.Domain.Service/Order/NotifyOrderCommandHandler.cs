using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CleanMeUp.Domain.Service.Order
{
    public class NotifyOrderCommandHandler : IRequestHandler<NotifyOrderCommand, CommandResult<string>>
    {
        public async Task<CommandResult<string>> Handle(NotifyOrderCommand request, CancellationToken cancellationToken)
        {
            var notifyResponseParams = new List<string>();
            notifyResponseParams.Add($"MerchantID='{request.MerchantID}'");
            notifyResponseParams.Add($"TerminalID='{request.TerminalID}'");
            notifyResponseParams.Add($"OrderID='{request.OrderID}'");
            notifyResponseParams.Add($"Currency='{request.Currency}'");
            notifyResponseParams.Add($"TotalAmount='{request.TotalAmount}'");
            notifyResponseParams.Add($"XID='{request.XID}'");
            notifyResponseParams.Add($"PurchaseTime='{request.PurchaseTime}'");
            notifyResponseParams.Add($"Response.action='approve'");
            notifyResponseParams.Add($"Response.reason=");
            notifyResponseParams.Add($"Response.forwardUrl=\n");

            return await Task.FromResult(CommandResult<string>.Success(string.Join("\n", notifyResponseParams.ToArray())));

        }
    }
}
