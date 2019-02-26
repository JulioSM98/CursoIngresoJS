function mostrar()
{
    var numero;
    var letra;
    var decision=true;
    while(decision==true){
        numero=prompt("ingrese un numero entre -100 y 100");
        numero=parseInt(numero);
        while(isNaN(numero)==true || numero<-100 && numero>100){
            numero=prompt("Reingrese un numero entre -100 y 100");
            numero=parseInt(numero);
        }
    }
}
