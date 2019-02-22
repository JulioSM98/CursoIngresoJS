function mostrar()
{
    var Precio;
    var descuento;

    Precio = prompt('Ingrese el precio');
    descuento=prompt('Ingrese el descuento');

    Precio=parseInt(Precio);
    descuento=parseInt(descuento);

    descuento=Precio*(1-(descuento/100));

    document.getElementById('elPrecioFinal').value = descuento;
}
