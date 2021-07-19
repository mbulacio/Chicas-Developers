var carrito = [];

const prodEnCarrito = JSON.parse(localStorage.getItem('carrito'));

if (prodEnCarrito) {
    carrito = prodEnCarrito
}

for (const prodEnCarrito of carrito) {

    $("#carrito-producto").append(`
    <tr id="${ prodEnCarrito.id }">
        <th scope="row">${ prodEnCarrito.id }</th>
            <td>${ prodEnCarrito.type}</td>
            <td>${ prodEnCarrito.cant }</td>
            <td>${ prodEnCarrito.price * prodEnCarrito.cant } </td>
            <td>
                <button id="borrarProducto${ prodEnCarrito.id }"type="button" class="btn btn-danger btn-sm">X</button>
            </td>
    </tr>`);


    $(`#borrarProducto${ prodEnCarrito.id }`).click(() => {
        borrarProducto();
    });

    function borrarProducto() {
        $(`#${ prodEnCarrito.id }`).remove();
        $("#total").text(`${total -= prodEnCarrito.price * prodEnCarrito.cant}`);
    }

}

var total = carrito.reduce((acc, { cant, price }) => acc + cant * price, 0);

$("#carrito-producto").append(`
    <tr>
    <th></th>
    <td></td>
    <th scope="col">Total</th>
    <td id="total">${ total }</td>
    </tr>`);

$("#vaciar").click(() => {
    vaciarCarrito()
});

function vaciarCarrito() {
    localStorage.removeItem('carrito');
    $("#carrito-producto").text(``);
}