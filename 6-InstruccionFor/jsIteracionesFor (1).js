function mostrar()
{
    var numeroingresado;
    var Numeroanterio;
    var recorrido;
    var acumulador;

    numeroingresado=prompt("Ingrese un numero");

    for(recorrido=numeroingresado-1;recorrido>1;recorrido--){
        for(Numeroanterio=recorrido-1;Numeroanterio>0;Numeroanterio--){
            if(numeroingresado%Numeroanterio==0){
                acumulador=acumulador+Numeroanterio;
            }
        }
        if(acumulador==numeroingresado){
            console.log("es primo "+recorrido)
        }
    }
 }