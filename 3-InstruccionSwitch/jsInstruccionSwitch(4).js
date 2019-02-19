function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var message="";
//alert (mesDelAño);
switch(mesDelAño){
    case "Febrero":
    message="Este mes tiene 28 dias"
    break;
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
    message="Este mes tiene 31 Dias";
    break;
    default:
    message="Este mes tiene 30 dias";
    break;
}	
	alert(message)
//Abril, junio, septiembre y noviembre


}//FIN DE LA FUNCIÓN