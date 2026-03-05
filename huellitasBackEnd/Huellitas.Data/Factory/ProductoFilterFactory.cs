using Huellitas.Core.DTO;
using Huellitas.Core.Entities;
using Huellitas.Core.Interfaces;
using Huellitas.Core.Specifications.ProductoSpecifications;
using Microsoft.Extensions.Logging;

namespace Huellitas.Data.Factories;

public class ProductoFilterFactory
{
    private readonly ILogger<ProductoFilterFactory> _logger;
    
    public ProductoFilterFactory(ILogger<ProductoFilterFactory> logger)
    {
        _logger = logger;
    }
    
    public IEnumerable<ISpecification<Producto>> CreateSpecs(ProductoFiltroDto filtros)
    {
        var specs = new List<ISpecification<Producto>>();
        
        if (!string.IsNullOrEmpty(filtros.Categoria))
        {
            specs.Add(new CategoriaSpecification(filtros.Categoria));
            _logger.LogDebug("Agregado filtro de categoría: {Categoria}", filtros.Categoria);
        }
            
        if (filtros.PrecioMin.HasValue || filtros.PrecioMax.HasValue)
        {
            specs.Add(new PrecioRangoSpecification(filtros.PrecioMin, filtros.PrecioMax));
            _logger.LogDebug("Agregado filtro de precio: {Min}-{Max}", 
                filtros.PrecioMin, filtros.PrecioMax);
        }
            
        if (filtros.SoloEnStock)
        {
            specs.Add(new EnStockSpecification());
            _logger.LogDebug("Agregado filtro de stock");
        }
        
        return specs;
    }
}