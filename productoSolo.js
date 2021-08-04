var productoSolo = [];

var carrito = [];

// obtenemos lo datos del localStorage enviados desde productos.js y lo renderizamos
const detalleProductoSolo = JSON.parse(localStorage.getItem('productoSolo'));

if (detalleProductoSolo) {
    productoSolo = detalleProductoSolo
}

for (const detalleProductoSolo of productoSolo) {
    // renderizo la imagen
    $("#imagenDeProductoSolo").append(`
    <img class="img-fluid imagenProductoSolo" src="${ detalleProductoSolo.img }" alt="${ detalleProductoSolo.type }">`);

    // la tabla de informacion del productos

    $("#descripcionDeProductoSolo").append(`
    <tr>
        <th scope="row">${ detalleProductoSolo.id }</th>
        <td>${ detalleProductoSolo.type }</td>
        <td id="stockActualizado${ detalleProductoSolo.id }">${ detalleProductoSolo.stock }</td>
        <td >${ detalleProductoSolo.price }</td>
    </tr>`);

    // y tambien el boton agregar al carrito con el mismo procedimiento que en producto.js

    $("#agregarProductoSolo").append(`
    <button type="button" id="botonAgregarProductoSolo${ detalleProductoSolo.id }" class="btn btn-outline-success agregarCarrito suscribite">Agregar al carrito</button>
                    <p class="agregadoProductoSolo" style="display:none;" id="agregadoAlCarritoProductoSolo${ detalleProductoSolo.id }"><small>✓ Agregado</small></p>`);

    // mediante el boton agregar al carrito enviamos los datos de los productos al localStorage carrito

    function agregarAlCarritoProductoSolo(id) {
        var comprobarDuplicados = carrito.find(prod => prod.id === id);

        if (comprobarDuplicados) {
            comprobarDuplicados.cant += 1
        } else {
            const incluir = productoSolo.find(prod => prod.id === id);
            carrito.push(incluir);
        }

        // cuando clickeo se descuenta 1 producto del stock

        if (detalleProductoSolo.stock > 1) {
            $(`#stockActualizado${ detalleProductoSolo.id }`).text(`${ detalleProductoSolo.stock -= 1 }`);
        } else {
            $(`#stockActualizado${ detalleProductoSolo.id }`).text(`sin stock`);
        }

        // aparece el parrafo ✓ Agregado

        $(`#agregadoAlCarritoProductoSolo${ detalleProductoSolo.id }`)
            .fadeIn("fast")
            .delay(500)
            .fadeOut();

        localStorage.setItem('carrito', JSON.stringify(carrito));

        // el icono del carrito se pinta de verde al clickear

        $("#carritoLleno").text(``);
        $("#carritoLleno").prepend(`<img src="imagenes/carrito-lleno.png" class="div__img" alt="carrito">`);
    }

    $(`#botonAgregarProductoSolo${ detalleProductoSolo.id }`).click(() => {
        agregarAlCarritoProductoSolo(detalleProductoSolo.id);
    });

    $(`#agregadoAlCarritoProductoSolo${ detalleProductoSolo.id }`).click(() => {
        agregarAlCarritoProductoSolo();
    });

}