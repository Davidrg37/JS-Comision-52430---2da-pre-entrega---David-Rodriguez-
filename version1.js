console.log("Creaciones de Array e objetos -------------------------->")

console.log(cartelera);
console.log(costoEntradas2D);
console.log(costoEntradas3D);
console.log(costoEntradas4D);
console.log(costoEntradasImax);
console.log(combos);
console.log(peli1);
console.log(peli1.nombre);
console.log(peli1.hora1);
console.log(typeof peli1.hora1)

const datosBusqueda = {
    nombre: "",
    horario: "",
    formato: "",
    categoría: "",
    opcion: "",
}

const datosBusqueda2= {
    opcion: "",
    nombre: "",
    precio: "",
}

console.log("-------------------------->")

console.log("A partir de acá, empieza el simulador----------->")

function seleccion(){
    console.log("Bienvenido a Multicines, más que un cine, una forma de entretenimiento")

    console.log("Seleccione lo que desea hacer")
    console.log("1: Ver cartelera de cine")
    console.log("2; Ver categorías de las peliculas")
    console.log("3: Comprar comida")
    console.log("------------------------------->");

    let selectOpc = prompt("Ingrese la opcion de lo que desea hacer")
    switch(selectOpc){
        case "1":
            verCartelera(cartelera);
            console.log("--------------------->")
            break;
        default:
            console.log("Pelicula No Disponible")
    }
    
}

function verCartelera(cartelera){
    console.log("--------------------->")
    cartelera.forEach( panel => {
        console.log("Opcion " + panel.opcion + " : " + panel.nombre)
    })
    
    let selectPelicula = prompt("Seleccione la película que desea ver")
    verHorario(selectPelicula, cartelera);
}

function verHorario(selectPelicula, cartelera){
    console.log("--------------------->")
    seleccion = selectPelicula - 1;
    if(selectPelicula == 1 || selectPelicula == "Air"){
        let hora = Object.values(peli1);
        for(let i = 3; i<=5;i+=1){
            console.log(hora[i]);
        }
    } else if (selectPelicula == 2 || selectPelicula == "Elementos") {
        let hora = Object.values(peli2);
        for(let i = 3; i<=11;i+=1){
            console.log(hora[i]);
        }
    } else if (selectPelicula == 3 || selectPelicula == "The Flash") {
        let hora = Object.values(peli3);
        for(let i = 3; i<=8;i+=1){
            console.log(hora[i]);
        }
    } else if (selectPelicula == 5 || selectPelicula == "Guardianes de la Galaxia" || selectPelicula == "Guardianes") {
        let hora = Object.values(peli5);
        for(let i = 3; i<=8;i+=1){
            console.log(hora[i]);
        }
    } else if (selectPelicula == 4 || selectPelicula == "Evil Dead") {
        let hora = Object.values(peli4);
        for(let i = 3; i<=8;i+=1){
            console.log(hora[i]);
        }
    } else if (selectPelicula == 6 || selectPelicula == "Transformers") {
        let hora = Object.values(peli6);
        for(let i = 4; i<=9;i+=1){
            console.log(hora[i]);
        }
    } else if (selectPelicula == 7 || selectPelicula == "Indiana Jones") {
        let hora = Object.values(peli7);
        for(let i = 4; i<=12;i+=1){
            console.log(hora[i]);
        }
    } else if (selectPelicula == 8 || selectPelicula == "Boogeyman") {
        let hora = Object.values(peli8);
        for(let i = 4; i<=9;i+=1){
            console.log(hora[i]);
        }
    } else if (selectPelicula == 9 || selectPelicula == "Mario Bross") {
        let hora = Object.values(peli9);
        for(let i = 4; i<=12;i+=1){
            console.log(hora[i]);
        }
    } else if (selectPelicula == 10 || selectPelicula == "Hazme el favor") {
        let hora = Object.values(peli10);
        for(let i = 4; i<=6;i+=1){
            console.log(hora[i]);
        }
    }

    let selectHorario = prompt("Inserte la hora que desea ver la pelicula")
    seleccionEntradas(selectHorario);
}

