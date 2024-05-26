// let topping = "Oreo"
// let precio = 0;
// let preciofinal = 0;
// let helado = 200;

// if(topping == "Oreo"){
//     precio = 10;
// }else if (topping == "kitKat"){
//     precio = 15;
// }else if (topping == "Kinder") {
//     precio = 25;
// }else {
//     console.log("No tenemos este topping");
// }

// preciofinal = helado + precio;
// console.log("El helado cuesta $" + preciofinal)

let nombre = prompt ("Ingrese su nombre");
function saludo() {
    if (nombre) {
        alert("Bienvenido " + nombre )
    }
    else {
        alert("Debe ingresar un nombre")
    }
}

saludo();

