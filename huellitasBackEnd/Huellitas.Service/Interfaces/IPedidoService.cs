using Huellitas.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Huellitas.Service.Interfaces
{
    public interface IPedidoService
    {
        Task<IEnumerable<Pedido>> ObtenerPedidosAsync();
        Task<Pedido?> ObtenerPedidoPorIdAsync(int id);
        Task<Pedido> CrearPedidoAsync(Pedido pedido);
        Task<Pedido> ActualizarPedidoAsync(int id, Pedido pedido);
        Task<bool> EliminarPedidoAsync(int id);
    }
}