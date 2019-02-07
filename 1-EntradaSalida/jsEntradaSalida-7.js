/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	var Num1 = parseInt(document.getElementById('numeroUno').value);
	var Num2 = parseInt(document.getElementById('numeroDos').value);
	alert("La suma es " + (Num1+Num2));
}

function restar()
{
	var Num1 = parseInt(document.getElementById('numeroUno').value);
	var Num2 = parseInt(document.getElementById('numeroDos').value);
	alert("la resta es "+ (Num1-Num2));
}

function multiplicar()
{ 
	var Num1 = parseInt(document.getElementById('numeroUno').value);
	var Num2 = parseInt(document.getElementById('numeroDos').value);
	alert("La multiplicacion es " + (Num1*Num2));
}

function dividir()
{
	var Num1 = parseInt(document.getElementById('numeroUno').value);
	var Num2 = parseInt(document.getElementById('numeroDos').value);
	alert("La division es " + (Num1/Num2));
}

