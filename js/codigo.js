function renderProductos(){
    let contenidoHTML= "";
    
    for (const producto of productos) {
        contenidoHTML += `<div class="col-md-3">
            <div class="card border-0">
                <a href="producto.html" onclick="guardarProductoLS(${producto.id});">
                    <img src="assets/${producto.imagen}" class="card-img-top" height=400 alt="${producto.nombre}">
                </a>
                <div class="card-body text-center">
                    <h5 class="card-text">${producto.nombre}<br><span class="text-danger">$${producto.precio} ARS</span></h5>
                </div>
            </div>   
        </div>`;
    }

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderProductos();
renderBotonCarrito();


//Objetos y Arrays. Métodos de Arrays.
// Funciones y condicionales.
// Generación del DOM de forma dinámica. Eventos.
// Sintaxis avanzada.
// Al menos una librería de uso relevante para el proyecto.
// Manejo de promesas con fetch. 
// Carga de datos desde un JSON local o desde una API externa.

// Buenas tardes Malcom, felicidades tu preentrega esta aprobada 😀
// Utilizaste muy bien Local para el carrito asi tambien como usaste muy bien la funciones para cada uno de lo proctos, agregando, borrando y demas del carrito
// Lo mismo que pasa con muchos, el eliminar del carro, si el carro tiene 2 productos con el mismo ID y eliminas uno, el carro te elimina los dos. A tener en cuenta.Podrias verificar que cantidad quiere eliminar el usuario antes de borrarlo, tendrias que verificar cuando agregas al carro si ya existe y cuando elimines cuanto queres eliminar. Sino el problema persiste ahi
// Sin mas, felicidades, el resto bien, lo que si separaria un poco mejor, un js con datos, o usarias una APi ahora que tubimos la clase, para obtener productos.y main por un lado, carrito por el otro
// Sin mas, felicidades una vez mas 👋
