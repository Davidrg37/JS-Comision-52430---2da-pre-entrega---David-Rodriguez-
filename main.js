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
    console.log("Bienvenido a Multicines, más que un cine, una forma de entretenimiento");
    console.log("------------------------------->");
    console.log("El costo de las entradas es el siguiente: ");
    console.log("En formato 2D: " + costoEntradas2D[0] + " pesos ");
    console.log("En formato 3D: " + costoEntradas3D[0] + " pesos ");
    console.log("En formato 4D: " + costoEntradas4D[0] + " pesos ");
    console.log("En formato Imax: " + costoEntradasImax[0] + " pesos ");


    console.log("------------------------------->");

    console.log("Seleccione lo que desea hacer")
    console.log("1: Ver cartelera de cine")
    console.log("2; Buscar una pelicula")
    console.log("3: Comprar comida")
    console.log("------------------------------->");

    let selectOpc = prompt("Ingrese la opcion de lo que desea hacer")
    switch(selectOpc){
        case "1":
            verCartelera(cartelera);
            console.log("--------------------->")
            break;
        case "2":
            verPeliculas(cartelera);
            console.log("--------------------->")
            break;
        case "3":
            menuComida();
            break;
        default:
            console.log("Pelicula No Disponible")
    }
    
}

function verCartelera(cartelera){
    console.log("--------------------->")
    cartelera.forEach( panel => { // Aca presenta las opciones con opcion y nombre//
        console.log("Opcion " + panel.opcion + " : " + panel.nombre)
    })
    
    let selectPelicula = Number(prompt("Seleccione la opción de la película que desea ver"))

    const pelicula = cartelera.find( peli => peli.opcion === selectPelicula)
    // Esto lo hacemos para que el resultado de usar find se almacene en pelicula. Con find, le decimos que peli se alimenta de peli.opcion (que va ser selectpelicula). De esta forma sabremos si la seleccion es igual a opcion//
    console.log("--------------------->")
    console.log(" Funciones disponibles: ")
    for (let hora in pelicula.horarios){
        let p = 0;
        let x = p+=1;
        //Si select pelicula/peli opcion existe en el objeto que esta en el array, buscamos hora (que es lo que precisamos) en el array pelicula.horarios[hora]//
        console.log(pelicula.horarios[hora])
    }

    let selectHorario = prompt("Inserte la hora de la funcion que desea asistir");
    seleccionEntradas(selectPelicula, selectHorario);
    
}

function seleccionEntradas(selectPelicula, selectHorario){

    let totalEntradas = 0;
    let entradas = prompt("Inserte la cantidad de entradas que desea")

    if(selectHorario == "17:30" || selectHorario == "19:30" || selectHorario == "21:30"){
        totalEntradas = Number(costoEntradas2D.map (costoEntradas2D => costoEntradas2D * entradas)); 
    } else if(selectHorario == "17:45" || selectHorario == "19:45" || selectHorario == "21:45"){
        totalEntradas = Number(costoEntradas4D.map (costoEntradas4D => costoEntradas4D * entradas)); 
    } else if(selectHorario == "17:55" || selectHorario == "19:55" || selectHorario == "21:55" || selectHorario == "23:10" || selectHorario == "21:20" || selectHorario == "23"){
        totalEntradas = Number(costoEntradasImax.map (costoEntradasImax => costoEntradasImax * entradas)); 
    } else if(selectHorario == "17:40" || selectHorario == "19:40" || selectHorario == "21:40"){
        totalEntradas = Number(costoEntradas3D.map (costoEntradas3D => costoEntradas3D * entradas)); 
    } else {
        console.log("No selecciono un horario válido. La operación será cancelada")
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
            totalPagar(totalEntradas);
            // console.log("El total a pagar es: " + totalEntradas);
            // if(totalEntradas>=0){
            //     console.log("Su pedido ha sido realizado. Acerquese a las cajas a pagar, o escoga la opción de pagar al finalizar la operación, introduciendo el código que sale en pantalla")
            // } 
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
    // console.log(typeof totalComida);
    // console.log(typeof totalEntradas);
    let suma = (a, b)=> a + b;
    let totalTodo = suma = (a, b) => a + b;

    if(totalEntradas>0 && totalComida>0){
        console.log("El total a pagar es " + totalTodo(totalEntradas, totalComida) + " de pesos");
    } else if (isNaN(totalComida)){
        console.log("El total a pagar es " + totalEntradas + " de pesos");
    } else if (isNaN(totalEntradas)){
        console.log("El total a pagar es " + totalComida + " de pesos");
    }

    saludoFinal(totalTodo, totalEntradas, totalComida);
}

function saludoFinal(totalTodo, totalEntradas, totalComida){
    if(totalTodo>=0 || totalEntradas>=0 || totalComida>=0){
        console.log("Su pedido ha sido realizado. Acerquese a las cajas a pagar, o escoga la opción de pagar al finalizar la operación, introduciendo el código que sale en pantalla")
    } else {
        console.log("Ha habido un problema al procesar su pedido. Por favor acerquese a una taquilla para poder realizar su orden.")
    }
}

function verPeliculas(cartelera){
    console.log("--------------------->")
    console.log("Tenemos estás peliculas disponibles")
    cartelera.forEach( panel => {

        console.log("Opcion " + panel.opcion + " : " +  panel.nombre + " " + panel.formato)
    })
    
    verCartelera(cartelera);
}

seleccion();
