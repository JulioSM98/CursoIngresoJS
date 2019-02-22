/*Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra). */   

function mostrar()
{
    var Planeta;
    Planeta=prompt('Ingrese un planeta del sistema solar');
    switch(Planeta){
        case "mercurio":
        case "venus":
        message="acá hace más calor";
        break;
        case "tierra":
        message="acá vivimos";
        break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        message="acá hace más frio";
        break;
        default:
        message="el planeta no existe";
    }
    alert(message);
}
