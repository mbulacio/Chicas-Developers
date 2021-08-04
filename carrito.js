var carrito = [];

// obtengo los datos enviados desde producto.js y lo renderizo en carrito.html
const prodEnCarrito = JSON.parse(localStorage.getItem('carrito'));

if (prodEnCarrito) {
    carrito = prodEnCarrito
}

for (const prodEnCarrito of carrito) {
    // renderizo cada producto del localStorage
    $("#carrito-producto").append(`
    <tr id="${ prodEnCarrito.id }">
        <th scope="row">${ prodEnCarrito.id }</th>
            <td>${ prodEnCarrito.type }</td>
            <td class="d-flex align-self-baseline">
            <button id="sumar${ prodEnCarrito.id }" type="button" class="btn btn-warning botonesCarrito sumar">+</button>
            <p class="pCarrito" id="cantidad${ prodEnCarrito.id }">${ prodEnCarrito.cant }</p>
            <button id="restar${ prodEnCarrito.id }" type="button" class="btn btn-warning botonesCarrito restar">-</button>
            </td>
            <td id="precio${ prodEnCarrito.id }">${ prodEnCarrito.price * prodEnCarrito.cant }</td>
            <td>
                <button id="borrarProducto${ prodEnCarrito.id }"type="button" class="btn btn-danger borrar-producto"><img src="imagenes/trash.png" alt="trash" class="botonBorrarProducto"></button>
            </td>
    </tr>`);

    // sumar cantidad en carrito

    $(`#sumar${ prodEnCarrito.id }`).click(() => {
        sumarProducto();
    });

    function sumarProducto() {
        if (prodEnCarrito.cant < prodEnCarrito.stock) {
            $(`#cantidad${ prodEnCarrito.id }`).text(`${ prodEnCarrito.cant += 1}`);
            $(`#precio${ prodEnCarrito.id }`).text(`${ prodEnCarrito.cant * prodEnCarrito.price }`);
            $("#total").text(`${total += prodEnCarrito.price}`);
        }
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    // restar cantidad en carrito

    $(`#restar${ prodEnCarrito.id }`).click(() => {
        restarProducto();
    });

    function restarProducto() {
        if (prodEnCarrito.cant > 1) {
            $(`#cantidad${ prodEnCarrito.id }`).text(`${ prodEnCarrito.cant -= 1}`);
            $(`#precio${ prodEnCarrito.id }`).text(`${ prodEnCarrito.cant * prodEnCarrito.price }`);
            $("#total").text(`${total -= prodEnCarrito.price }`);
        }
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    // borrar unicamente un producto

    $(`#borrarProducto${ prodEnCarrito.id }`).click(() => {
        borrarProducto(prodEnCarrito.id);
    });

    function borrarProducto(id) {
        if (carrito.find(e => e.id === id)) {
            carrito.splice(0, 1);
            $(`#${ prodEnCarrito.id }`).remove();
            $("#total").text(`${total -= prodEnCarrito.price * prodEnCarrito.cant}`);
            if (total > 0) {
                $("#botonComprar").fadeIn(1);
            } else {
                $("#botonComprar").fadeOut(1);
                $("#elTotal").text(``);
            }
            localStorage.setItem('carrito', JSON.stringify(carrito));
        }
    }
}


//Calcular total
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

// El boton comprar solo debe aparecer cuando total sea mayor a 0

if (total > 0) {
    $("#botonComprar").fadeIn(1);
} else {
    $("#botonComprar").fadeOut(1);
    $("#elTotal").text(``);
}

// Mostrar formulario de pedido

$("#botonComprar").click(() => {
    comprarCarrito();
});

function comprarCarrito() {
    $("#datosParaCompra").show();

    carrito[0].stock -= carrito[0].cant;

    localStorage.setItem('carrito', JSON.stringify(carrito));
}


// Controlar que se ingresen datos validos

function pararDefecto(e) {
    if (isNaN(e.value)) {
        $("#botonFinalizarPedido").click(() => {
            finalizarPedido();
        });
    } else {
        datosInvalidos();
    }
}

// si los datos son invalidos que aparezca un modal Datos Invalidos

function datosInvalidos() {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Datos invalidos',
        text: 'Por favor, ingrese datos validos para finalizar el pedido.',
        showConfirmButton: false,
        timer: 1800
    })
}

// si los datos ingresados son los correctos entonces que se envie un email, donde se pactarian el envio y la forma de pago.

// El email se envia gracias a que utilice EmailJS

function finalizarPedido() {

    emailjs.init('user_kkGn2mzHjjAEnW7D2hYUn');

    $("#datosParaCompra").submit(function(event) {
        event.preventDefault();

        const serviceID = 'default_service';
        const templateID = 'template_q86uwb5';

        emailjs.sendForm(serviceID, templateID, this)

        // timer para darle tiempo a enviar el mail

        let timerInterval
        Swal.fire({
                title: 'Enviando tu pedido',
                html: 'se enviará en <b></b>.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                        const content = Swal.getHtmlContainer()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = Swal.getTimerLeft()
                            }
                        }
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
            // cuando se envie aparece un cartel de pedido enviado
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Pedido Enviado',
                    text: 'Pronto nos comunicaremos por email!',
                    showConfirmButton: false,
                    timer: 1800
                })

                // se oculta nuevamente el formulario, se vacia el carrito y se muestra un boton de volver al inicio

                $("#datosParaCompra").hide();

                vaciarCarrito();

                $("#volverAlInicio").show();

            });
    });

}

// Boton vaciar carrito

$("#botonVaciar").click(() => {
    vaciarCarrito();
});

function vaciarCarrito() {
    localStorage.removeItem('carrito');
    $("#carrito-producto").text(``);
    $("#botonComprar").fadeOut(1);
    $("#datosParaCompra").hide();
}