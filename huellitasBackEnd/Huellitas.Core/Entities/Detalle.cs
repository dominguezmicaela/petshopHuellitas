using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Huellitas.Core.Entities
{
    [Table("Detalle")]
    public class Detalle
    {
        [Key]
        public int idDetalle{get; set;}

        [Required]
        public int idPedido{get;set;}

        [Required]
        public int cantidad {get;set;}

        [Column(TypeName = "decimal(18,2)")]
        public decimal precioUnitario{get; set;}

        // relacion con pedido
        [ForeignKey("idPedido")]
        public virtual Pedido Pedido {get;set;}=null!;

        //conexion con producto
        public int idProducto{get;set;}
        [ForeignKey("idProducto")]
        public virtual Producto producto{get;set;}= null!;
        
    }
}