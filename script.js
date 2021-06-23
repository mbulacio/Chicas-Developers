var Producto1 = "Cuaderno Tapa Blanda";
var Producto2 = "Cuaderno Tapa Dura";
var Producto3 = "Cuaderno Anillado";
var Producto4 = "Cuaderno Rayado";
var Producto5 = "Cuaderno Cuadriculado";
var Producto6 = "Agenda 2021";

var stockProducto1 = 3;
var stockProducto2 = 2;
var stockProducto3 = 1;
var stockProducto4 = 7;
var stockProducto5 = 10;
var stockProducto6 = 2;

console.log("Stock total:\n" + Producto1 + ": " + stockProducto1 + "\n" + Producto2 + ": " + stockProducto2 + "\n" + Producto3 + ": " + stockProducto3 + "\n" + Producto4 + ": " + stockProducto4 + "\n" + Producto5 + ": " + stockProducto5 + "\n" + Producto6 + ": " + stockProducto6);

alert("Bienvenid@ al carrito de compras");

do {
    var seleccionProducto = parseInt(prompt("Ingrese el codigo del producto que desea comprar:\n1 => " + Producto1 + "\n2 => " + Producto2 + "\n3 => " + Producto3 + "\n4 => " + Producto4 + "\n5 => " + Producto5 + "\n6 => " + Producto6));
    if (seleccionProducto <= 6 && seleccionProducto != "" && seleccionProducto > 0) {
        switch (seleccionProducto) {
            case 1:
                alert("Producto seleccionado: " + Producto1);
                console.log("Producto seleccionado: " + Producto1);
                var ProdComprado = Producto1;
                var stockP = stockProducto1;
                break;
            case 2:
                alert("Producto seleccionado: " + Producto2);
                console.log("Producto seleccionado: " + Producto2);
                var ProdComprado = Producto2;
                var stockP = stockProducto2;
                break;
            case 3:
                alert("Producto seleccionado: " + Producto3);
                console.log("Producto seleccionado: " + Producto3);
                var ProdComprado = Producto3;
                var stockP = stockProducto3;
                break;
            case 4:
                alert("Producto seleccionado: " + Producto4);
                console.log("Producto seleccionado: " + Producto4);
                var ProdComprado = Producto4;
                var stockP = stockProducto4;
                break;
            case 5:
                alert("Producto seleccionado: " + Producto5);
                console.log("Producto seleccionado: " + Producto5);
                var ProdComprado = Producto5;
                var stockP = stockProducto5;
                break;
            default:
                alert("Producto seleccionado: " + Producto6);
                console.log("Producto seleccionado: " + Producto6);
                var ProdComprado = Producto6;
                var stockP = stockProducto6;
                break;
        }
    } else {
        alert("ERROR!\nIngrese un codigo valido");
    }
} while (seleccionProducto = "" || isNaN(seleccionProducto) || seleccionProducto <= 0 || seleccionProducto > 6);

function Stock(enStock, aComprar) {
    return enStock - aComprar;
}

do {
    var cantidad = parseInt(prompt("Ingrese la cantidad a comprar:"));
    var resultado = Stock(stockP, cantidad);
    if (cantidad != " " && stockP >= cantidad) {
        alert("Hay stock de su producto");
        console.log("Cantidad a comprar del producto " + ProdComprado + ": " + cantidad);
        alert("Muchas gracias por su compra!!");
    } else if (cantidad != "" && stockP < cantidad) {
        alert("No hay stock suficiente del producto\nStock de " + ProdComprado + ": " + stockP);
    } else {
        alert("ERROR!\nIngrese una cantidad valida");
    }
} while (cantidad == "" || cantidad == 0 || isNaN(cantidad) || stockP < cantidad);

console.log("Stock actualizado de " + ProdComprado + ": " + resultado);

if (ProdComprado == Producto1 && resultado < 3) {
    console.log("Stock total actualizado:\n" + Producto1 + ": " + resultado + "\n" + Producto2 + ": " + stockProducto2 + "\n" + Producto3 + ": " + stockProducto3 + "\n" + Producto4 + ": " + stockProducto4 + "\n" + Producto5 + ": " + stockProducto5 + "\n" + Producto6 + ": " + stockProducto6);
} else if (ProdComprado == Producto2 && resultado < 2) {
    console.log("Stock total actualizado:\n" + Producto1 + ": " + stockProducto1 + "\n" + Producto2 + ": " + resultado + "\n" + Producto3 + ": " + stockProducto3 + "\n" + Producto4 + ": " + stockProducto4 + "\n" + Producto5 + ": " + stockProducto5 + "\n" + Producto6 + ": " + stockProducto6);
} else if (ProdComprado == Producto3 && resultado < 1) {
    console.log("Stock total actualizado:\n" + Producto1 + ": " + stockProducto1 + "\n" + Producto2 + ": " + stockProducto2 + "\n" + Producto3 + ": " + resultado + "\n" + Producto4 + ": " + stockProducto4 + "\n" + Producto5 + ": " + stockProducto5 + "\n" + Producto6 + ": " + stockProducto6);
} else if (ProdComprado == Producto4 && resultado < 7) {
    console.log("Stock total actualizado:\n" + Producto1 + ": " + stockProducto1 + "\n" + Producto2 + ": " + stockProducto2 + "\n" + Producto3 + ": " + stockProducto3 + "\n" + Producto4 + ": " + resultado + "\n" + Producto5 + ": " + stockProducto5 + "\n" + Producto6 + ": " + stockProducto6);
} else if (ProdComprado == Producto5 && resultado < 10) {
    console.log("Stock total actualizado:\n" + Producto1 + ": " + stockProducto1 + "\n" + Producto2 + ": " + stockProducto2 + "\n" + Producto3 + ": " + stockProducto3 + "\n" + Producto4 + ": " + stockProducto4 + "\n" + Producto5 + ": " + resultado + "\n" + Producto6 + ": " + stockProducto6);
} else {
    console.log("Stock total actualizado:\n" + Producto1 + ": " + stockProducto1 + "\n" + Producto2 + ": " + stockProducto2 + "\n" + Producto3 + ": " + stockProducto3 + "\n" + Producto4 + ": " + stockProducto4 + "\n" + Producto5 + ": " + stockProducto5 + "\n" + Producto6 + ": " + resultado);
}