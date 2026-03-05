using Huellitas.Core.Entities;
using Huellitas.Core.Specifications.Base;

namespace Huellitas.Core.Specifications.ProductoSpecifications;

public class PrecioRangoSpecification : Specification<Producto>
{
    private readonly decimal? _min;
    private readonly decimal? _max;
    
    public PrecioRangoSpecification(decimal? min, decimal? max)
    {
        if (min.HasValue && max.HasValue && min > max)
            throw new ArgumentException("Precio mínimo no puede ser mayor que máximo");
            
        _min = min;
        _max = max;
    }
    
    public override IQueryable<Producto> Apply(IQueryable<Producto> query)
    {
        if (_min.HasValue)
            query = query.Where(p => p.Precio >= _min.Value);
            
        if (_max.HasValue)
            query = query.Where(p => p.Precio <= _max.Value);
            
        return query;
    }
}