using System.Collections.Generic;
using System.Threading.Tasks;
using Huellitas.Core.Entities;
namespace Huellitas.Core.Interfaces
{
    public interface IPedidoRepositorio
    {
        Task<IEnumerable<Pedido>> ObtenerTodosAsync();
        Task<Pedido?> ObtenerPorIdAsync(int id);
        Task<Pedido> CrearAsync(Pedido pedido);
        Task<Pedido> ActualizarAsync(Pedido pedido);
        Task EliminarAsync(Pedido pedido);
    }
}
