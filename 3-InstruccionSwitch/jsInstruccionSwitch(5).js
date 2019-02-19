function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
var message="";

//alert (laHora);
switch(laHora){
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
    message="Es de mañana.";
    break;
}
if(message!=""){
    alert(message);

}


}//FIN DE LA FUNCIÓN