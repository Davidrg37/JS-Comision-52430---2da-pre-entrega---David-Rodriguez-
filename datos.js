let peli1 = {
    nombre: "Air",
    categoria : "Drama",
    formato: "2D",
    horarios: {
        hora1: "17:30 2D subtitulado",
        hora2: "19:30 2D subtitulado",
        hora3: "21:30 2D subtitulado",
    },
    opcion: 1,
    precio2D: 4000,

}

let peli2 = {
    nombre: "Elementos",
    categoria : "Para todo publico",
    formato: "2D, 4D, Imax",
    horarios :{
        hora1: "17:30 2D en español",
        hora2: "19:30 2D en español",
        hora3: "21:30 2D en español",
        hora4: "17:45 4D en español",
        hora5: "19:45 4D en español",
        hora6: "21:45 4D en español",
        hora7: "17:55 Imax en español",
        hora8: "19:55 Imax en español",
        hora9: "21:20 Imax en español",
    },
    opcion: 2,
    precios : {
        precio3D: 3000,
        precio4D: 4000,
        precioImax: 6000,
    }
}

let peli3 = {
    nombre: "The Flash",
    categoria : "Ciencia ficcion",
    formato: "2D, 3D",
    horarios: {
        hora1: "17:30 2D subtitulada",
        hora2: "19:30 2D subtitulada",
        hora3: "21:30 2D subtitulada;",
        hora4: "17:40 3D en español",
        hora5: "19:40 3D en español",
        hora6: "21:40 3D en español",
    },

    opcion: 3,
}

let peli4 = {
    nombre: "Evil Dead",
    categoria : "Terror",
    formato: "2D, Imax",
    horarios: {
        hora1: "17:30 2D subtitulada",
        hora2: "19:30 2D subtitulada",
        hora3: "21:30 2D subtitulada",
        hora4: "19:55 Imax subtitulada",
        hora5: "21:55 Imax subtitulada",
        hora6: "23:10 Imax subtitulada",
    },
    opcion: 4,
}

let peli5 = {
    nombre: "Guardianes de la Galaxia",
    categoria : "Ciencia ficcion",
    formato: "3D, 4D",
    horarios : {
        hora1: "17:40 3D en español",
        hora2: "19:40 3D en español",
        hora3: "21:40 3D en español",
        hora4: "17:45 4D en español",
        hora5: "19:45 4D en español",
        hora6: "21:45 4D en español",
        },
    opcion: 5,
}

let peli6 = {
    opcion: 6,
    nombre: "Transformes",
    categoria : "Ciencia ficcion",
    formato: "2D, 4D",
    horarios: {
        hora1: "17:30 2D subtitulada",
        hora2: "19:30 2D subtitulada",
        hora3: "21:30 2D subtitulada",
        hora4: "17:45 4D en español",
        hora5: "19:45 4D en español",
        hora6: "21:45 4D en español",
        },
}

let peli7 = {
    opcion: 7,
    nombre: "Indiana Jones",
    categoria : "Accion",
    formato: "2D, 3D, Imax",
    horarios : {
        hora1: "17:30 2D subtitulada",
        hora2: "19:30 2D subtitulada",
        hora3: "21:30 2D subtitulada",
        hora4: "17:40 3D en español",
        hora5: "19:40 3D en español",
        hora6: "21:40 3D en español",
        hora7: "17:55 Imax en español",
        hora8: "19:55 Imax en español",
        hora9: "21:20 Imax en español",
    }
}

let peli8 = {
    opcion: 8,
    nombre: "Boogeyman",
    categoria : "Terror",
    formato: "2D, Imax",
    horarios: {
        hora1: "17:30 2D subtitulada",
        hora2: "19:30 2D subtitulada",
        hora3: "21:30 2D subtitulada",
        hora4: "19:45 Imax subtitulada",
        hora5: "21:45 Imax subtitulada",
        hora6: "23:00 Imax subtitulada",
    }
}

let peli9 = {
    opcion: 9,
    nombre: "Mario Bros",
    categoria : "Para todo publico",
    formato: "2D, 4D, Imax",
    horarios : {
        hora1: "17:30 2D en español",
        hora2: "19:30 2D en español",
        hora3: "21:30 2D en español",
        hora4: "17:45 4D en español",
        hora5: "19:45 4D en español",
        hora6: "21:45 4D en español",
        hora7: "17:55 Imax en español",
        hora8: "19:55 Imax en español",
        hora9: "21:20 Imax en español",
    }
}

let peli10 = {
    opcion: 10,
    nombre: "Hazme el favor",
    categoria : "Drama",
    formato: "2D subtitulado",
    horarios: {
        hora1: "17:30 2D subtitulado;",
        hora2: "19:30 2D subtitulado;",
        hora3: "21:00 2D subtitulado;",
    },
}


const cartelera = [peli1, peli2, peli3, peli4, peli5, peli6, peli7, peli8, peli9, peli10];
console.log(peli1.nombre)
console.log(peli1.hora1)
console.log(cartelera)

const costoEntradas2D = [3000];
const costoEntradas3D = [4000];
const costoEntradas4D = [6000];
const costoEntradasImax = [7500];

let funcion1 = {
    id: "17:30",
    precio : 3000,
}

let funcion2 = {
    id: "19:30",
    precio : 3000,
}

let funcion3 = {
    id: "21:30",
    precio : 3000,
}

let funcion4 = {
    id: "17:45",
    precio: 6000,
}

let funcion5 = {
    id: "19:45",
    precio: 6000,
}

let funcion6 = {
    id: "21:45",
    precio: 6000,
}

let funcion7 = {
    id: "17:55",
    precio: 7500,
}

let funcion8 = {
    id: "19:55",
    precio: 7500,
}

let funcion9 = {
    id: "21:20",
    precio: 7500,
}

let funcion10 ={
    id: "17:40",
    precio: 4000,
}

let funcion11 ={
    id: "19:40",
    precio: 4000,
}

let funcion12 = {
    id: "21:40",
    precio: 4000,
}

let funcion13 = {
    id: "23",
    precio: 4000,
}

let funcion14 = {
    id: "23:10",
    precio: 4000,
}

const funciones = [funcion1, funcion2, funcion3, funcion4, funcion5, funcion6, funcion7, funcion8, funcion9, funcion10, funcion11, funcion12, funcion13, funcion14];

let menu1 = {
    opcion: 1,
    nombre: "Combo 1 = Pop y Soda chico",
    precio : 10000,
}

let menu2 = {
    opcion: 2,
    nombre: "Combo 2 = Pop y Soda mediano",
    precio : 13000,
}

let menu3 = {
    opcion: 3,
    nombre: "Combo 3 = Pop y Soda grande",
    precio : 16000,
}

let menu4 = {
    opcion: 4,
    nombre: "Combo 4 = Pop grande y 2 sodas medianos",
    precio : 18000,
}

let menu5 = {
    opcion: 5,
    nombre: "Combo 5 = 2 Pop grande y 2 sodas medianos",
    precio : 20000,
}

const combos = [menu1, menu2, menu3, menu4, menu5];
