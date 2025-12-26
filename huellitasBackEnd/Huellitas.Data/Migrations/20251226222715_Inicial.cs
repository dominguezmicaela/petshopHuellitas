using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Huellitas.Data.Migrations
{
    /// <inheritdoc />
    public partial class Inicial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categoria",
                columns: table => new
                {
                    idCategoria = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nombre = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    descripcion = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categoria", x => x.idCategoria);
                });

            migrationBuilder.CreateTable(
                name: "producto",
                columns: table => new
                {
                    idProducto = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nombre = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    precio = table.Column<decimal>(type: "numeric(18,2)", nullable: false),
                    img = table.Column<string>(type: "text", nullable: false),
                    desc = table.Column<string>(type: "text", nullable: false),
                    stockActual = table.Column<int>(type: "integer", nullable: false),
                    stockMinimo = table.Column<int>(type: "integer", nullable: false),
                    idCategoria = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_producto", x => x.idProducto);
                    table.ForeignKey(
                        name: "FK_producto_Categoria_idCategoria",
                        column: x => x.idCategoria,
                        principalTable: "Categoria",
                        principalColumn: "idCategoria",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_producto_idCategoria",
                table: "producto",
                column: "idCategoria");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "producto");

            migrationBuilder.DropTable(
                name: "Categoria");
        }
    }
}
