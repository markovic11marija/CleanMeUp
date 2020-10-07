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
        private readonly Order _order;
        private readonly IConfiguration _configuration;

        public SendGridService(Order order, IConfiguration configuration)
        {
            _order = order;
            _configuration = configuration;
        }
        public async System.Threading.Tasks.Task<bool> SendMailAsync()
        {
            var apiKey = _configuration.GetSection("SENDGRID_API_KEY").Value;
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("order@cleanmeup.rs", "Clean me up");
            var subject = "Zahtev za ciscenjem ";
            var to = new EmailAddress("info@cleanmeup.rs", "Clean me up");
            var plainTextContent = "";
            //   var htmlContent = $"<div><p><b>Zahtev za voznju</b></p></div><body><div><p>Od: {_order.LocationFrom}</p><p>Do: {_ride.LocationTo}</p><p>Pocetak: {_ride.StartTime }</p><p>Trajanje: {_ride.Duration}</p><p>Datum: {_ride.Date:dd-MM-yyyy}</p><p>Kontakt: {_ride.Contact}</p></div></body>";
            var htmlContent = "<div><p><b>Zahtev za ciscenje</b></p></div>";
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

