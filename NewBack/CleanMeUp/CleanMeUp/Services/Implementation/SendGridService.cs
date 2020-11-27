using CleanMeUp.Domain.Model;
using CleanMeUp.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Net;
using System.Threading.Tasks;

namespace CleanMeUp.Services.Implementation
{
    public class SendGridService : ISengridService
    {
        private readonly IConfiguration _configuration;

        public SendGridService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public async Task<bool> SendMailAsync(Order model)
        {
            var apiKey = _configuration.GetSection("SENDGRID_API_KEY").Value;
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("orderinformation@cleanmeup.rs", "Clean me up");
            var subject = "Novi zahtev";
            var to = new EmailAddress("info@cleanmeup.rs", "Clean me up");
            var plainTextContent = "";
            var htmlContent = $"<div><p><b>Detalji zahteva</b></p></div><body><div><p>Adresa dostavu: {model.DeliveryAddress }</p><p>Adresa za preuzimanje: {model.PickUpAddress}</p><p>Telefon: {model.Phone }</p><p>Datum: { DateTime.Now: dd/MM/yyyy HH:mm:ss}</p><p>ReferencaBanke: {model.BankReferenceId}</p><p>Stavke: </p>{model.ReturnItems()}</div></body>";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);
            if (response.StatusCode == HttpStatusCode.Accepted)
            {
                return true;
            }
            return false;
        }
    }
}
