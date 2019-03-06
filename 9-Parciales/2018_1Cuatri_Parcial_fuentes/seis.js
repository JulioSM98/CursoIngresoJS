function mostrar()
{
    var hora;
    var msg="";
    hora = document.getElementById('laHora').value;
    hora=parseInt(hora);
    switch(hora){
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        msg="Es de mañana"
        break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        msg="es de tarde"
        break;
        default:
        if(hora>24){
            msg="La hora no es válida"
        }else{
            msg="Es de noche"
        }
    }
    alert(msg);
    if(msg=="Es de noche" && hora<=24 ){
        alert("a dormir")
    }
}
