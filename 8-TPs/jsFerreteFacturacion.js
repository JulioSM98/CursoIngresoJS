/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var Precio1;
    var Precio2;
    var Precio3;
    var Total;
    Precio1=document.getElementById('PrecioUno').value;
    Precio2=document.getElementById('PrecioDos').value;
    Precio3=document.getElementById('PrecioTres').value;
    Precio1=parseInt(Precio1);
    Precio2=parseInt(Precio2);
    Precio3=parseInt(Precio3);
    Total=Precio1+Precio2+Precio3;
    alert("La suma es de: $"+Total);
}
function Promedio () 
{
	var Precio1;
    var Precio2;
    var Precio3;
    var Promedio;
    Precio1=document.getElementById('PrecioUno').value;
    Precio2=document.getElementById('PrecioDos').value;
    Precio3=document.getElementById('PrecioTres').value;
    Precio1=parseInt(Precio1);
    Precio2=parseInt(Precio2);
    Precio3=parseInt(Precio3);
    Promedio=(Precio1+Precio2+Precio3)/3;
    alert("El promedio es igual a: "+Promedio)
}
function PrecioFinal () 
{
	var Precio1;
    var Precio2;
    var Precio3;
    var precioFinal;
    var iva;
    Precio1=document.getElementById('PrecioUno').value;
    Precio2=document.getElementById('PrecioDos').value;
    Precio3=document.getElementById('PrecioTres').value;
    Precio1=parseInt(Precio1);
    Precio2=parseInt(Precio2);
    Precio3=parseInt(Precio3);
    iva= (Precio1+Precio2+Precio3)*0.21
    precioFinal=(Precio1+Precio2+Precio3)+iva;
    alert("El precio final, mas iva es de: "+precioFinal)
}