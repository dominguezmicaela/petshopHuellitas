using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Huellitas.Data.Migrations
{
    /// <inheritdoc />
    public partial class AgregandoTablasRestantes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Rol",
                columns: table => new
                {
                    idRol = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    tipoRol = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rol", x => x.idRol);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    idUsuario = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nombre = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    email = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    passwordHash = table.Column<string>(type: "text", nullable: false),
                    direccion = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
                    segmentoCliente = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    idRol = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.idUsuario);
                    table.ForeignKey(
                        name: "FK_Usuario_Rol_idRol",
                        column: x => x.idRol,
                        principalTable: "Rol",
                        principalColumn: "idRol",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Pedido",
                columns: table => new
                {
                    idPedido = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    fecha = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    total = table.Column<decimal>(type: "numeric(18,2)", nullable: false),
                    metodoPago = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    idUsuario = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pedido", x => x.idPedido);
                    table.ForeignKey(
                        name: "FK_Pedido_Usuario_idUsuario",
                        column: x => x.idUsuario,
                        principalTable: "Usuario",
                        principalColumn: "idUsuario",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Detalle",
                columns: table => new
                {
                    idDetalle = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    cantidad = table.Column<int>(type: "integer", nullable: false),
                    precioUnitario = table.Column<decimal>(type: "numeric(18,2)", nullable: false),
                    idPedido = table.Column<int>(type: "integer", nullable: false),
                    idProducto = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Detalle", x => x.idDetalle);
                    table.ForeignKey(
                        name: "FK_Detalle_Pedido_idPedido",
                        column: x => x.idPedido,
                        principalTable: "Pedido",
                        principalColumn: "idPedido",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Detalle_producto_idProducto",
                        column: x => x.idProducto,
                        principalTable: "producto",
                        principalColumn: "idProducto",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Detalle_idPedido",
                table: "Detalle",
                column: "idPedido");

            migrationBuilder.CreateIndex(
                name: "IX_Detalle_idProducto",
                table: "Detalle",
                column: "idProducto");

            migrationBuilder.CreateIndex(
                name: "IX_Pedido_idUsuario",
                table: "Pedido",
                column: "idUsuario");

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_idRol",
                table: "Usuario",
                column: "idRol");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Detalle");

            migrationBuilder.DropTable(
                name: "Pedido");

            migrationBuilder.DropTable(
                name: "Usuario");

            migrationBuilder.DropTable(
                name: "Rol");
        }
    }
}
