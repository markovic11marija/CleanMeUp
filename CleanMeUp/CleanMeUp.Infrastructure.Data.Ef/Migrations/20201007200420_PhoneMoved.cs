using Microsoft.EntityFrameworkCore.Migrations;

namespace CleanMeUp.Infrastructure.Data.Ef.Migrations
{
    public partial class PhoneMoved : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Phone",
                table: "Item");

            migrationBuilder.AddColumn<string>(
                name: "Phone",
                table: "Order",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Phone",
                table: "Order");

            migrationBuilder.AddColumn<string>(
                name: "Phone",
                table: "Item",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
