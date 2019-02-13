
function mostrar()
{
    var Efectivo;
    var Recargo;
    var PrecioFinal;
    Efectivo=prompt("Ingrese el precio del producto");
    Recargo= parseInt(Efectivo)*0.10;
    PrecioFinal= parseInt(Efectivo)+Recargo;
    alert("El precio del producto en efectivo es :$"+Efectivo+", con tarjeta tiene un recargo del 10% que seria $"+Recargo+" de recargo, costandole final $"+PrecioFinal)
}
