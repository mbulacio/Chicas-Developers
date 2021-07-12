let carrito = [];

const prodEnCarrito = JSON.parse(localStorage.getItem('carrito'));

if (prodEnCarrito) {
    carrito = prodEnCarrito
}

for (const prodEnCarrito of carrito) {

    var prod = 1;

    let leerLS = document.createElement("tr");

    leerLS.innerHTML = `<th scope="row">${ prodEnCarrito.id }</th>
                      <td>${ prodEnCarrito.type}</td>
                      <td id="cantidad${ prodEnCarrito.id }"><button type="button" class="btn btn-outline-warning btn-sm tamañoMasProductos" id="botonMas${ prodEnCarrito.id }">+</button>${prod}</td>
                      <td>${ prodEnCarrito.price }</td>`;

    document.getElementById("carrito-producto").appendChild(leerLS);

    const vaciar = document.getElementById("vaciar");
    vaciar.addEventListener('click', () => {
        vaciarCarrito()
    });

    function vaciarCarrito() {
        localStorage.removeItem('carrito');
        document.getElementById("carrito-producto").innerHTML = ``;
    }

    const masProd = document.getElementById(`botonMas${ prodEnCarrito.id }`);
    masProd.addEventListener('click', () => {
        sumarProd(prod)
    });

    function sumarProd(prod) {
        leerLS.innerHTML =
            `<th scope="row">${ prodEnCarrito.id }</th>
            <td>${ prodEnCarrito.type}</td>
            <td id="cantidad${ prodEnCarrito.id }"><button type="button" class="btn btn-outline-warning btn-sm tamañoMasProductos" id="botonMas${ prodEnCarrito.id }">+</button>${prod + 1}</td>
            <td>${ prodEnCarrito.price * 2}</td>`;
    }



}