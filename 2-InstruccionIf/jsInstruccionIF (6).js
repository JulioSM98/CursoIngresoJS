function mostrar()
{
//tomo la edad  
edad = document.getElementById('edad').value;
if(edad>17){
    alert("es mayor de edad")
}else{
    if(edad<13){
        alert('Es un niño')
    }else{
        alert("es adolescente")
    }
}


}//FIN DE LA FUNCIÓN