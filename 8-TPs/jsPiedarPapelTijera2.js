var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina=Math.floor(Math.random()*3)+1;
	console.log(eleccionMaquina);	 	



}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina==1){
		message="Empate";
		ContadorDeEmpates++;
	}else{
		if(eleccionMaquina==2){
			message="perdio";
			ContadorDePerdidas++;
		}else{
			message="gano";
			ContadorDeGanadas++;
		}
	}
	console.log(message)
	mostrarResultado();
}//FIN DE LA FUNCIÓN
function papel()
{
	if(eleccionMaquina==2){
		message="Empate";
		ContadorDeEmpates++;
    }else{
        if(eleccionMaquina==3){
			message="perdio";
			ContadorDePerdidas++
        }else{
			message="gano";
			ContadorDeGanadas++
        }
    }
	console.log(message)
	mostrarResultado();
}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina==3){
		message="Empate";
		ContadorDeEmpates++;
    }else{
        if(eleccionMaquina==1){
			message="perdio";
			ContadorDePerdidas++
        }else{
			message="gano";
			ContadorDeGanadas++;
        }
    }
	console.log(message)
	mostrarResultado();

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById('ganadas').value=ContadorDeGanadas;
	document.getElementById('perdidas').value=ContadorDePerdidas;
	document.getElementById('empatadas').value=ContadorDeEmpates;
}