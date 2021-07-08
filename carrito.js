const prodEnCarrito = JSON.parse(localStorage.getItem('carrito'));

const carrito = [prodEnCarrito];


for (let i = 0; i < 5; i++) {
    for (const prodEnCarrito of carrito) {

        let leerLS = document.createElement("tr");

        leerLS.innerHTML = `<th scope="row">${ prodEnCarrito[i].id }</th>
                      <td>${ prodEnCarrito[i].type}</td>
                      <td>1</td>
                      <td>${ prodEnCarrito[i].price }</td>`;

        document.getElementById("carrito-producto").appendChild(leerLS);
    }
}