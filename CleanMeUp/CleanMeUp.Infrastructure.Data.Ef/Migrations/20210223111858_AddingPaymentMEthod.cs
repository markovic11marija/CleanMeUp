using Microsoft.EntityFrameworkCore.Migrations;

namespace CleanMeUp.Infrastructure.Data.Ef.Migrations
{
    public partial class AddingPaymentMEthod : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PaymentMethod",
                table: "Order",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PaymentMethod",
                table: "Order");
        }
    }
}
