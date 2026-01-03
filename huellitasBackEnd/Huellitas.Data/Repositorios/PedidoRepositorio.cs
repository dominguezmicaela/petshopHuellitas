using Huellitas.Core.Entities;
using Huellitas.Core.Interfaces;
using Huellitas.Data; 
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Huellitas.Data.Repositorios
{
    public class PedidoRepositorio : IPedidoRepositorio
    {
        private readonly HuellitasContext _context;

        public PedidoRepositorio(HuellitasContext context)
        {
            _context = context;
        }

        //obtner todos
        public async Task<IEnumerable<Pedido>> ObtenerTodosAsync()
        {
            return await _context.Pedidos
                                 .Include(p => p.detalles) // Traemos los detalles del pedido
                                 .ToListAsync();
        }

        //obtener por id
        public async Task<Pedido?> ObtenerPorIdAsync(int id)
        {
            return await _context.Pedidos
                                 .Include(p => p.detalles)
                                 .FirstOrDefaultAsync(p => p.idPedido == id);
        }

        //crear
        public async Task<Pedido> CrearAsync(Pedido pedido)
        {
            _context.Pedidos.Add(pedido);
            await _context.SaveChangesAsync();
            return pedido;
        }

        // actualizar
        public async Task<Pedido> ActualizarAsync(Pedido pedido)
        {
            _context.Entry(pedido).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return pedido;
        }

        //eliminar
        public async Task EliminarAsync(Pedido pedido)
        {
            _context.Pedidos.Remove(pedido);
            await _context.SaveChangesAsync();
        }
    }
}