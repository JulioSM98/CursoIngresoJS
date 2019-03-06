function mostrar()
{
    var notas;
    var sexo;
    var promedio=0;
    var notaBaja=10;
    var notabajaSexo;
    var cantidadVarones=0;
    for(i=0;i<5;i++){
        notas=prompt("ingrese una nota");
        notas=parseInt(notas);
        while(isNaN(notas)==true || notas<0 || notas>10){
            notas=prompt("Por favor ingrese una nota válida");
            notas=parseInt(notas);
        }
        sexo=prompt("Ingrese el sexo (m o f)");
        while(isNaN(sexo)==false || sexo!="f" && sexo!="m" ){
            sexo=prompt("porfavor ingrese un sexo valido")
        }
        promedio=promedio+notas;
        console.log(promedio);
        if(notas<notaBaja){
            notaBaja=notas;
            notabajaSexo=sexo;
        }
        if(notas>=6 && sexo=="m"){
            cantidadVarones=+1;
        }
    }
    promedio=promedio/5;
    console.log(promedio);
    console.log(cantidadVarones);
    console.log(notaBaja+" "+notabajaSexo)
}
