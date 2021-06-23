class Producto {
    constructor(tipo, stock) {
        this.tipo = tipo;
        this.stock = parseInt(stock);
    }
    ProductoSeleccionado() {
        alert("Producto seleccionado: " + this.tipo);
        console.log("Producto seleccionado: " + this.tipo);
    }
}

var cuadernoTB = new Producto("Cuaderno Tapa Blanda", 5);
var cuadernoTD = new Producto("Cuaderno Tapa Dura", 2);
var cuadernoA = new Producto("Cuaderno Anillado", 3);
var cuadernoR = new Producto("Cuaderno Rayado", 7);
var cuadernoC = new Producto("Cuaderno Cuadriculado", 10);

console.log("Stock total:\n" + cuadernoTB.tipo + ": " + cuadernoTB.stock + "\n" + cuadernoTD.tipo + ": " + cuadernoTD.stock + "\n" + cuadernoA.tipo + ": " + cuadernoA.stock + "\n" + cuadernoR.tipo + ": " + cuadernoR.stock + "\n" + cuadernoC.tipo + ": " + cuadernoC.stock);

alert("Bienvenid@ al carrito de compras");

do {
    var seleccionProducto = parseInt(prompt("Ingrese el codigo del producto que desea comprar:\n1 => " + cuadernoTB.tipo + "\n2 => " + cuadernoTD.tipo + "\n3 => " + cuadernoA.tipo + "\n4 => " + cuadernoR.tipo + "\n5 => " + cuadernoC.tipo));
    if (seleccionProducto <= 5 && seleccionProducto != "" && seleccionProducto > 0) {
        switch (seleccionProducto) {
            case 1:
                cuadernoTB.ProductoSeleccionado();
                var ProdComprado = cuadernoTB.tipo;
                var stockP = cuadernoTB.stock;
                break;
            case 2:
                cuadernoTD.ProductoSeleccionado();
                var ProdComprado = cuadernoTD.tipo;
                var stockP = cuadernoTD.stock;
                break;
            case 3:
                cuadernoA.ProductoSeleccionado();
                var ProdComprado = cuadernoA.tipo;
                var stockP = cuadernoA.stock;
                break;
            case 4:
                cuadernoR.ProductoSeleccionado();
                var ProdComprado = cuadernoR.tipo;
                var stockP = cuadernoR.stock;
                break;
            default:
                cuadernoC.ProductoSeleccionado();
                var ProdComprado = cuadernoC.tipo;
                var stockP = cuadernoC.stock;
                break;
        }
    } else {
        alert("ERROR!\nIngrese un codigo valido");
    }
} while (seleccionProducto = "" || isNaN(seleccionProducto) || seleccionProducto <= 0 || seleccionProducto > 5);

function Stock(enStock, aComprar) {
    return enStock - aComprar;
}

do {
    var cantidad = parseInt(prompt("Ingrese la cantidad a comprar:"));
    var resultado = Stock(stockP, cantidad);
    if (cantidad != "" && stockP >= cantidad) {
        alert("Hay stock de su producto");
        console.log("Cantidad a comprar del producto " + ProdComprado + ": " + cantidad);
        alert("Muchas gracias por su compra!!");
    } else if (cantidad != "" && stockP < cantidad) {
        alert("No hay stock suficiente del producto\nStock de " + ProdComprado + ": " + stockP);
    } else {
        alert("ERROR!\nIngrese una cantidad valida");
    }
} while (cantidad == "" || cantidad == 0 || stockP < cantidad);

console.log("Stock actualizado de " + ProdComprado + ": " + resultado);


if (ProdComprado == cuadernoTB["tipo"] && resultado < 5) {
    console.log("Stock total actualizado:\n" + cuadernoTB.tipo + ": " + resultado + "\n" + cuadernoTD.tipo + ": " + cuadernoTD.stock + "\n" + cuadernoA.tipo + ": " + cuadernoA.stock + "\n" + cuadernoR.tipo + ": " + cuadernoR.stock + "\n" + cuadernoC.tipo + ": " + cuadernoC.stock);

} else if (ProdComprado == cuadernoTD["tipo"] && resultado < 2) {
    console.log("Stock total actualizado:\n" + cuadernoTB.tipo + ": " + cuadernoTB.stock + "\n" + cuadernoTD.tipo + ": " + resultado + "\n" + cuadernoA.tipo + ": " + cuadernoA.stock + "\n" + cuadernoR.tipo + ": " + cuadernoR.stock + "\n" + cuadernoC.tipo + ": " + cuadernoC.stock);

} else if (ProdComprado == cuadernoA["tipo"] && resultado < 3) {
    console.log("Stock total actualizado:\n" + cuadernoTB.tipo + ": " + cuadernoTB.stock + "\n" + cuadernoTD.tipo + ": " + cuadernoTD.stock + "\n" + cuadernoA.tipo + ": " + resultado + "\n" + cuadernoR.tipo + ": " + cuadernoR.stock + "\n" + cuadernoC.tipo + ": " + cuadernoC.stock);

} else if (ProdComprado == cuadernoR["tipo"] && resultado < 7) {
    console.log("Stock total actualizado:\n" + cuadernoTB.tipo + ": " + cuadernoTB.stock + "\n" + cuadernoTD.tipo + ": " + cuadernoTD.stock + "\n" + cuadernoA.tipo + ": " + cuadernoA.stock + "\n" + cuadernoR.tipo + ": " + resultado + "\n" + cuadernoC.tipo + ": " + cuadernoC.stock);

} else {
    console.log("Stock total actualizado:\n" + cuadernoTB.tipo + ": " + cuadernoTB.stock + "\n" + cuadernoTD.tipo + ": " + cuadernoTD.stock + "\n" + cuadernoA.tipo + ": " + cuadernoA.stock + "\n" + cuadernoR.tipo + ": " + cuadernoR.stock + "\n" + cuadernoC.tipo + ": " + resultado);
}