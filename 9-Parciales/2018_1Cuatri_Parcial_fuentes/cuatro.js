function mostrar()
{
    var CantidadProductos;
    var Precioproducto;
    var tipodepago;
    var descuento;
    var totalD;
    var TotalR;
    var Recargo;
    descuento=0;
    Recargo=0;
    CantidadProductos=prompt("Ingrese la cantidad de productos que compro");
    CantidadProductos=parseInt(CantidadProductos);
    Precioproducto=prompt("Ingrese el precio total de los productos");
    Precioproducto=parseInt(Precioproducto);
    tipodepago=prompt("Ingrese el tipo de pago (Tarjeta o Efectivo)");
    if(CantidadProductos>2){
        descuento=descuento+ 0.10;
        console.log(descuento)
    }
    if(Precioproducto>2000){
        descuento=descuento+ 0.15;
        console.log(descuento)
    }
    if(tipodepago=="Tarjeta"){
        Recargo= 0.10;
        console.log(Recargo)
    }
    if(descuento!=0 || Recargo!=0){
        totalD=Precioproducto*descuento;
        totalD=Precioproducto-totalD;
        if(Recargo!=0 ){
            TotalR=totalD*Recargo;
            TotalR=totalD+TotalR;
            alert("El Precio final es de="+TotalR)
            }else{
                alert("El Precio Final es de="+totalD)
            }

    }

    
    
    alert("Usted tiene un Descuento del "+(descuento*100)+"% y un recargo de "+(Recargo*100)+"%")
}
