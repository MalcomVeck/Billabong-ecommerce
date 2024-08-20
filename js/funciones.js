const productos = [
    {id:1, nombre:"Traje de Neoprene 4/3 Salty Natura", descripcion:"<b>Caracteríasticas:</b><br>- Espesor: 4/3 mm.<br>- Cierre en pecho tejido exterior: AIRLITE 4D.<br>- Tipo de espuma: 100% caucho natural elástico.<br>- Tipo de tela interior: Graphene Comp para forro de grafeno elástico.<br>- Materiales 80% neoprene, 10% nylon, 10% poliéster.", precio:679.99, imagen:"saltyNatura.png", categoria:"trajes", cantidad: 1},
    {id:2, nombre:"Neoprene Hombre 4/3 Absolute Cz", descripcion:"<b>Caracteríasticas:</b><br>- Espesor: 4/3 mm.<br>- Acceso: Entrada con cierre en el pecho.<br>- Composición interna: Grafeno combinado con tejido elástico de silicona.<br>- Espuma de neoprene: Espuma superlight parcialmente reciclada.<br>- Costuras exteriores: Costuras GBS para máxima flexibilidad.<br>- Costuras interiores: Cinta Neo Superflex aplicada a máquina.<br>- Composición: 80% neoprene, 10% nylon, 10% poliéster.", precio:599.99, imagen:"neoprene-absolute-hombre.jpg", categoria:"trajes", cantidad: 1},
    {id:3, nombre:"Neoprene Mujer Synergy BZ 4/3 Full", descripcion:"<b>Caracteríasticas:</b><br>- Espesor: 4/3 mm.<br>- Sistema de entrada: cierre trasero.<br>- Tipo de espuma de neopreno: Espuma superligera, parcialmente reciclada.<br>- Tipo de tejido interior: Grafeno (hecho de fibras 100% recicladas) combinado con Silicona Stretch.<br>- Detalle de la costura interna: Punto de alta tensión - cinta de punto melco reforzada.", precio:529.99, imagen:"neoprene-synergy-mujer.jpg", categoria:"trajes", cantidad: 1},
    {id:4, nombre:"Neoprene Mujer 4/3 Salty Dayz", descripcion:"<b>Caracteríasticas:</b><br>- Espesor: 4/3 mm.<br>- Entrada: Entrada con cierre en el pecho.<br>- Tejido respetuoso con el medio ambiente: tejido exterior de mezcla de nailon y neopreno elástico profesional reciclado.<br>- Costuras exteriores: costuras GBS para máxima flexibilidad.<br>- Materiales 80% neopreno, 20% nailon.", precio:499.99, imagen:"neoprene-saltydayz-mujer.jpg", categoria:"trajes", cantidad: 1},
    {id:5, nombre:"Traje de Neoprene 4/3 Revolution M", descripcion:"<b>Caracteríasticas:</b><br>- Espesor: 4/3 mm.<br>- Acceso: Entrada con cierre en el pecho.<br>- Composición interna: Grafeno combinado con tejido elástico de silicona.<br>- Espuma de neoprene: Espuma superlight parcialmente reciclada.<br>- Costuras exteriores: Costuras GBS para máxima flexibilidad.<br>- Costuras interiores: Cinta Neo Superflex aplicada a máquina.<br>- Composición: 80% neoprene, 10% nylon, 10% poliéster.", precio:699.99, imagen:"revolution43.jpg", categoria:"trajes", cantidad: 1},
    {id:6, nombre:"Traje de Neoprene 3/2 Revolution M", descripcion:"<b>Caracteríasticas:</b><br>- Espesor: 3/2 mm.<br>- Entrada con cremallera en el pecho.<br>- Tejido exterior: Mezcla de elastano y nailon reciclado.<br>- Tejido interior compuesto de grafeno.<br>- Costuras exteriores: costuras GBS para máxima flexibilidad.<br>- Forro: Airlite 4D infunde nuestras fibras de grafeno en nuestros ya increíbles revestimientos Airlite.", precio:559.99, imagen:"revolutionm32.jpg", categoria:"trajes", cantidad: 1},
    {id:7, nombre:"Lycra Wave Tribe LS RG", descripcion:"<b>Caracteríasticas:</b><br>- Protección UV: Protección solar UPF 50+.<br>- Ajuste: Ajuste clásico.<br>- Mangas: Mangas largas.<br>- Estampado: Mangas estampadas y cuerpo liso.<br>- Composición: 85 % poliéster reciclado, 15 % elastano.", precio:75.99, imagen:"lycrawave.jpg", categoria:"trajes", cantidad: 1},
    {id:8, nombre:"Lycra Enteriza Wave Tribe", descripcion:"<b>Caracteríasticas:</b><br>- 85 % poliéster reciclado, 15 % elastano.<br>- Protección UV: protección solar UPF 50+.<br>- Ajuste de alto rendimiento.", precio:99.99, imagen:"lycraenterizawave.jpg", categoria:"trajes", cantidad: 1},
    {id:9, nombre:"Neoprene 3/2 Absolute BZ Niño", descripcion:"<b>Caracteríasticas:</b><br>- Espesor: 3/2 mm.<br>- Sistema de entrada: Cremallera en el pecho.<br>- Tipo de espuma de neopreno: Espuma superligera.<br>- Tipo de tejido interior: Grafeno combinado con Silicon Stretch.<br>- Materiales 87% Poliéster reciclado, 13% Elastano.", precio:295.99, imagen:"absoluteninio.jpg", categoria:"trajes", cantidad: 1},
    {id:10, nombre:"Neoprene 4/3 Synergy BZ Niña", descripcion:"<b>Caracteríasticas:</b><br>- Espesor: 4/3mm.<br>- Serie de trajes de neoprene: Synergy.<br>- Sistema de Entrada: Cierre trasero.<br>- Tipo de espuma de neopreno: Espuma superligera.<br>- Tipo de Tejido Interior: Grafeno combinado con Silicone Stretch.", precio:362.99, imagen:"synergybzninia.jpg", categoria:"trajes", cantidad: 1},
    {id:11, nombre:"Botas de Neoprene 5 mm Absolute ST", descripcion:"<b>Caracteríasticas:</b><br>- Grosor: 5 mm.<br>- Tipo de tela exterior: Jersey Superflex reciclado.<br>- Tipo de espuma de neopreno: Espuma superligera.<br>- Tipo de tela interior: Silicona elástica.<br>- Tipo de cuerpo: Bota de neopreno con puntera dividida oculta.", precio:99.99, imagen:"botasabsolute.jpg", categoria:"trajes", cantidad: 1},
    {id:12, nombre:"Guantes de Neoprene 5 Absolute", descripcion:"<b>Caracteríasticas:</b><br>- Espesor: 5 mm.<br>- Tejido interior elástico de silicona.<br>- Espuma de neoprene: Espuma superligera parcialmente reciclada.<br>- Costuras exteriores: Costuras GBS para máxima flexibilidad.<br>- Materiales 87% poliéster reciclado, 13% elastano.", precio:79.99, imagen:"guantesabsolute.jpg", categoria:"trajes", cantidad: 1},
]

