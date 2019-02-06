/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var Nombre = prompt("Ingrese un Nombre");
	document.getElementById('elNombre').value = Nombre
}


