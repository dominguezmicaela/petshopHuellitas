using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Huellitas.Core.Entities
{
    [Table("Rol")]
    public class Rol
    {
        [Key]
        public int idRol{get;set;}

        [Required]
        [MaxLength(50)]
        public string tipoRol{ get; set;}=string.Empty;

        //relacion con usuario
        public virtual ICollection<Usuario>usuarios{get;set;}=new List<Usuario>();
    }

}