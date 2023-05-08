
//CONVERSIONES
/*
let pesosInput = document.getElementById("pesos")

let moneda = document.getElementById("moneda")

let botonConversiones = document.getElementById("btnconversiones")

botonConversiones.addEventListener("click", respuestaConversionesClick)


function respuestaConversionesClick(){
    Swal.fire("$" + pesosInput.value + " a dólares son $" + parseInt(conversiones(pesosInput.value)) + " " + moneda.value + "s")
}


function conversiones(dinero){
    dinero = parseInt(dinero);
    let conversionFinal = 0;
    conversionFinal = parseInt(conversionFinal);

    let monedaCambio = moneda.value;

    switch (monedaCambio){
        case "dolar":
            conversionFinal = Math.trunc(pesosInput.value/440);
            break;
        case "euro":
            conversionFinal = Math.trunc(pesosInput.value/225);
            break;    
        case "real":
            conversionFinal = Math.trunc(pesosInput.value*0.024);
            break;            
        case "puruguayo":
            conversionFinal = Math.trunc(pesosInput.value*0.19);
            break; 
    }
    return conversionFinal;
}

*/
//PLAZO FIJO

let capitalInput = document.getElementById("capitalP")

let interesInput = document.getElementById("interesP")

let tiempoInput = document.getElementById("tiempoP")

let botonPlazo = document.getElementById("btnplazo")

botonPlazo.addEventListener("click", respuestaPlazoClick)

function respuestaPlazoClick(){
    Swal.fire("Si depositás $" + capitalInput.value + " durante " + tiempoInput.value + " meses, recibís un total de $" + calcularPlazoFijo(capitalInput.value, interesInput.value, tiempoInput.value));
    showConfirmButton: true 
}


function calcularPlazoFijo(capitalInicial, interes, dias){
    let tiempo = Math.trunc(dias/30);
    console.log("Plazos concretados: " + tiempo)
    let interesCalculado = interes/12*tiempo;
    console.log("interes total que calculas: " + interesCalculado)
    let capitalFinal = parseInt(capitalInicial + (capitalInicial * (interesCalculado/100)));
    console.log("El capital final obtenido: " + capitalFinal);
    return capitalFinal;
}


// Por cambios en la implementación de la web lo siguiente ha quedado en desuso, lo dejo para que puedan evaluar la creacion de constructores y manejo de arreglos



let arregloMonedas = [];

//Contructor de monedas

function Moneda(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }


function agregarMoneda(moneda){
    arregloMonedas.push(moneda);
}

let dolar = new Moneda  ("dolar", 440);
agregarMoneda(dolar);
let euro = new Moneda  ("euro", 225);
agregarMoneda(euro);
let real = new Moneda  ("real", 0.024);
agregarMoneda(real);
let uru = new Moneda  ("pesoU", 0.19);
agregarMoneda(uru);

//Busqueda de una moneda

function buscarMoneda(nombre){
    for (var i=0; i<arregloMonedas.length;i++){
        if(nombre == monedas[i].nombre){
            return monedas[i];
        }
    }
}
