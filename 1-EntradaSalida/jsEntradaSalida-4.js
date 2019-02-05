/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var txt= prompt("Ingrese un Texto")
	document.getElementById('elNombre').value = txt
}

