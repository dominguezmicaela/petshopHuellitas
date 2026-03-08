using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Huellitas.Core.Entities
{
    [Table("Devolucion")]
    public class  Devolucion
    {
        [Key]
        public int idDevolucion { get; set; }

        [Required]
        public int idPedido { get; set; }

        [Required]
        public int idUsuario { get; set; }

        [MaxLength(300)]
        public string motivo { get; set; } = string.Empty;

        [MaxLength(50)]
        public string estado { get; set; } = string.Empty; //pendiente,aprobado,rechazado

        public DateTime fechaSolicitud { get; set; } = DateTime.UtcNow;

        public DateTime? fechaResolucion { get; set; } = DateTime.UtcNow;

        [Column(TypeName = "decimal(18,2)")]
        public decimal montoReembolso { get; set; }

        //relacion con pedido
        public virtual Pedido Pedido { get; set; } = null!;
        //relacion con usuario
        [ForeignKey("idUsuario")]
        public virtual Usuario Usuario { get; set; } = null!;






    }
}