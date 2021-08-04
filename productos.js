$(document).ready(() => {
    obtenerProducto();
});

// obtenemos los datos de los productos mediante producto.json

function obtenerProducto() {
    $.getJSON("productos.json").done(function(respuesta, estado) {
        if (estado === "success") {
            let productos = respuesta.productos;

            localStorage.setItem("Productos", JSON.stringify(productos));

            const carrito = [];

            // renderizamos los productos en la seccion productos.html

            for (const producto of productos) {
                $("#seccionProducto").append(`<section class="enProductos">
                    <div class="productos card d-flex flex-row card--producto">
                        <div class="d-flex justify-content-center">
                        <a href="productoSolo.html" >
                            <img src="${ producto.img }" class="small" alt="articulo">
                        </a>
                        </div>
                        <div class="d-flex justify-content-center">
                            <div class="card-body">
                                <h2>${ producto.type }</h2>
                                <h3>Precio: ${ producto.price }</h3>
                                <div class="d-flex">
                                    <p class="card-text"><small id="stockActualizado${ producto.id }" class="text-muted">Stock: ${ producto.stock }</small></p>
                                    <a id="botonDetalleProducto${ producto.id }" class="btn btn-outline-secondary botonDescripcion" href="productoSolo.html" role="button">Detalles</a>
                                </div>
                                <button type="button" id="botonAgregar${ producto.id }" class="btn btn-outline-success agregarCarrito suscribite">Agregar al carrito</button>
                                <p class="agregado" style="display:none;" id="agregadoAlCarrito${ producto.id }"><small>✓ Agregado</small></p>
                            </div>
                        </div> 
                    </div>
                    </section>`);

                // obtengo el id de un producto unico al momento de clickear detalles, lo envio al localStorage productoSolo, lo obtengo en productoSolo.html y lo renderizó en ese seccion.

                $(`#botonDetalleProducto${ producto.id }`).click(() => {
                    detalleProducto(producto.id);
                });

                var productoSolo = [];

                function detalleProducto(id) {
                    var indicarElProducto = productos.find(prod => prod.id === id);

                    productoSolo.push(indicarElProducto)

                    localStorage.setItem('productoSolo', JSON.stringify(productoSolo));

                }

                // obtengo el id al clickear agregar al carrito y envio el producto al localStorage Carrito, en carrito lo obtengo y lo renderizo en la seccion carrito.html

                function agregarAlCarrito(id) {
                    var comprobarDuplicado = carrito.find(prod => prod.id === id);

                    if (comprobarDuplicado) {
                        comprobarDuplicado.cant += 1
                    } else {
                        const agregar = productos.find(prod => prod.id === id);
                        carrito.push(agregar);
                    }

                    // cuando clickeo se descuenta 1 producto del stock

                    if (producto.stock > 1) {
                        $(`#stockActualizado${ producto.id }`).text(`Stock: ${ producto.stock -= 1 }`);
                    } else {
                        $(`#stockActualizado${ producto.id }`).text(`Stock: sin stock`);
                    }

                    // aparece el parrafo ✓ Agregado

                    $(`#agregadoAlCarrito${ producto.id }`)
                        .fadeIn("fast")
                        .delay(500)
                        .fadeOut();

                    localStorage.setItem('carrito', JSON.stringify(carrito));

                    // el icono del carrito se pinta de verde al clickear

                    $("#carritoLleno").text(``);
                    $("#carritoLleno").prepend(`<img src="imagenes/carrito-lleno.png" class="div__img" alt="carrito">`);
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