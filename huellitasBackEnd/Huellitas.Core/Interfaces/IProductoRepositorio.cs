using System.Collections.Generic;
using System.Threading.Tasks;
using Huellitas.Core.Entities;
namespace Huellitas.Core.Interfaces
{
    public interface IProductoRepositorio
    {
        Task<IEnumerable<Producto>> ObtenerTodosAsync();
        Task<Producto?> ObtenerPorIdAsync(int id);
        Task<Producto> CrearAsync(Producto producto);
        Task<Producto> ActualizarAsync(Producto producto);
        Task EliminarAsync(Producto producto);
    }
}