using Huellitas.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace Huellitas.Service.Interfaces
{
    public interface IProductoService
    {
        Task<IEnumerable<Producto>> ObtenerProductosAsync();
        Task<Producto?> ObtenerProductoPorIdAsync(int id);
        Task<Producto> CrearProductoAsync(Producto producto);
        Task<Producto> ActualizarProductoAsync(int id, Producto producto);
        Task<bool>EliminarProductoAsync(int id);
    }
}
