function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var message="";
switch(mesDelAño){
    case "Febrero":
    message=" Este mes no tiene más de 29 días."
    break;
    default:
    message="Este mes tiene 30 o más días"
    break
}
alert(message)
//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN