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
        entrada=prompt("ingrese el nombre, peso y temperatura del habita","marco, 40, -30");
        nombre=entrada.split(", ")[0];
        peso=entrada.split(", ")[1];
        peso=parseInt(peso);
        temperatura=entrada.split(", ")[2];
        temperatura=parseInt(temperatura);
        while(isNaN(peso)==true||peso<1||peso>100){
            peso=prompt("reingrese el peso");
            peso=parseInt(peso);
        }
        while(isNaN(temperatura)==true||temperatura<-30||temperatura>30){
            temperatura=prompt("Error en la temperatura, reingrese la temperatura del habita");
            temperatura=parseInt(temperatura);
        }
        //A
        if(temperatura%=0){
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
    promedio=promedio/cont;
    document.write("a")
}
