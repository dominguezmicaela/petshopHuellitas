using Huellitas.Core.DTO.Auth;
using Huellitas.Core.Interfaces;
using Huellitas.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

 namespace Huellitas.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authservice;
        public AuthController(IAuthService authService)
        {
            _authservice=authService;
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var token=await _authservice.LoginAsync(loginDto);
            if (token == null)
            {
                return Unauthorized(new{message="E mail o contrasena incorrectos"});
            }
            return Ok(new{token=token});
        }
    }
    
}