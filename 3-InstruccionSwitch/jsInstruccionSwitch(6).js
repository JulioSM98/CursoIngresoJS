function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
var message="";
var cases;

if(laHora>"6" && laHora<"12"){
    cases=1;
}else{
    if(laHora>"11" && laHora<"20"){
        cases=2;
    }else{
        if(laHora>"19" && laHora<"24" || laHora>="0" && laHora<"7"){
            cases=3;
        }else{
            cases="";
        }
    }

}
switch(cases){
    case 1:
    message="Es de mañana.";
    break;
    case 2:
    message="Es de tarde.";
    break;
    case 3:
    message="Es de noche.";
    break;
    default:
    message="la hora no existe."
    break
}
alert(message)


}//FIN DE LA FUNCIÓN