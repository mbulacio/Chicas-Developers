const productos = [{
        id: "CTB",
        type: "Cuaderno Tapa Blanda",
        price: 600,
        stock: 15,
        img: "./imagenes/Productos/CoolAnillado.png",
        cant: 1
    },
    {
        id: "CTD",
        type: "Cuaderno Tapa Dura",
        price: 700,
        stock: 24,
        img: "./imagenes/Productos/RichTapaDura.png",
        cant: 1
    },
    {
        id: "CA",
        type: "Cuaderno Anillado",
        price: 800,
        stock: 10,
        img: "./imagenes/Productos/GatitoAnillado.png",
        cant: 1
    },
    {
        id: "CCR",
        type: "Cuaderno Con Relieve",
        price: 900,
        stock: 7,
        img: "./imagenes/Productos/PlaquetaTapaDura.png",
        cant: 1
    },
    {
        id: "CPS",
        type: "Cuaderno Para Sketch",
        price: 500,
        stock: 12,
        img: "./imagenes/Productos/StichAnillado.png",
        cant: 1
    }
];

const arrayOrdenado = productos.sort((a, b) => a.precio - b.precio);

const enJSON = JSON.stringify(productos);

localStorage.setItem("Productos", enJSON);

//seccion productos

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
        var itemEnCart = carrito.find(prod => prod.id === id);

        if (itemEnCart) {
            itemEnCart.cant += 1
        } else {
            const itemAgregar = productos.find(prod => prod.id === id);
            carrito.push(itemAgregar);
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






// const enProductos = document.getElementById("seccionProducto");

// for (const producto of productos) {

//     const div = document.createElement("section");

//     div.innerHTML = `<div class="card d-flex flex-row card--producto">
//                         <div class="d-flex justify-content-center">
//                         <a href="productoSolo.html">
//                             <img src="${ producto.img }" class="small" alt="articulo">
//                         </a>
//                         </div>
//                         <div class="d-flex justify-content-center">
//                             <div class="card-body">
//                                 <h2>${ producto.type }</h2>
//                                 <h3>Precio: ${ producto.price }</h3>
//                                 <p class="card-text"><small class="text-muted">Stock: ${ producto.stock }</small></p>
//                                 <button type="button" id="botonAgregar${ producto.id }" class="btn btn-outline-success agregarCarrito suscribite">Agregar al carrito</button>
//                             </div>
//                         </div>
//                     </div>`;

//     enProductos.appendChild(div);

//     function buscarId(prod) {
//         return prod.id === producto.id;
//     }

//     function agregarAlCarrito() {
//         carrito.push(productos.find(buscarId));
//         console.log(carrito);
//         alert("Agregado con exito!");
//         localStorage.setItem('carrito', JSON.stringify(carrito));
//     }

//     const boton = document.getElementById(`botonAgregar${ producto.id }`)

//     boton.addEventListener('click', () => {

//         agregarAlCarrito(producto.id);

//     })
// }