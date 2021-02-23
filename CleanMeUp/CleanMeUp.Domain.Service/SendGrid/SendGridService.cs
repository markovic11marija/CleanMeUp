using CleanMeUp.Domain.Model;
using Microsoft.Extensions.Configuration;
using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace CleanMeUp.Domain.Service.SendGrid
{
    public class SendGridService
    {
        private readonly Model.Order _order;
        private readonly IConfiguration _configuration;

        public SendGridService(Model.Order order, IConfiguration configuration)
        {
            _order = order;
            _configuration = configuration;
        }
        public async System.Threading.Tasks.Task<bool> SendMailAsync()
        {
            var apiKey = _configuration.GetSection("SENDGRID_API_KEY").Value;
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("orderinformation@cleanmeup.rs", "Clean me up");
            var subject = "Novi zahtev";
            var to = new EmailAddress("info@cleanmeup.rs", "Clean me up");
            var plainTextContent = "";
            var htmlContent = $"<div><p><b>Detalji zahteva</b></p></div><body><div><p>Adresa dostavu: {_order.DeliveryAddress.AddressForMail() }</p><p>Adresa za preuzimanje: {_order.PickUpAddress.AddressForMail()}</p><p>Telefon: {_order.Phone }</p><p>Datum: { _order.DateCreated : dd/MM/yyyy HH:mm:ss}</p><p>ReferencaBanke: {_order.BankReferenceId}</p><p>Stavke: </p>{_order.ReturnItems()}<p>Napomena: {_order.Note}</p><p>Napomena za dostavu: {_order.DeliveryNote}</p></div></body>";
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

