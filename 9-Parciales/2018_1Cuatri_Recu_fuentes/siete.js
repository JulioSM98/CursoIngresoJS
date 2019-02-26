// Bienvenidos.
// Realizar el algoritmo que permita el ingreso por prompt de las notas(validar entre 0 y 10), el sexo(validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
// a) El promedio de las notas totales.
//     b) La nota más baja y el sexo de esa persona.
//         c) La cantidad de varones que su nota haya sido mayor o igual a 6.

function mostrar()
{
    var nota;
    var sexo;
    var promedio=0;
    var i;
    var menor;
    var notaB;
    var sexonotabaja;
    var chicos=0;
    notaB=10;
    for(i=0;i<5;i++){
        nota=prompt('ingrese una nota');
        nota=parseInt(nota)
        while(isNaN(nota)==true || nota<0 || nota>10){
            nota=prompt("Reingrese una nota valida");
            nota=parseInt(nota);
        }
        sexo=prompt("Ingrese el sexo");
        while(isNaN(sexo)==false || sexo!="f" && sexo!="m" ){
            sexo=prompt("reingrese el sexo valido!");
        }
        //suma de promedios
        promedio+=nota;
        //Nota baja
        if(nota < notaB){
            notaB = nota;
            sexonotabaja=sexo;
        }
        //nota mayor a 6 M
        if(sexo=="m"&& nota>6){
            chicos++;
        }

    }
    //promedio
    promedio=promedio/5;
    alert("Promedio Notas totales "+promedio);
    alert('La nota mas baja '+notaB+" y el sexo "+sexonotabaja);
    alert('la cantidad de varones que su nota  fue  mayor de 6 son '+chicos)
}
