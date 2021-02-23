using Microsoft.EntityFrameworkCore.Migrations;

namespace CleanMeUp.Infrastructure.Data.Ef.Migrations
{
    public partial class NotesAddresses : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeliveryAddress",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "PickUpAddress",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Address");

            migrationBuilder.DropColumn(
                name: "Country",
                table: "Address");

            migrationBuilder.DropColumn(
                name: "HouseNumberAddition",
                table: "Address");

            migrationBuilder.AddColumn<int>(
                name: "DeliveryAddressId",
                table: "Order",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeliveryNote",
                table: "Order",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "Order",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PickUpAddressId",
                table: "Order",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "District",
                table: "Address",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Order_DeliveryAddressId",
                table: "Order",
                column: "DeliveryAddressId");

            migrationBuilder.CreateIndex(
                name: "IX_Order_PickUpAddressId",
                table: "Order",
                column: "PickUpAddressId");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Address_DeliveryAddressId",
                table: "Order",
                column: "DeliveryAddressId",
                principalTable: "Address",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Address_PickUpAddressId",
                table: "Order",
                column: "PickUpAddressId",
                principalTable: "Address",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Address_DeliveryAddressId",
                table: "Order");

            migrationBuilder.DropForeignKey(
                name: "FK_Order_Address_PickUpAddressId",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_DeliveryAddressId",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_PickUpAddressId",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "DeliveryAddressId",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "DeliveryNote",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "Note",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "PickUpAddressId",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "District",
                table: "Address");

            migrationBuilder.AddColumn<string>(
                name: "DeliveryAddress",
                table: "Order",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PickUpAddress",
                table: "Order",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Address",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Country",
                table: "Address",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "HouseNumberAddition",
                table: "Address",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
