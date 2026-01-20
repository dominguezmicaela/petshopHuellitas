using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Huellitas.Core.Entities;
using Huellitas.Data;
using Microsoft.EntityFrameworkCore;
using Huellitas.Core.Interfaces;
using Huellitas.Service;
using Huellitas.Service.Interfaces;
using Huellitas.Data.Repositorios;

var builder=WebApplication.CreateBuilder(args);
//CONFIGURACION DE JWT
var jwtSettings = builder.Configuration.GetSection("Jwt");
var secretKey = jwtSettings["Key"];
if (string.IsNullOrEmpty(secretKey))
{
    
    throw new Exception("¡ERROR FATAL! No se encontró la propiedad 'Key' dentro de la sección 'Jwt' en appsettings.json. Revisa tu archivo de configuración.");
}

var key = Encoding.ASCII.GetBytes(secretKey);

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = true,
        ValidIssuer = jwtSettings["Issuer"],
        ValidateAudience = true,
        ValidAudience = jwtSettings["Audience"],
        ValidateLifetime = true
    };
});

//zona de servicios 
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// conexion a la bdd
builder.Services.AddDbContext<HuellitasContext>(options =>
options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
//servicio de cors
builder.Services.AddCors(options =>
{
   options.AddPolicy("PermitirFrontend",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddScoped<IProductoRepositorio, ProductoRepositorio>();
builder.Services.AddScoped<IProductoService, ProductoService>();

//construccion
 var app=builder.Build();

//tuberias [middleware]
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();//doc de la api
    app.UseSwaggerUI();//muestro la pagina para prueba
}

//redireccion a https seguro
app.UseHttpsRedirection();
//activo politica cors
app.UseCors("PermitirFrontend");
//verificacion de usuaerio
app.UseAuthentication();
//QUE PERMISOS TIENE
app.UseAuthorization();


// busco controladores y crea las rutas 
app.MapControllers();


//arranque
app.Run();