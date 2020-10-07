using Microsoft.EntityFrameworkCore.Migrations;

namespace CleanMeUp.Infrastructure.Data.Ef.Migrations
{
    public partial class orderFixed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
                name: "PickUpAddressId",
                table: "Order");

            migrationBuilder.AddColumn<string>(
                name: "DeliveryAddress",
                table: "Order",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PickUpAddress",
                table: "Order",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeliveryAddress",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "PickUpAddress",
                table: "Order");

            migrationBuilder.AddColumn<int>(
                name: "DeliveryAddressId",
                table: "Order",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PickUpAddressId",
                table: "Order",
                type: "int",
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
    }
}
