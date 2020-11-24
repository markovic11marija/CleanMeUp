using Microsoft.EntityFrameworkCore.Migrations;

namespace CleanMeUp.Infrastructure.Data.Ef.Migrations
{
    public partial class AddingBankReference : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BankReferenceId",
                table: "Order",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BankReferenceId",
                table: "Order");
        }
    }
}
