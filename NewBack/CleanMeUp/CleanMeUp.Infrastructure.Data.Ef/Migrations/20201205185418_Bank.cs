using Microsoft.EntityFrameworkCore.Migrations;

namespace CleanMeUp.Infrastructure.Data.Ef.Migrations
{
    public partial class Bank : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Order",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "BankReqest",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MerchantID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TerminalID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TranCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Currency = table.Column<int>(type: "int", nullable: false),
                    AltCurrency = table.Column<int>(type: "int", nullable: false),
                    ApprovalCode = table.Column<int>(type: "int", nullable: false),
                    OrderID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Signature = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PurchaseTime = table.Column<int>(type: "int", nullable: false),
                    TotalAmount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    AltTotalAmount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ProxyPan = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SD = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    XID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rrn = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Delay = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    local = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BankReqest", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BankReqest");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Order");
        }
    }
}
