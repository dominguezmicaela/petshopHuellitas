using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Huellitas.Core.Entities{

    [Table("producto")]

    public class Producto
    {
        [Key]
        public int  idProducto{ get; set;}

        [Required]
        public int idCategoria{get;set;}

        [Required]
        [MaxLength(100)]
        public string nombre{get; set;} = string.Empty;

        [Column(TypeName = "decimal(18,2)")]
        public decimal precio{get;set;}

        [MaxLength(255)]
        public string img{get;set;}=string.Empty;

        public int stockActual{get;set;}

        public int stockMinimo { get; set;}

        [MaxLength(500)]
        public string descripcion { get; set;}=string.Empty;

        [MaxLength(100)]
        public string marca { get; set; }=string.Empty;

        [Column(TypeName = "decimal(10,3)")]
        public decimal pesoKg { get; set; }

        public bool activo { get; set; } = true;

        [ForeignKey("idCategoria")]
        public virtual Categoria Categoria{get;set;}=null!;
        public virtual ICollection<Resenia> resenias { get; set; } = new List<Resenia>();
        public virtual ICollection<Favorito> favoritos { get; set; } = new List<Favorito>();
    }
}