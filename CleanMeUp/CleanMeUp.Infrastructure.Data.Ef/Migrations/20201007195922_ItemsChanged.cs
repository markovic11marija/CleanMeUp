using Microsoft.EntityFrameworkCore.Migrations;

namespace CleanMeUp.Infrastructure.Data.Ef.Migrations
{
    public partial class ItemsChanged : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Item_Image_ImageId",
                table: "Item");

            migrationBuilder.DropIndex(
                name: "IX_Item_ImageId",
                table: "Item");

            migrationBuilder.DropColumn(
                name: "AdditionalComment",
                table: "Item");

            migrationBuilder.DropColumn(
                name: "ClothesType",
                table: "Item");

            migrationBuilder.DropColumn(
                name: "ImageId",
                table: "Item");

            migrationBuilder.DropColumn(
                name: "ServiceType",
                table: "Item");

            migrationBuilder.AddColumn<int>(
                name: "Count",
                table: "Item",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Item",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Count",
                table: "Item");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Item");

            migrationBuilder.AddColumn<string>(
                name: "AdditionalComment",
                table: "Item",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ClothesType",
                table: "Item",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ImageId",
                table: "Item",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ServiceType",
                table: "Item",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Item_ImageId",
                table: "Item",
                column: "ImageId");

            migrationBuilder.AddForeignKey(
                name: "FK_Item_Image_ImageId",
                table: "Item",
                column: "ImageId",
                principalTable: "Image",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
