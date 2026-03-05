using Huellitas.Core.Entities;
using Huellitas.Core.Specifications.Base;

namespace Huellitas.Core.Specifications.ProductoSpecifications;

public class CategoriaSpecification : Specification<Producto>
{
    private readonly string _categoria;
    
    public CategoriaSpecification(string categoria)
    {
        if (string.IsNullOrWhiteSpace(categoria))
            throw new ArgumentException("Categoría no puede ser vacía", nameof(categoria));
            
        _categoria = categoria;
    }
    
    public override IQueryable<Producto> Apply(IQueryable<Producto> query)
    {
        return query.Where(p => p.Categoria == _categoria);
    }
}