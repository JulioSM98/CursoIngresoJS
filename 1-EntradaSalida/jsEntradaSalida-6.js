/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroU = parseInt(document.getElementById('numeroUno').value);
	var numeroD = parseInt(document.getElementById('numeroDos').value);
	alert("la suma es "+ (numeroU+numeroD));
}

