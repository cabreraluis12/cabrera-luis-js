const productos = [
    {id:1, nombre:"Procesador Intel", precio:9900, stock:10},
    {id:2, nombre:"Mother Intel", precio:10000, stock:5},
    {id:3, nombre:"Memoria RAM", precio:16000, stock:100},
    {id:4, nombre:"Disco SSD 128GB", precio:4300, stock:100},
    {id:5, nombre:"Disco HDD 4TB", precio:27000, stock:5},
    {id:6, nombre:"Gabinete + fuente", precio:20000, stock:1},
];

const productos_carrito = [];
class Producto {
    constructor (id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.iva = 21;
    }

    aplicarIVA(){
        this.precio = this.precio + ((this.precio * this.iva)/100);
    }
}

function buscarProducto(id){
    return (productos.find(item => item.id === id) || null);
}


function agregarProducto(producto) {
    productos_carrito.push(producto);
}

function eliminarProducto(id) {
    let pos = productos_carrito.findIndex(item => item.id === id);

    if (pos > -1){
        productos_carrito.splice(pos, 1);
    }
}

function recorrerProducto() {
    let contenido_producto = "";

    for (let producto of productos) {
        contenido_producto += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n"
    }

    return contenido_producto;
}

function recorrerProductoCarrito() {
    let contenido_producto = "";

    for (let producto of productos_carrito) {
        contenido_producto += producto.id + "- " + producto.nombre + " $" + producto.precio +  "\n"
    }

    return contenido_producto;
}

//carga de productos 

1
let cargarProducto = true;

cargarProducto = true;

while(cargarProducto){
    let contenido_producto = recorrerProducto();

    let id_producto = parseInt(prompt("Seleccione el producto a agregar al carrito:\n" + contenido_producto));

    let producto = buscarProducto(id_producto);

    if (producto != null) {
        agregarProducto(producto);
    } else{
        alert("El Producto no Pertenece al catalogo ");
    }
        console.log(producto);
    cargarProducto = confirm ("Desea Agregar otro Producto?");
}

//Eliminacion de productos

    cargarProducto = true;

    while (cargarProducto) {
        let contenido_producto = recorrerProductoCarrito();
        
        let id_producto = parseInt(prompt("Desea Eliminar un Producto del Carrito? 0 - Salir\n\n" + contenido_producto));

        if (id_producto > 0) {
            eliminarProducto (id_producto);
        } else {
            alert ("El Producto no se encuntra en el carrito");
        }
        cargarProducto = confirm ("Desea Eliminar otro Producto del Carrito?");

    }

    let suma_total = 0;
    let contenido_productos = "";
    
    for (let prod of productos_carrito) {
        let producto = new Producto(prod.id, prod.nombre, prod.precio, prod.stock);
        producto.aplicarIVA();

        contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
    
        suma_total += producto.precio;
    }
    

    alert("Productos Seleccionados:\n\n" + contenido_productos + "\n\nTotal a Pagar: $" + suma_total);