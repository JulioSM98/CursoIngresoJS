function mostrar()
{
//tomo la edad  
edad = document.getElementById('edad').value;
estadoCivil = document.getElementById('estadoCivil').value;
if(edad<18 && estadoCivil!="Soltero" ){
    alert("es muy pequeño para no ser soltero")

}
	


}//FIN DE LA FUNCIÓN