function agregarProducto(id){
    const producto = productos.find(item => item.id == id);
    const carrito = cargarCarritoLS();
    if (carrito.some(item => item.id === id)) {
        const index = carrito.findIndex(item => item.id === id);
        carrito[index].cantidad++;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    guardarCarritoLS(carrito);
    renderBotonCarrito();
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Se agregó al Carrito",
        showConfirmButton: false,
        timer: 1500
    });
}

function eliminarProducto(id) {
    const carrito = cargarCarritoLS();
    const producto = carrito.find(item => item.id == id);
    const cantidad = producto.cantidad;
    const index = carrito.findIndex(item => item.id === id);
    if (cantidad > 1) {
        carrito[index].cantidad--;
    } else {
        carrito.splice(index, 1);
    }
    guardarCarritoLS(carrito);
    renderCarrito();
    renderBotonCarrito();
    actualizarTotal();
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Se eliminó el producto",
        showConfirmButton: false,
        timer: 1500
    });
}

function renderBotonCarrito() {
    let total = totalProductos();
    document.getElementById("totalCarrito").innerHTML = total;
}
function totalProductos() {
    const carrito = cargarCarritoLS();
    let total = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    return total;
}

function actualizarTotal() {
    const carrito = cargarCarritoLS();
    const mostrarAbonar = document.getElementById("mostrarTotal");
    const totalAbonar = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    mostrarAbonar.innerText = `Total : $${totalAbonar.toFixed(2)} ARS`;
}

function comprar() {
    const carrito = cargarCarritoLS();
    const totalAbonar = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    Swal.fire({
        title: `COMPRAR POR $${totalAbonar} ARS ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#198754",
        cancelButtonColor: "#d33",
        confirmButtonText: "COMPRAR"
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire({
            title: "Pago Exitoso!",
            text: "Se le asignará un número de seguimiento",
            icon: "success"
        });
        vaciarCarrito();
        }
    });
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarCarrito() {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "¿Querés Vaciar el Carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#e62055",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminá todo!"
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire({
            title: "Productos eliminados!",
            text: "Se ha vaciado el Carrito",
            icon: "success"
        });
        vaciarCarrito();
        }
    });
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito()
}

function cargarProductoLS() {
    let id = JSON.parse(localStorage.getItem("producto"));
    const producto = productos.find(item => item.id == id);
    return producto;
}

function guardarProductoLS(id) {
    localStorage.setItem("producto", JSON.stringify(id));
}
