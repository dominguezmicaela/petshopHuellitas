using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Huellitas.Core.Entities
{
    [Table("Favorito")]

    public class Favorito
    {
        [Key]
        public int idFavorito { get; set;}

        [Required]
        public int idProducto { get; set; }

        [Required]
        public int idUsuario { get; set; }

        public DateTime fechaAgregado { get; set; } = DateTime.UtcNow;

        //relacion con producto
        [ForeignKey("idProducto")]
        public virtual Producto Producto { get; set; } = null!;

        //relacion con usuario
        [ForeignKey("idUsuario")]
        public virtual Usuario Usuario { get; set; } = null!;

    }
}