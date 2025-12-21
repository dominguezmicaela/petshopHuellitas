using Huellitas.Data;
using Microsoft.EntityFrameworkCore;

var builder=WebApplication.CreateBuilder(args);

//zona de servicios 
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// conexion a la bdd
builder.Services.AddDbContext<HuellitasContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

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

//validacion de usuario mas adelante
app.UseAuthorization();

// busco controladores y crea las rutas 
app.MapControllers();

//arranque
app.Run();