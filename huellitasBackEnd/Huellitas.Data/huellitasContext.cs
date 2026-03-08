using Huellitas.Core.Entities;
using Microsoft.EntityFrameworkCore;
namespace Huellitas.Data
{
    //heredo de dbcontext para abrir y cerrar conexiones,realizar transacciones y transformar los datos
    public class HuellitasContext : DbContext
    {
        //constructor
        public HuellitasContext(DbContextOptions<HuellitasContext> options) : base(options)
        {
        }
        //propiedades
        //vaa  representar la tabla productos
        public DbSet<Producto> Productos { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Rol> Roles { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<Detalle> Detalles { get; set; }
        public DbSet<Devolucion> Devoluciones { get; set; }
        public DbSet<Resenia> Resenias { get; set; }
        public DbSet<Favorito> Favoritos { get; set; }
        public DbSet<Notificacion> Notificaciones { get; set; }
        public DbSet<PedidoEstado> PedidoEstados { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Devolucion>()
                .HasOne(d => d.Pedido)
                .WithOne(p => p.devolucion)
                .HasForeignKey<Devolucion>(d => d.idPedido);

            modelBuilder.Entity<Devolucion>()
                .HasOne(d => d.Usuario)
                .WithMany(u => u.devoluciones)
                .HasForeignKey(d => d.idUsuario);
        }
    }
}