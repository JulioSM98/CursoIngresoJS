// Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
// a) La cantidad de números pares.
// b) La cantidad de números impares.
// c) La cantidad de ceros.
// d) El promedio de todos los números positivos ingresados.
// e) La suma de todos los números negativos.
// f) El número y la letra del máximo y el mínimo.
function mostrar()
{
    var entrada;
    var numero;
    var letra;
    var decision=true;
    var par=0;
    var impar=0;
    var ceros=0;
    var promedio;
    var positivo=0;
    var contador=0;
    var negativos=0;
    var maximo=0;
    var minimo=100;
    var letraMIN;
    var letraMAX;
    while(decision==true){
        entrada=prompt("Ingrese una letra y numero, sin espacios");

        letra=entrada.split(",")[0];
        numero=entrada.split(",")[1]
        numero=parseInt(numero);
        while( isNaN(numero)==true || numero<-100 || numero>100){
            numero=prompt("Reingrese un numero entre -100 y 100");
            numero=parseInt(numero);
        }
        //Ceros,pares e impares
        if(numero==0){
            ceros=ceros+1;
        }else{
            if(numero%2==0){
                par=par+1;
            }else{
                impar=impar+1;
            }
        }
        //promedios
        if(numero>0){
            contador+=1;
            positivo=positivo+numero
        }else{
            negativos=negativos+numero;
        }
        //Maximos y minimos
        if(numero>maximo){
            maximo=numero;
            letraMAX=letra;
        }else{
                if(numero<minimo){
                    minimo=numero;
                    letraMIN=letra;
                }
        }
        decision=confirm("Desea continuar")
    }
    promedio=positivo/contador;
    console.log("cantidad de pares= "+par);
    console.log("cantidad de impares= "+impar);
    console.log("cantidad de ceros"+ ceros);
    console.log("promedio de numeros positivos = "+promedio);
    console.log("suma de negativos"+ negativos);
    console.log("numero y letra del maximo "+maximo+" "+letraMAX+" y minimo "+minimo+" "+letraMIN)
      
    
}