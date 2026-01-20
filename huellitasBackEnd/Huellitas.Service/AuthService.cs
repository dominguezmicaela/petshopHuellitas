using Huellitas.Core.DTO.Auth;
using Huellitas.Core.Interfaces;
using Huellitas.Core.Entities; // Para acceder a la entidad Usuario
using Microsoft.Extensions.Configuration; // Para leer appsettings.json
using Microsoft.IdentityModel.Tokens; // Para crear el Token
using System.IdentityModel.Tokens.Jwt; // Para manejar JWT
using System.Security.Claims; // Para los datos dentro del Token
using System.Text; 
using BCrypt.Net;
using Huellitas.Service.Interfaces; // Para verificar la contraseña

namespace huellitas.Service
{
    public class AuthService : IAuthService
    {
        private readonly IUsuarioRepository _usuarioRepository;
        private readonly IConfiguration _configuration;
    }
}