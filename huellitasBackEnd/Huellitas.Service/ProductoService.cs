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
        // obtener todos
        public async Task <IEnumerable<Producto>> ObtenerProductosAsync()
        {
            return await _productoRepositorio.ObtenerTodosAsync();
        }
        //obtener uno
        public async Task<Producto?> ObtenerProductoPorIdAsync(int id)
        {
            return await _productoRepositorio.ObtenerPorIdAsync(id);
        }
        //guardar
        public async Task <Producto> CrearProductoAsync(Producto producto)
        {
            if (producto.precio<0){throw new Exception("El precio no puede ser negattivo");}
            return await _productoRepositorio.CrearAsync(producto);

        }
        //actualizar 
        public async Task<Producto> ActualizarProductoAsync(int id,Producto producto)
        {
            if (id != producto.idProducto)
            {
                throw new SystemException("id de producto no coincide");
            }
            return await _productoRepositorio.ActualizarAsync(producto);
        }

        //eliminar
        public async Task<bool>EliminarProductoAsync(int id)
        {
            var producto=await _productoRepositorio.ObtenerPorIdAsync(id);
            if (producto==null){ return false;}
            await _productoRepositorio.EliminarAsync(producto);
            return true;
        }

    }
}