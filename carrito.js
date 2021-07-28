var carrito = [];

const prodEnCarrito = JSON.parse(localStorage.getItem('carrito'));

if (prodEnCarrito) {
    carrito = prodEnCarrito
}

for (const prodEnCarrito of carrito) {
    $("#carrito-producto").append(`
    <tr id="${ prodEnCarrito.id }">
        <th scope="row">${ prodEnCarrito.id }</th>
            <td>${ prodEnCarrito.type }</td>
            <td class="d-flex align-self-baseline">
            <button id="sumar${ prodEnCarrito.id }" type="button" class="btn btn-outline-warning botonesCarrito sumar">+</button>
            <p class="pCarrito" id="cantidad${ prodEnCarrito.id }">${ prodEnCarrito.cant }</p>
            <button id="restar${ prodEnCarrito.id }" type="button" class="btn btn-outline-warning botonesCarrito restar">-</button>
            </td>
            <td id="precio${ prodEnCarrito.id }">${ prodEnCarrito.price * prodEnCarrito.cant }</td>
            <td>
                <button id="borrarProducto${ prodEnCarrito.id }"type="button" class="btn btn-outline-danger botonesCarrito">x</button>
            </td>
    </tr>`);

    $(`#sumar${ prodEnCarrito.id }`).click(() => {
        sumarProducto(prodEnCarrito.id);
    });

    function sumarProducto(id) {
        if (prodEnCarrito.cant < prodEnCarrito.stock) {
            carrito.find(prod => prod.id === id);
            carrito.cant += 1
            $(`#cantidad${ prodEnCarrito.id }`).text(`${ prodEnCarrito.cant += 1}`);
            $(`#precio${ prodEnCarrito.id }`).text(`${ prodEnCarrito.cant * prodEnCarrito.price }`);
            $("#total").text(`${total += prodEnCarrito.price}`);
            console.log(carrito)
            localStorage.setItem('carrito', JSON.stringify(carrito));
        }
    }

    $(`#restar${ prodEnCarrito.id }`).click(() => {
        restarProducto(prodEnCarrito.id);
    });

    function restarProducto(id) {
        if (prodEnCarrito.cant > 1) {
            carrito.find(prod => prod.id === id);
            carrito[0].cant - 1
            $(`#cantidad${ prodEnCarrito.id }`).text(`${ prodEnCarrito.cant -= 1}`);
            $(`#precio${ prodEnCarrito.id }`).text(`${ prodEnCarrito.cant * prodEnCarrito.price }`);
            $("#total").text(`${total -= prodEnCarrito.price }`);
            localStorage.setItem('carrito', JSON.stringify(carrito));
        }
    }


    $(`#borrarProducto${ prodEnCarrito.id }`).click(() => {
        borrarProducto();
    });

    function borrarProducto() {
        $(`#${ prodEnCarrito.id }`).remove();
        $("#total").text(`${total -= prodEnCarrito.price * prodEnCarrito.cant}`);
        if (total > 0) {
            $("#botonComprar").fadeIn(1);
        } else {
            $("#botonComprar").fadeOut(1);
            $("#elTotal").text(``);
        }
    }

}


var total = carrito.reduce((acc, {
    cant,
    price
}) => acc + cant * price, 0);

$("#carrito-producto").append(`
    <tr id="elTotal">
    <th></th>
    <td></td>
    <th scope="col">Total</th>
    <td id="total">${ total }</td>
    </tr>`);

if (total > 0) {
    $("#botonComprar").fadeIn(1);
} else {
    $("#botonComprar").fadeOut(1);
    $("#elTotal").text(``);
}

$("#botonComprar").click(() => {
    comprarCarrito();
});

function comprarCarrito() {
    $("#datosParaCompra").fadeIn("fast");
}

$("#botonFinalizarCompra").click(() => {
    finalizarCompra();
    vaciarCarrito();
});

function finalizarCompra() {
    $("#datosParaCompra").fadeOut("fast");
}

$("#botonVaciar").click(() => {
    vaciarCarrito()
});

function vaciarCarrito() {
    localStorage.removeItem('carrito');
    $("#carrito-producto").text(``);
    $("#botonComprar").fadeOut(1);
}