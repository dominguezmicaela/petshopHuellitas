using System.Data.Common;

namespace huelitas.Core{
    public class Producto
    {
    
        //propiedades
        public int  Id{ get; set;}
        public string Nombre{get; set;} = string.Empty;// evita los errores de referencia nulos
        public double Precio{get;set;}
        public string Img{get;set;}=string.Empty;
        public string Desc{get;set;}=string.Empty;
        public int Stock{get;set;}

        //metodos
        //para saber si hay stock 
        public bool hayStock()
        {
            return Stock>0;
        }

        //decrementa el stock si hay una venta
        public void vender(int cantidad)
        {
            if(cantidad<=0)
            {
                throw new Exception("la cantidad debe ser mayor a 0");
            }
            if (Stock>=cantidad)
            {
                Stock-=cantidad;
            }
            else
            {
                throw new Exception(" no hay suficiente stok para concretar la venta");
            }
        }


    }
}