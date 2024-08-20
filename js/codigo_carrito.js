function renderCarrito() {
    const carrito = cargarCarritoLS();
    let contenidoHTML;

    if (totalProductos() > 0 ) {
        contenidoHTML= `<table class="table border-top">
        <tbody>
        <tr>
        <td class="text-end align-middle" colspan="5"><a href="index.html" class="btn btn-warning btn-md">Agregar Productos (+)</a></td>
        <td class="text-end align-middle" colspan="6"><button class="btn btn-danger btn-md" onclick="eliminarCarrito();">Vaciar Carrito <i class="bi bi-recycle"></i></button></td>
        </tr>`;
        for (const producto of carrito) {
            contenidoHTML += `<tr>
            <th><a href="producto.html" onclick="guardarProductoLS(${producto.id});"><img src="assets/${producto.imagen}" alt="${producto.nombre}" width="80"></th>
            <th class="align-middle"><h4>${producto.nombre}</h4></th>
            <th class="text-center align-middle"><h5>Cantidad<br>${producto.cantidad}</h5></th>
            <th class="text-center align-middle"><h5>Unidad<br>$${producto.precio} ARS</h5></th>
            <th class="text-center align-middle"><h5 class="text-danger">subTotal<br>$${(producto.precio * producto.cantidad).toFixed(2)} ARS</h5></th>
            <th class="text-end align-middle"><button class="btn btn-danger btn-sm" onclick="eliminarProducto(${producto.id})">Eliminar <i class="bi bi-trash3"></i></button></th>
            </tr>`;
            }
        contenidoHTML += `</tbody>
        <tfooter>
        <td class="text-end align-middle" colspan="5"><h4 class="text-danger" id="mostrarTotal"></h4></td>
        <td class="text-end align-middle" colspan="6"><button class="btn btn-success btn-lg" onclick="comprar();">COMPRAR</button></td>
        </tfooter>
        </table>`;
    } else {
        contenidoHTML = `<div class="alert alert-dark my-5 text-center" role="alert">
        <h3>El carrito de compras está vacio</h3>
        </div>`
    }
    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderCarrito();
renderBotonCarrito();
actualizarTotal();

