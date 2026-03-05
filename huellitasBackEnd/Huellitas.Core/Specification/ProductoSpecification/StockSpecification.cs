using Huellitas.Core.Entities;
using Huellitas.Core.Specifications.Base;

namespace Huellitas.Core.Specifications.ProductoSpecifications;

public class EnStockSpecification : Specification<Producto>
{
    public override IQueryable<Producto> Apply(IQueryable<Producto> query)
    {
        return query.Where(p => p.Stock > 0);
    }
}