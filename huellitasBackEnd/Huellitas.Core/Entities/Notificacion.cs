using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Huellitas.Core.Entities {
    [Table("Notificacion")]

    public class Notificacion
    {
        [Key]
        public int idNotificacion { get; set; }

        [Required]
        public int idUsuario { get; set; }

        [MaxLength(50)]
        public string tipo { get; set; } = string.Empty;

        public DateTime fecha { get; set; } = DateTime.UtcNow;

        [MaxLength(255)]
        public string mensaje { get; set; } = string.Empty;

        public bool leida { get; set; } = false;

        //relacion con usuario
        [ForeignKey("idUsuario")]
        public virtual Usuario Usuario { get; set; } = null!;


    }
}