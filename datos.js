let peli1 = {
    nombre: "Air",
    categoria : "Drama",
    formato: "2D",
    hora1: "17:30 2D subtitulado",
    hora2: "19:30 2D subtitulado",
    hora3: "21:00 2D subtitulado;",
    opcion: "1"
}

let peli2 = {
    nombre: "Elementos",
    categoria : "Para todo publico",
    formato: "2D, 4D, Imax",
    hora4: "17:30 2D en español;",
    hora5: "19:30 2D en español;",
    hora6: "21:30 2D en español;",
    hora7: "17:45 4D en español;",
    hora8: "19:45 4D en español;",
    hora9: "21:45 4D en español;",
    hora10: "17:55 Imax en español;",
    hora11: "19:55 Imax en español;",
    hora12: "21:20 Imax en español;",
    opcion: "2"
}

let peli3 = {
    nombre: "The Flash",
    categoria : "Ciencia ficcion",
    formato: "2D, 3D",
    hora13: "17:30 2D subtitulada",
    hora14: "19:30 2D subtitulada;",
    hora15: "21:30 2D subtitulada;",
    hora16: "17:40 3D en español;",
    hora17: "19:40 3D en español;",
    hora18: "21:40 3D en español;",
    opcion: "3",
}

let peli4 = {
    nombre: "Evil Dead",
    categoria : "Terror",
    formato: "2D, Imax",
    hora19: "17:30 2D subtitulada",
    hora20: "19:30 2D subtitulada;",
    hora21: "21:30 2D subtitulada;",
    hora22: "19:55 Imax subtitulada;",
    hora23: "21:55 Imax subtitulada;",
    hora24: "23:10 Imax subtitulada;",
    opcion: "4",
}

let peli5 = {
    nombre: "Guardianes de la Galaxia",
    categoria : "Ciencia ficcion",
    formato: "3D, 4D",
    hora25: "17:40 3D en español;",
    hora26: "19:40 3D en español;",
    hora27: "21:40 3D en español;",
    hora28: "17:45 4D en español;",
    hora29: "19:45 4D en español;",
    hora30: "21:45 4D en español;",
    opcion: "5",
}

let peli6 = {
    opcion: "6",
    nombre: "Transformes",
    categoria : "Ciencia ficcion",
    formato: "2D, 4D",
    hora31: "17:30 2D subtitulada",
    hora32: "19:30 2D subtitulada;",
    hora33: "21:30 2D subtitulada;",
    hora34: "17:45 4D en español;",
    hora35: "19:45 4D en español;",
    hora36: "21:45 4D en español;",
}

let peli7 = {
    opcion: "7",
    nombre: "Indiana Jones",
    categoria : "Accion",
    formato: "2D, 3D, Imax",
    hora37: "17:30 2D subtitulada",
    hora38: "19:30 2D subtitulada;",
    hora39: "21:30 2D subtitulada;",
    hora40: "17:40 3D en español;",
    hora41: "19:40 3D en español;",
    hora42: "21:40 3D en español;",
    hora43: "17:55 Imax en español;",
    hora44: "19:55 Imax en español;",
    hora45: "21:20 Imax en español;",
}

let peli8 = {
    opcion: "8",
    nombre: "Boogeyman",
    categoria : "Terror",
    formato: "2D, Imax",
    hora46: "17:30 2D subtitulada",
    hora47: "19:30 2D subtitulada;",
    hora48: "21:30 2D subtitulada;",
    hora49: "19:45 Imax subtitulada;",
    hora50: "21:45 Imax subtitulada;",
    hora51: "23:00 Imax subtitulada;",
}

let peli9 = {
    opcion: "9",
    nombre: "Mario Bros",
    categoria : "Para todo publico",
    formato: "2D, 4D, Imax",
    hora52: "17:30 2D en español;",
    hora53: "19:30 2D en español;",
    hora54: "21:30 2D en español;",
    hora55: "17:45 4D en español;",
    hora56: "19:45 4D en español;",
    hora57: "21:45 4D en español;",
    hora58: "17:55 Imax en español;",
    hora59: "19:55 Imax en español;",
    hora60: "21:20 Imax en español;",
}

let peli10 = {
    opcion: "10",
    nombre: "Hazme el favor",
    categoria : "Drama",
    formato: "2D subtitulado",
    hora61: "17:30 2D subtitulado;",
    hora62: "19:30 2D subtitulado;",
    hora63: "21:00 2D subtitulado;",
}

const cartelera = [peli1, peli2, peli3, peli4, peli5, peli6, peli7, peli8, peli9, peli10];
console.log(peli1.nombre)
console.log(peli1.hora1)
console.log(cartelera)

const costoEntradas2D = [3000];
const costoEntradas3D = [4000];
const costoEntradas4D = [6000];
const costoEntradasImax = [7500];


let menu1 = {
    opcion: "1",
    nombre: "Combo 1 = Pop y Soda chico",
    precio : 10000,
}

let menu2 = {
    opcion: "2",
    nombre: "Combo 2 = Pop y Soda mediano",
    precio : 13000,
}

let menu3 = {
    opcion: "3",
    nombre: "Combo 3 = Pop y Soda grande",
    precio : 16000,
}

let menu4 = {
    opcion: "4",
    nombre: "Combo 4 = Pop grande y 2 sodas medianos",
    precio : 18000,
}

let menu5 = {
    opcion: "5",
    nombre: "Combo 5 = 2 Pop grande y 2 sodas medianos",
    precio : 20000,
}

const combos = [menu1, menu2, menu3, menu4, menu5];
Object.entries(menu1).forEach(([precio, values]) => {console.log(values*5)});
for(const [precio, values] of Object.entries(menu1)){console.log(values*5)};

//Object keys //
let hora = Object.keys(peli1);
for(let i = 1; i<=3; i+=1){
    let hora1 = hora[i];
    console.log(peli1[hora1]);
}
// Obejct values //
let hora1 = Object.values(hora);
for(let i = 1; i<=3; i+=1){
    console.log(hora1);
}

//for in//
for(let hora in peli1){
    console.log(peli1[hora]);
}

//Entries & for each//
Object.entries(peli1).forEach(([hora1, value]) => console.log(value));

//Entries & forOF//
for(const [hora1, value] of Object.entries(peli1)){
    console.log(value)
}

// Obejct values //
console.log(Object.values(peli1));