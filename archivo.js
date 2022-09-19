/*let carrito = [];

let btn_compra = document.querySelectorAll(".Botoncompra");
console.log(btn_compra);

for (let boton of btn_compra){
    boton.addEventListener("click", agregar_carrito);
}

function agregar_carrito(e){
    console.log("El evento está en: ", e.target);

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    console.log(padre);
    console.log(abuelo);

    let nombre_producto = padre.querySelectorAll("h5");
    let precio = padre.querySelectorAll("span");
    let img = abuelo.querySelectorAll("img")
    console.log(nombre_producto[0].textContent);
    console.log(precio[0].textContent);
    console.log(img [0].src);

    let producto = {
        nombre:nombre_producto,
        img:img,
        precio:precio,
        cantidad:1,
    }

    carrito.push(producto);
    let arreglo_JSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", arreglo_JSON);
    console.log(carrito);

    mostrar_carrito (producto);
}

function mostrar_carrito(producto){

let fila = document.createElement("tr");
fila.innerHTML = `<td><img src="${producto.img}"</td>
                  <td>${producto.nombre}</td>
                  <td>${producto.cantidad}</td>
                  <td>${producto.precio}
                  <td><button class="btn-danger">Borrar</button></td>`
    
    let tabla = document.getElementById("tbody");
    console.log(fila);  
}
*/

/*
let numero = 20 ;
numero = numero +1;
numero++;
numero +=1;
numero *=2;

//operador ternario

// condicion ?? caso true / caso false

20 >10 ? alert ("se cumple") : alert ("no se cumple");
let edad = 25;

let puede_votar = edad>=18 ? true : false;

puede_votar ? alert("puede votar") : alert ("No puede votar");

*/


// Operadores logicos AND - OR

//AD retorna el primer falsy o el ultimo verdadero
/*
console.log(30 && 40);
console.log(0 && 400);
*/
// estrictamente iguales

console.log (5 == "5");
console.log(5 === "5");

//desestructuracion

let usuario = {
    nombre: "Matias",
    edad: 25,
}