function mostrar()
{
    /* var CantidadProductos;
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

    
    
    alert("Usted tiene un Descuento del "+(descuento*100)+"% y un recargo de "+(Recargo*100)+"%") */
    var Numero1;
    var Numero2;
    var Numero3;
    var Numero4;
    var total;
    var mayor;
    var message="";
    Numero1=prompt("Ingrese un numero");
    Numero2=prompt("Ingrese un numero");
    Numero3=prompt("Ingrese un numero");
    Numero4=prompt("Ingrese un numero");
    Numero1=parseInt(Numero1);
    Numero2=parseInt(Numero2);
    Numero3=parseInt(Numero3);
    Numero4=parseInt(Numero4);
    total=Numero1+Numero2+Numero3+Numero4;
    if(Numero1>Numero2 && Numero1>Numero3 && Numero1>Numero4 ){
        mayor=Numero1;
    }else{
        if(Numero2>Numero1 && Numero2>Numero3 && Numero2>Numero4){
            mayor=Numero2;
        }else{
            if(Numero3>Numero1 && Numero3>Numero2 && Numero3>Numero4){
                mayor=Numero3;
            }else{
                mayor=Numero4;
            }
        }
    }
    alert("el numero mayo es "+ mayor)
    if(total>100){
        total=total*0.90;
        message="al total se le aplico un 10% de descuento "+total
    }else{
        if(total>50){
        total=total*0.95;
        message="al total se le aplico un 5% de descuento "+total 
        }else{
            total=total*1.15;
            message="al total se le aplico un 15% mas "+total
        }
    }
    
    if(message!=""){
        alert(message);
    }


}
