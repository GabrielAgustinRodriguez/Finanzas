
//CONVERSIONES

let pesosInput = document.getElementById("pesos")

let moneda = document.getElementById("moneda")

let botonConversiones = document.getElementById("btnconversiones")

botonConversiones.addEventListener("click", respuestaConversionesClick)

let mensaje; //variable para mostrar el mensaje con la modena correcta


function respuestaConversionesClick(){
    Swal.fire("$" + pesosInput.value + " pesos son $" + parseInt(conversiones(pesosInput.value)) + " " + mensaje)
    showConfirmButton: true
}



function conversiones(dinero){
    dinero = parseInt(dinero);
    let conversionFinal = 0;
    conversionFinal = parseInt(conversionFinal);

    let monedaCambio = moneda.value;

    switch (monedaCambio){
        case "dolar":
            conversionFinal = Math.trunc(pesosInput.value/440);
            mensaje = "dolares";
            break;
        case "euro":
            conversionFinal = Math.trunc(pesosInput.value/225);
            mensaje = "euros";
            break;    
        case "real":
            conversionFinal = Math.trunc(pesosInput.value*0.024);
            mensaje = "reales";
            break;            
        case "puruguayo":
            conversionFinal = Math.trunc(pesosInput.value*0.19);
            mensaje = "pesos uruguayos";
            break; 
    }
    return conversionFinal;
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
        if(nombre == arregloMonedas[i].nombre){
            return arregloMonedas[i];
        }
    }
}
