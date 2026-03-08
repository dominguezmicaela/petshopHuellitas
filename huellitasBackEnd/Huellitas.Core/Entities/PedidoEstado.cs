using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Huellitas.Core.Entities
{
    [Table("PedidoEstado")]
    public class PedidoEstado
    {
        [Key]
        public int idPedidoEstado { get; set; }

        [Required]
        public int idPedido { get; set; }

        [MaxLength(50)]
        public string estado { get; set; } = string.Empty;

        public DateTime fecha { get; set; } = DateTime.UtcNow;

        [MaxLength(255)]
        public string observacion { get; set; } = string.Empty;

        // Relación con Pedido
        [ForeignKey("idPedido")]
        public virtual Pedido Pedido {get; set;}=null!;
        
    }
}
