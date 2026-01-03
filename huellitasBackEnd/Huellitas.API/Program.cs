using Huellitas.Data;
using Microsoft.EntityFrameworkCore;
using Huellitas.Core.Interfaces;
using Huellitas.Service;
using Huellitas.Service.Interfaces;
using Huellitas.Data.Repositorios;

var builder=WebApplication.CreateBuilder(args);

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
//validacion de usuario mas adelante
app.UseAuthorization();

// busco controladores y crea las rutas 
app.MapControllers();


//arranque
app.Run();