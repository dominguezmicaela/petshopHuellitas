using Huellitas.Core.Entities;
using Huellitas.Core.Interfaces;
using Huellitas.Service.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

namespace Huellitas.Service
{
    public class PedidoService : IPedidoService
    {
        private readonly IPedidoRepositorio _pedidoRepositorio;

        public PedidoService(IPedidoRepositorio pedidoRepositorio)
        {
            _pedidoRepositorio = pedidoRepositorio;
        }

        public async Task<IEnumerable<Pedido>> ObtenerPedidosAsync()
        {
            return await _pedidoRepositorio.ObtenerTodosAsync();
        }

        public async Task<Pedido?> ObtenerPedidoPorIdAsync(int id)
        {
            return await _pedidoRepositorio.ObtenerPorIdAsync(id);
        }

        public async Task<Pedido> CrearPedidoAsync(Pedido pedido)
        {
            if (pedido.total < 0) throw new Exception("El total no puede ser negativo.");
            return await _pedidoRepositorio.CrearAsync(pedido);
        }

        public async Task<Pedido> ActualizarPedidoAsync(int id, Pedido pedido)
        {
            if (id != pedido.idPedido)
            {
                throw new Exception("El ID del pedido no coincide.");
            }
            return await _pedidoRepositorio.ActualizarAsync(pedido);
        }

        public async Task<bool> EliminarPedidoAsync(int id)
        {
            var pedido = await _pedidoRepositorio.ObtenerPorIdAsync(id);
            if (pedido == null) return false;

            await _pedidoRepositorio.EliminarAsync(pedido);
            return true;
        }
    }
}