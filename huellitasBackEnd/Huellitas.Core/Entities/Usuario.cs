using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace Huellitas.Core.Entities
{
    [Table("Usuario")]
    public class Usuario
    {
        [Key]
        public int  idUsuario{get;set;}

        [Required]
        [MaxLength(100)]
        public string nombre{get;set;}=string.Empty;
        
        [Required]
        [MaxLength(100)]
        public string apellido{get;set;}=string.Empty;
        
        [Required]
        [MaxLength(100)]
        [EmailAddress]
        public string email{get;set;}=string.Empty;
        
        [Required]
        [MaxLength(60)]
        public string passwordHash{get; set;}=string.Empty;
        
        [MaxLength(250)]
        public string direccion{get;set;}=string.Empty;
        
        [MaxLength(50)]
        public string segmentoCliente{get;set;}=string.Empty;
        
        [MaxLength(20)]
        public string telefono{get;set;}=string.Empty;  
        
        //rel con rol
        [Required]
        public int idRol{get;set;}
        [ForeignKey("idRol")]
        public virtual Rol rol{get;set;}=null!;
        //realcion con pedidos
        public virtual ICollection<Pedido> Pedidos{get;set;}=new List<Pedido>();
        public virtual ICollection<Resenia> resenias { get; set; } = new List<Resenia>();
        public virtual ICollection<Favorito> favoritos { get; set; } = new List<Favorito>();
        public virtual ICollection<Notificacion> notificaciones { get; set; } = new List<Notificacion>();
        public virtual ICollection<Devolucion> devoluciones { get; set; } = new List<Devolucion>();
    }
}