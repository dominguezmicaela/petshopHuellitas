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


    }
}