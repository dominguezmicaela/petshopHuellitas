namespace Huellitas.Core.Interfaces;

public interface ISpecification<T>
{
    IQueryable<T> Apply(IQueryable<T> query);
    string Name { get; }
}