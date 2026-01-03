using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Huellitas.Data.Migrations
{
    /// <inheritdoc />
    public partial class AgregoDescripcion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "descripcion",
                table: "producto",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "descripcion",
                table: "producto");
        }
    }
}
