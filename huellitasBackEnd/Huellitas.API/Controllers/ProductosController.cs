using Microsoft.AspNetCore.Mvc; 
using Huellitas.Core.Entities;
using Microsoft.EntityFrameworkCore;
using System.IO.Compression;
using Huellitas.Service.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using Huellitas.Data.Repositorios;


namespace Huellitas.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        private readonly IProductoService _productoService;

        // El constructor recibe la conexion a la base de datos
        public ProductosController(IProductoService productoService)
        {
            _productoService= productoService;
        }

        //Obtener todos

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Producto>>> GetProductos()
        {
            var productos=await _productoService.ObtenerProductosAsync();
            return Ok(productos);
        }

        //obtener uno solo 

        [HttpGet("{idProducto}")]
        public async Task <ActionResult<Producto>> GetProducto(int id)
        {
            var producto=await _productoService.ObtenerProductoPorIdAsync(id);
            if (producto == null)
            {
                return NotFound("El producto no existee");
            }
            return Ok(producto);
        }

        //guardar

        [HttpPost]
        public async Task<ActionResult<Producto>> PostProducto(Producto producto)
        {
            try
            {
                var nuevoProducto= await _productoService.CrearProductoAsync(producto);
                return CreatedAtAction(nameof(GetProducto), new { id= nuevoProducto.idProducto},nuevoProducto);
            }
            catch(SystemException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // eliminar

        [HttpDelete("{idProducto}")]
        public async Task<IActionResult> DeleteProducto(int id)
        {
        
            var producto= await _productoService.EliminarProductoAsync(id);
            if (!producto)
            {
                return NotFound("No existe el producto por lo tanto  no se pudo eliminar");
            }

            return Ok("Producto eliminado correctamente");
        }
        //ACTUALIZAR
        
        [HttpPut("{idProducto}")]
        public async Task<IActionResult> PutProducto(int id, Producto producto)
        {
            try
            {
                await _productoService.ActualizarProductoAsync(id, producto);
                return NoContent();
            }
            catch(System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}