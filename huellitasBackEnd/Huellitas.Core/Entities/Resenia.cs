using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Huellitas.Core.Entities
{
	[Table("Resenia")]
	public class Resenia 
	{
		[Key]
		public int idResenia { get; set; }

		[Required]
		public int idProducto { get; set; }

		[Required]
		public int idUsuario { get; set; }

		[Range(1, 5)]
		public int calificacion { get; set; }

		[MaxLength(500)]
		public string comentario { get; set; } = string.Empty;

		public DateTime fecha { get; set; } = DateTime.UtcNow;

		//relacion con producto
		[ForeignKey("idProducto")]
		public virtual Producto Producto { get; set; } = null!;

		//relacion con usuario
		[ForeignKey("idUsuario")]
		public virtual Usuario Usuario { get; set; } = null!;



	}

}

