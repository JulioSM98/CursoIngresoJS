function mostrar()
{
    var Efectivo;
    var Recargo;
    var PrecioFinal;
    Efectivo=prompt("Ingrese el precio del producto");
    Efectivo= parseInt(Efectivo);
    Recargo=Efectivo*0.10;
    PrecioFinal=Efectivo+Recargo;
    alert("El precio del producto en efectivo es :$"+Efectivo+", con tarjeta tiene un recargo del 10% que seria $"+Recargo+" de recargo, costandole final $"+PrecioFinal)
}
