/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
eleccionMaquina=Math.floor(Math.random()*3)+1;
console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
   if(eleccionMaquina==1){
       message="Empate";
   }else{
       if(eleccionMaquina==2){
           message="perdio";
       }else{
           message="gano";
       }
   }
   console.log(message)
}//FIN DE LA FUNCIÓN
function papel()
{
    if(eleccionMaquina==2){
        message="Empate";
    }else{
        if(eleccionMaquina==3){
            message="perdio";
        }else{
            message="gano";
        }
    }
    console.log(message)

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina==3){
        message="Empate";
    }else{
        if(eleccionMaquina==1){
            message="perdio";
        }else{
            message="gano";
        }
    }
    console.log(message)

}//FIN DE LA FUNCIÓN2