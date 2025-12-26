using Huellitas.Core.Entities;
using Huellitas.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations.Operations.Builders;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Huellitas.Data.Repositorios
{
    public class ProductoRepositorio: IProductoRepositorio
    {
        private readonly HuellitasContext _context;
        public  ProductoRepositorio(HuellitasContext context)
        {
            _context=context;
        }
        //obtener todos
        public async Task<IEnumerable<Producto>> ObtenerTodosAsync()
        {
            return await _context.Productos.ToListAsync();
        }  
        //obtener uno
        public async Task<Producto?> ObtenerPorIdAsync(int id)
        {
            return await _context.Productos.FindAsync(id);
        }
       //crear
        public async Task<Producto> CrearAsync(Producto producto)
        {
            await _context.Productos.AddAsync(producto);
            await _context.SaveChangesAsync();
            return producto;
        }
        // actualizar 
        public async Task<Producto> ActualizarAsync(Producto producto)
        {
            _context.Entry(producto).State=EntityState.Modified;
            await _context.SaveChangesAsync();
            return producto;
        }
        //  borrar
        public async Task EliminarAsync(Producto producto)
        {
            _context.Productos.Remove(producto);
            await _context.SaveChangesAsync();
        }

        
    }
}