function seleccionEntradas(selectHorario){
    let totalEntradas = 0;
    let entradas = prompt("Inserte la cantidad de entradas que desea")

    if(selectHorario == "17:30" || selectHorario == "19:30" || selectHorario == "21:30"){
        totalEntradas = Number(costoEntradas2D.map (costoEntradas2D => costoEntradas2D * entradas)); 
    } else if(selectHorario == "17:45" || selectHorario == "19:45" || selectHorario == "21:45"){
        totalEntradas = Number(costoEntradas4D.map (costoEntradas4D => costoEntradas4D * entradas)); 
    } else if(selectHorario == "17:55" || selectHorario == "19:55" || selectHorario == "21:20"){
        totalEntradas = Number(costoEntradasImax.map (costoEntradasImax => costoEntradasImax * entradas)); 
    } else if(selectHorario == "17:40" || selectHorario == "19:40" || selectHorario == "21:40"){
        totalEntradas = Number(costoEntradas3D.map (costoEntradas3D => costoEntradas3D * entradas)); 
    }

    console.log("El total de las entradas es: " + totalEntradas + " de pesos");
    // console.log(typeof totalEntradas);
    menuComida(totalEntradas)
}

function menuComida(totalEntradas){
    const saldoEntradas = totalEntradas
    // console.log("Total entradas " + totalEntradas)
    console.log("--------------------->")
    let consulta = prompt("Desea añadir comida?")
    switch(consulta){
        case "Si":
            combos.forEach( menu => {
                console.log(menu.nombre + " " + menu.precio)
            })
            seleccionComida(totalEntradas)
            console.log("--------------------->")
            break;
        case "No":
            console.log("Espere mientras calculamos el total a pagar");
            console.log("El total a pagar es: " + totalEntradas);
            if(totalEntradas>=0){
                console.log("Su pedido ha sido realizado. Acerquese a las cajas a pagar, o escoga la opción de pagar al finalizar la operación, introduciendo el código que sale en pantalla")
            } 
            break;
        default:
            console.log("--------------------->")
    }
}

function seleccionComida (totalEntradas){
    console.log("--------------------->")
    let seleccionComida = Number(prompt("Indique el numero del combo que desea"))
    let cantidadComida = Number(prompt("Cuantos combos desea agregar"))
    let totalComida = 0;

    if(seleccionComida == 1 && cantidadComida>0){
        Object.entries(menu1).forEach(([precio, values]) => {totalComida = Number( (values*cantidadComida))})    
    } else if (seleccionComida == 2 && cantidadComida>0){
        Object.entries(menu2).forEach(([precio, values]) => {totalComida = Number( (values*cantidadComida))}) 
    } else if(seleccionComida == 3 && cantidadComida>0){
        Object.entries(menu3).forEach(([precio, values]) => {totalComida = Number( (values*cantidadComida))}) 
    } else if (seleccionComida == 4 && cantidadComida>0){
        Object.entries(menu4).forEach(([precio, values]) => {totalComida = Number( (values*cantidadComida))}) 
    } else if(seleccionComida == 5 && cantidadComida>0){
        Object.entries(menu5).forEach(([precio, values]) => {totalComida = Number( (values*cantidadComida))}) 
    }

    console.log("Total a pagar por comida: " + totalComida + " pesos");
    // console.log(typeof totalComida);

    totalPagar(totalEntradas, totalComida);

}

function totalPagar(totalEntradas, totalComida){
    let suma = (a, b)=> a + b;
    let totalTodo = suma = (a, b) => a + b;
    console.log("El total a pagar es " + totalTodo(totalEntradas, totalComida) + " de pesos");

    if(totalTodo>=0 || totalEntradas>=0){
        console.log("Su pedido ha sido realizado. Acerquese a las cajas a pagar, o escoga la opción de pagar al finalizar la operación, introduciendo el código que sale en pantalla")
    } else {
        console.log("Ha habido un problema al procesar su pedido. Por favor acerquese a una taquilla para poder realizar su orden.")
    }
}

seleccion();