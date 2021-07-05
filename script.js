const productos = [{ id: "CTB", tipo: "Cuaderno Tapa Blanda", precio: 600, stock: 15 },
    { id: "CTD", tipo: "Cuaderno Tapa Dura", precio: 700, stock: 24 },
    { id: "CA", tipo: "Cuaderno Anillado", precio: 800, stock: 10 },
    { id: "CCR", tipo: "Cuaderno Con Relieve", precio: 900, stock: 7 },
    { id: "CPS", tipo: "Cuaderno Para Sketch", precio: 500, stock: 12 }
]

const arrayOrdenado = productos.sort((a, b) => a.precio - b.precio);
console.log(arrayOrdenado);

console.log("Stock total:\n" + productos[0].tipo + ": " + productos[0].stock +
    "\n" + productos[1].tipo + ": " + productos[1].stock +
    "\n" + productos[2].tipo + ": " + productos[2].stock +
    "\n" + productos[3].tipo + ": " + productos[3].stock +
    "\n" + productos[4].tipo + ": " + productos[4].stock);

alert("Bienvenid@ al carrito de compras");

do {
    var seleccionProducto = parseInt(prompt("Ingrese el codigo del producto que desea comprar:\n1 => " + productos[0].tipo + "\n2 => " + productos[1].tipo + "\n3 => " + productos[2].tipo + "\n4 => " + productos[3].tipo + "\n5 => " + productos[4].tipo));
    if (seleccionProducto <= 5 && seleccionProducto != "" && seleccionProducto >= 1) {
        switch (seleccionProducto) {
            case 1:
                alert("Producto seleccionado: " + productos[0].tipo);
                console.log("Producto seleccionado: " + productos[0].tipo);
                var prodComprado = productos[0].tipo;
                var stockP = productos[0].stock;
                break;
            case 2:
                alert("Producto seleccionado: " + productos[1].tipo);
                console.log("Producto seleccionado: " + productos[1].tipo);
                var prodComprado = productos[1].tipo;
                var stockP = productos[1].stock;
                break;
            case 3:
                alert("Producto seleccionado: " + productos[2].tipo);
                console.log("Producto seleccionado: " + productos[2].tipo);
                var prodComprado = productos[2].tipo;
                var stockP = productos[2].stock;
                break;
            case 4:
                alert("Producto seleccionado: " + productos[3].tipo);
                console.log("Producto seleccionado: " + productos[3].tipo);
                var prodComprado = productos[3].tipo;
                var stockP = productos[3].stock;
                break;
            default:
                alert("Producto seleccionado: " + productos[4].tipo);
                console.log("Producto seleccionado: " + productos[4].tipo);
                var prodComprado = productos[4].tipo;
                var stockP = productos[4].stock;
                break;
        }
    } else {
        alert("ERROR!\nIngrese un codigo valido");
    }
} while (seleccionProducto = "" || isNaN(seleccionProducto) || seleccionProducto <= 1 || seleccionProducto > 5);


function Stock(enStock, aComprar) {
    return enStock - aComprar;
}


do {
    var cantidad = parseInt(prompt("Ingrese la cantidad a comprar:"));
    var resultado = Stock(stockP, cantidad);
    if (cantidad != "" && stockP >= cantidad) {
        alert("Hay stock de su producto");
        console.log("Cantidad a comprar del producto " + prodComprado + ": " + cantidad);
        alert("Muchas gracias por su compra!!");
    } else if (cantidad != "" && stockP < cantidad) {
        alert("No hay stock suficiente del producto\nStock de " + prodComprado + ": " + stockP);
    } else {
        alert("ERROR!\nIngrese una cantidad valida");
    }
} while (cantidad == "" || cantidad == 0 || stockP < cantidad || isNaN(cantidad));


if (resultado <= 0) {
    console.log(prodComprado + ": Total Vendido");
} else {
    console.log("Stock actualizado de " + prodComprado + ": " + resultado);
}