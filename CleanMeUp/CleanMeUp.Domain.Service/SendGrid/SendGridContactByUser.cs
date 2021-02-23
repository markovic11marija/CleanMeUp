using CleanMeUp.Domain.Service.ContactOwners;
using Microsoft.Extensions.Configuration;
using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Net;

namespace CleanMeUp.Domain.Service.SendGrid
{
    public  class SendGridContactByUser
    {
        private readonly IConfiguration _configuration;
        private readonly ContactOwnersCommand _request;

        public SendGridContactByUser(IConfiguration configuration, ContactOwnersCommand request)
        {
            _configuration = configuration;
            _request = request;
        }
        public async System.Threading.Tasks.Task<bool> SendMailAsync()
        {
            var apiKey = _configuration.GetSection("SENDGRID_API_KEY").Value;
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("orderinformation@cleanmeup.rs", "Clean me up");
            var subject = "Zahtev za kontakt";
            var to = new EmailAddress("info@cleanmeup.rs", "Clean me up");
            var plainTextContent = "";
            var htmlContent = $"<div><p><b>Detalji zahteva</b></p></div><body><div><p>Korisnik: {_request.Name }</p><p>Sa e-mailom: {_request.Email}</p><p>Poslao je poruku sledece sadržine: {_request.Message }</p><p>Datum poruke: { DateTime.Now: dd/MM/yyyy HH:mm:ss}</p></div></body>";
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

