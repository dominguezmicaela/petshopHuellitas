using Huellitas.Core.Entities;
using Huellitas.Core.Interfaces;
using Huellitas.Service.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Huellitas.Service
{
    public class ProductoService : IProductoService
    {
        private readonly IProductoRepositorio _productoRepositorio;
        public ProductoService(IProductoRepositorio productoRepositorio)
        {
            _productoRepositorio=productoRepositorio;
        }
        public async Task <IEnumerable<Producto>> ObtenerProductosAsync()
        {
            return await _productoRepositorio.ObtenerTodosAsync();
        }
        public async Task<Producto?> ObtenerProductoPorIdAsync(int id)
        {
            return await _productoRepositorio.ObtenerPorIdAsync(id);
        }
        public async Task <Producto> CrearProductoAsync(Producto producto)
        {
            if (producto.precio<0){throw new Exception("El precio no puede ser negattivo");}
            return await _productoRepositorio.CrearAsync(producto);
            
        }
    }
}