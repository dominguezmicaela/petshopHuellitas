using Huellitas.Core.DTO.Auth;// en core no lo tengi aun
namespace Huellitas.Service.Interfaces
{
    public interface IAuthService
    {
        // recibe datos de login y devuelve token o null
        Task<string> LoginAsync(LoginDto loginDto);
    }
}