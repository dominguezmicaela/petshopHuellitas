using Huellitas.Core.Entities;
using Huellitas.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
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
        public async Task<IEnumerable<Producto>> ObtenerTodosAsync()
        {
            return await _context.Productos.ToListAsync();
        }  
        public async Task<Producto?> ObtenerPorIdAsync(int id)
        {
            return await _context.Productos.FindAsync(id);
        }
        public async Task<Producto> CrearAsync(Producto producto)
        {
            await _context.Productos.AddAsync(producto);
            await _context.SaveChangesAsync();
            return producto;
        }
        
    }
}
