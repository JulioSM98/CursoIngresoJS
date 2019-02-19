function mostrar()
{
//tomo la edad  
var message;
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
    case "Enero":
    message="que comiences bien el año!!!.";
    break;
    case "Marzo":
    message="a clases!!!.";
    break;
    case "Julio":
    message="se vienen las vacaciones";
    break;
    case "Diciembre":
    message="Felices fiesta!!!.";
    break;
    default:
    message="Seleccione otro mes";
    break
}
alert(message);



}//FIN DE LA FUNCIÓN