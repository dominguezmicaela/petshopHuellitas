namespace Huellitas.Core.DTO;

public class ProductoFiltroDto
{
    public string? Categoria { get; set; }
    public decimal? PrecioMin { get; set; }
    public decimal? PrecioMax { get; set; }
    public bool SoloEnStock { get; set; }
}