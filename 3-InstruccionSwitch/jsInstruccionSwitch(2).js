function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var message="";



switch(mesDelAño){
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    message="Falta para el invierno";
    break;
    case "Julio":
    case "Agosto":
    message="Abrigate que hace frio.";
    break;
    default:
    message="Ya pasamos el frio, ahora calor!!!.";
    break;
}
alert (message);

}//FIN DE LA FUNCIÓN