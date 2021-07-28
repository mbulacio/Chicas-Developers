$(document).ready(() => {
    obtenerProducto();
});

function obtenerProducto() {
    $.getJSON("productos.json").done(function(respuesta, estado) {
        if (estado === "success") {
            let productos = respuesta.productos;

            const enJSON = JSON.stringify(productos);

            localStorage.setItem("Productos", enJSON);

            const carrito = []

            for (const producto of productos) {
                $("#seccionProducto").append(`<section class="enProductos">
                    <div class="productos card d-flex flex-row card--producto">
                        <div class="d-flex justify-content-center">
                        <a href="productoSolo.html">
                            <img src="${ producto.img }" class="small" alt="articulo">
                        </a>
                        </div>
                        <div class="d-flex justify-content-center">
                            <div class="card-body">
                                <h2>${ producto.type }</h2>
                                <h3>Precio: ${ producto.price }</h3>
                                <p class="card-text"><small class="text-muted">Stock: ${ producto.stock }</small></p>
                                <button type="button" id="botonAgregar${ producto.id }" class="btn btn-outline-success agregarCarrito suscribite">Agregar al carrito</button>
                                <p class="agregado" style="display:none;" id="agregadoAlCarrito${ producto.id }"><small>✓ Agregado</small></p>
                            </div>
                        </div> 
                    </div>
                    </section>`);

                function agregarAlCarrito(id) {
                    var comprobarDuplicado = carrito.find(prod => prod.id === id);

                    if (comprobarDuplicado) {
                        comprobarDuplicado.cant += 1
                    } else {
                        const agregar = productos.find(prod => prod.id === id);
                        carrito.push(agregar);
                    }

                    $(`#agregadoAlCarrito${ producto.id }`)
                        .fadeIn("fast")
                        .delay(500)
                        .fadeOut();

                    localStorage.setItem('carrito', JSON.stringify(carrito));
                }

                $(`#botonAgregar${ producto.id }`).click(() => {
                    agregarAlCarrito(producto.id);
                });

                $(`#agregadoAlCarrito${ producto.id }`).click(() => {
                    agregarAlCarrito();
                });
            }
        }
    });
}