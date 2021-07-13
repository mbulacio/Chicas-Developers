var carrito = [];

const prodEnCarrito = JSON.parse(localStorage.getItem('carrito'));

if (prodEnCarrito) {
    carrito = prodEnCarrito
}

for (const prodEnCarrito of carrito) {

    var prod = 1;

    let leerLS = document.createElement("tr");

    leerLS.innerHTML = `<th scope="row">${ prodEnCarrito.id }</th>
                      <td>${ prodEnCarrito.type}</td>
                      <td>${prod}</td>
                      <td>${ prodEnCarrito.price }</td>`;

    document.getElementById("carrito-producto").appendChild(leerLS);



    const vaciar = document.getElementById("vaciar");
    vaciar.addEventListener('click', () => {
        vaciarCarrito()
    });

    function vaciarCarrito() {
        localStorage.removeItem('carrito');
        document.getElementById("carrito-producto").innerHTML = ``;
        document.getElementById("carrito-producto").innerHTML = ``;
    }
}

const total = Object.values(carrito).reduce((acc, { price }) => acc + price, 0)

let totalCarrito = document.createElement("tr");

totalCarrito.innerHTML = `<th></th>
                    <td></td>
                    <th scope="col">Total</th>
                    <td>${ total }</td>`;

document.getElementById("carrito-producto").appendChild(totalCarrito);