using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Huellitas.Data.Migrations
{
    /// <inheritdoc />
    public partial class MigracionCompleta : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // passwordHash: TEXT -> varchar(60)
            migrationBuilder.AlterColumn<string>(
                name: "passwordHash",
                table: "Usuario",
                type: "character varying(60)",
                maxLength: 60,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            // telefono: columna nueva
            migrationBuilder.AddColumn<string>(
                name: "telefono",
                table: "Usuario",
                type: "character varying(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "");

            // img: TEXT -> varchar(255)
            migrationBuilder.AlterColumn<string>(
                name: "img",
                table: "producto",
                type: "character varying(255)",
                maxLength: 255,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            // descripcion: TEXT -> varchar(500)
            migrationBuilder.AlterColumn<string>(
                name: "descripcion",
                table: "producto",
                type: "character varying(500)",
                maxLength: 500,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            // columnas nuevas en producto
            migrationBuilder.AddColumn<bool>(
                name: "activo",
                table: "producto",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "marca",
                table: "producto",
                type: "character varying(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<decimal>(
                name: "pesoKg",
                table: "producto",
                type: "numeric(10,3)",
                nullable: false,
                defaultValue: 0m);

            // direccionEnvio: columna nueva en Pedido
            migrationBuilder.AddColumn<string>(
                name: "direccionEnvio",
                table: "Pedido",
                type: "character varying(255)",
                maxLength: 255,
                nullable: false,
                defaultValue: "");

            // Tablas nuevas
            migrationBuilder.CreateTable(
                name: "Devolucion",
                columns: table => new
                {
                    idDevolucion = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    idPedido = table.Column<int>(type: "integer", nullable: false),
                    idUsuario = table.Column<int>(type: "integer", nullable: false),
                    motivo = table.Column<string>(type: "character varying(300)", maxLength: 300, nullable: false),
                    estado = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    fechaSolicitud = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    fechaResolucion = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    montoReembolso = table.Column<decimal>(type: "numeric(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Devolucion", x => x.idDevolucion);
                    table.ForeignKey(
                        name: "FK_Devolucion_Pedido_idPedido",
                        column: x => x.idPedido,
                        principalTable: "Pedido",
                        principalColumn: "idPedido",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Devolucion_Usuario_idUsuario",
                        column: x => x.idUsuario,
                        principalTable: "Usuario",
                        principalColumn: "idUsuario",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Favorito",
                columns: table => new
                {
                    idFavorito = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    idProducto = table.Column<int>(type: "integer", nullable: false),
                    idUsuario = table.Column<int>(type: "integer", nullable: false),
                    fechaAgregado = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Favorito", x => x.idFavorito);
                    table.ForeignKey(
                        name: "FK_Favorito_Usuario_idUsuario",
                        column: x => x.idUsuario,
                        principalTable: "Usuario",
                        principalColumn: "idUsuario",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Favorito_producto_idProducto",
                        column: x => x.idProducto,
                        principalTable: "producto",
                        principalColumn: "idProducto",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Notificacion",
                columns: table => new
                {
                    idNotificacion = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    idUsuario = table.Column<int>(type: "integer", nullable: false),
                    tipo = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    fecha = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    mensaje = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false),
                    leida = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notificacion", x => x.idNotificacion);
                    table.ForeignKey(
                        name: "FK_Notificacion_Usuario_idUsuario",
                        column: x => x.idUsuario,
                        principalTable: "Usuario",
                        principalColumn: "idUsuario",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PedidoEstado",
                columns: table => new
                {
                    idPedidoEstado = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    idPedido = table.Column<int>(type: "integer", nullable: false),
                    estado = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    fecha = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    observacion = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PedidoEstado", x => x.idPedidoEstado);
                    table.ForeignKey(
                        name: "FK_PedidoEstado_Pedido_idPedido",
                        column: x => x.idPedido,
                        principalTable: "Pedido",
                        principalColumn: "idPedido",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Resenia",
                columns: table => new
                {
                    idResenia = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    idProducto = table.Column<int>(type: "integer", nullable: false),
                    idUsuario = table.Column<int>(type: "integer", nullable: false),
                    calificacion = table.Column<int>(type: "integer", nullable: false),
                    comentario = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
                    fecha = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Resenia", x => x.idResenia);
                    table.ForeignKey(
                        name: "FK_Resenia_Usuario_idUsuario",
                        column: x => x.idUsuario,
                        principalTable: "Usuario",
                        principalColumn: "idUsuario",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Resenia_producto_idProducto",
                        column: x => x.idProducto,
                        principalTable: "producto",
                        principalColumn: "idProducto",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Devolucion_idPedido",
                table: "Devolucion",
                column: "idPedido",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Devolucion_idUsuario",
                table: "Devolucion",
                column: "idUsuario");

            migrationBuilder.CreateIndex(
                name: "IX_Favorito_idProducto",
                table: "Favorito",
                column: "idProducto");

            migrationBuilder.CreateIndex(
                name: "IX_Favorito_idUsuario",
                table: "Favorito",
                column: "idUsuario");

            migrationBuilder.CreateIndex(
                name: "IX_Notificacion_idUsuario",
                table: "Notificacion",
                column: "idUsuario");

            migrationBuilder.CreateIndex(
                name: "IX_PedidoEstado_idPedido",
                table: "PedidoEstado",
                column: "idPedido");

            migrationBuilder.CreateIndex(
                name: "IX_Resenia_idProducto",
                table: "Resenia",
                column: "idProducto");

            migrationBuilder.CreateIndex(
                name: "IX_Resenia_idUsuario",
                table: "Resenia",
                column: "idUsuario");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Devolucion");

            migrationBuilder.DropTable(
                name: "Favorito");

            migrationBuilder.DropTable(
                name: "Notificacion");

            migrationBuilder.DropTable(
                name: "PedidoEstado");

            migrationBuilder.DropTable(
                name: "Resenia");

            migrationBuilder.DropColumn(
                name: "telefono",
                table: "Usuario");

            migrationBuilder.DropColumn(
                name: "activo",
                table: "producto");

            migrationBuilder.DropColumn(
                name: "marca",
                table: "producto");

            migrationBuilder.DropColumn(
                name: "pesoKg",
                table: "producto");

            migrationBuilder.DropColumn(
                name: "direccionEnvio",
                table: "Pedido");

            migrationBuilder.AlterColumn<string>(
                name: "passwordHash",
                table: "Usuario",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(60)",
                oldMaxLength: 60);

            migrationBuilder.AlterColumn<string>(
                name: "img",
                table: "producto",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(255)",
                oldMaxLength: 255);

            migrationBuilder.AlterColumn<string>(
                name: "descripcion",
                table: "producto",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(500)",
                oldMaxLength: 500);
        }
    }
}