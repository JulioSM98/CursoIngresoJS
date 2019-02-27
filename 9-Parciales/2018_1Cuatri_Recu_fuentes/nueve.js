function mostrar()
{
    var entrada;
    var decision=true;
    var nombre;
    var peso;
    var temperatura;
    var temperaturaPares=0;
    var pesoMax=0;
    var animalesFrios=0;
    var cont=0;
    var pesoMax0g=0;
    var pesoMin0g=1000;
    while(decision==true){
        nombre=prompt("ingrese el nombre del animal");
        peso=prompt("ingrese el peso")
        peso=parseInt(peso);
        while(isNaN(peso)==true||peso<1||peso>100){
            peso=prompt("reingrese el peso");
            peso=parseInt(peso);
        }
        temperatura=prompt("ingrese la temperatura del habita")
        temperatura=parseInt(temperatura);
        while(isNaN(temperatura)==true||temperatura<-30||temperatura>30){
            temperatura=prompt("Error en la temperatura, reingrese la temperatura del habita");
            temperatura=parseInt(temperatura);
        }
        //A
        if(temperatura%2==0){
            temperaturaPares=temperaturaPares+1;
        }
        //B
        if(peso>pesoMax){
            pesoMax=peso;
            nombreMax=nombre;
            temperaturaMax=temperatura;            
        }
        //CyF
        if(temperatura<0){
            animalesFrios=animalesFrios+1;
            if(peso>pesoMax0g){
                pesoMax0g=peso;
            }else{
                if(peso<pesoMin0g){
                    pesoMin0g=peso
                }
            }

        }
        //d
        cont=cont+1
        promedio=peso+peso;

        decision=confirm("continuar?")
    }
    if(pesoMin0g==1000){
        pesoMin0g=0;
    }
    promedio=promedio/cont;
    document.write("a)La cantidad de temperaturas pares es de: "+temperaturaPares);
    document.write("<br>"+"b) Nombre y temperatura del animal mas pesado: "+nombreMax+" y "+temperaturaMax);
    document.write("<br>"+"c)La cantidad de animales que viven a menos de 0 grados: "+animalesFrios);
    document.write("<br>"+"d)promedio del peso de todos los animales: "+promedio);
    document.write("<br>"+"f)El peso maximo y minimo de todos los animales bajo 0: "+pesoMax0g+" y "+pesoMin0g)
}
