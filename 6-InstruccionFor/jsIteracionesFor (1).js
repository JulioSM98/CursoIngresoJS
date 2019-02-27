function mostrar()
{
    var numero;
    var contador1=0;
    var contador2=0;
    var contador3=0;
    var contador4=0;
    var contador5=0;
    var contador6=0;
    var contador7=0;
    var contador8=0;
    var contador9=0;
    var contador10=0;
    for(contador0=0;contador0<1000;contador0++){
        numero=Math.floor(Math.random()*10+1);
        switch(numero){
            case 1:
            contador1++;
            break;
            case 2:
            contador2++;
            break;
            case 3:
            contador3++;
            break;
            case 4:
            contador4++;
            break;
            case 5:
            contador5++;
            break;
            case 6:
            contador6++;
            break;
            case 7:
            contador7++;
            break;
            case 8:
            contador8++;
            break;
            case 9:
            contador9++;
            break;
            case 10:
            contador10++;
            break
        }
    }
    console.log(contador0);
    console.log("el uno salio "+contador1+" el porcentaje es de "+(contador1*100)/contador0+"%");
    console.log("el dos salio "+contador2+" el porcentaje es de "+(contador2*100)/contador0+"%");
    console.log("el tres salio "+contador3+" el porcentaje es de "+(contador3*100)/contador0+"%");
    console.log("el cuatro salio "+contador4+" el porcentaje es de "+(contador4*100)/contador0+"%");
    console.log("el cinco salio "+contador5+" el porcentaje es de "+(contador5*100)/contador0+"%");
    console.log("el seis salio "+contador6+" el porcentaje es de "+(contador6*100)/contador0+"%");
    console.log("el siete salio "+contador7+" el porcentaje es de "+(contador7*100)/contador0+"%");
    console.log("el ocho salio "+contador8+" el porcentaje es de "+(contador8*100)/contador0+"%");
    console.log("el nueve salio "+contador9+" el porcentaje es de "+(contador9*100)/contador0+"%");
    console.log("el diez salio "+contador10+" el porcentaje es de "+(contador10*100)/contador0+"%")

    
 }