using Microsoft.AspNetCore.Mvc;
using Huellitas.Core.Entities;
using Huellitas.Service.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

namespace Huellitas.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidosController : ControllerBase
    {
        private readonly IPedidoService _pedidoService;

        public PedidosController(IPedidoService pedidoService)
        {
            _pedidoService = pedidoService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pedido>>> GetPedidos()
        {
            return Ok(await _pedidoService.ObtenerPedidosAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Pedido>> GetPedido(int id)
        {
            var pedido = await _pedidoService.ObtenerPedidoPorIdAsync(id);
            if (pedido == null) return NotFound("Pedido no encontrado");
            return Ok(pedido);
        }

        [HttpPost]
        public async Task<ActionResult<Pedido>> PostPedido(Pedido pedido)
        {
            try
            {
                var nuevoPedido = await _pedidoService.CrearPedidoAsync(pedido);
                return CreatedAtAction(nameof(GetPedido), new { id = nuevoPedido.idPedido }, nuevoPedido);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPedido(int id, Pedido pedido)
        {
            try
            {
                await _pedidoService.ActualizarPedidoAsync(id, pedido);
                return NoContent(); // 204 No Content es el estándar para Updates exitosos
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePedido(int id)
        {
            var eliminado = await _pedidoService.EliminarPedidoAsync(id);
            if (!eliminado)
            {
                return NotFound("No se pudo eliminar: El pedido no existe.");
            }
            return Ok("Pedido eliminado correctamente.");
        }
    }
}