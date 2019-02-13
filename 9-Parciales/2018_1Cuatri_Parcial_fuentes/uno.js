
function mostrar()
{
    var name1;
    var name2;
    var age1;
    var age2;
    var sumAge;
    name1=prompt("Ingrese un nombre");
    name2=prompt("ingrese otro nombre");
    age1=prompt("Ingrese la edad del primer nombre");
    age2=prompt("Ingrese la edad del segundo nombre");
    age1=parseInt(age1)
    age2=parseInt(age2)
    sumAge=age1+age2;
   alert("ustedes son "+name1+" y "+name2+", sus edades son "+age1+" y "+age2+" ,y la suma de edades es "+sumAge)
}
