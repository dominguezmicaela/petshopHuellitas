using Huellitas.Core.Interfaces;

namespace Huellitas.Core.Specifications.Base;

public abstract class Specification<T> : ISpecification<T>
{
    public abstract IQueryable<T> Apply(IQueryable<T> query);
    
    public virtual string Name => GetType().Name;
}