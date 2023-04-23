// Si bien todavía no tiene aplicación en la web, dejo la parte de objetos construido utilizando como ejemplo las monedas y sus conversiones

let monedas = [];

//Contructor de monedas

function Moneda(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }


function agregarMoneda(moneda){
    monedas.push(moneda);
}

let dolar = new Moneda  ("dolar", 400);
agregarMoneda(dolar);
let euro = new Moneda  ("euro", 225);
agregarMoneda(euro);
let real = new Moneda  ("real", 0.024);
agregarMoneda(real);
let uru = new Moneda  ("pesoU", 0.19);
agregarMoneda(uru);

//Busqueda de una moneda

function buscarMoneda(nombre){
    for (var i=0; i<monedas.length;i++){
        if(nombre == monedas[i].nombre){
            return monedas[i];
        }
    }
}



console.log(monedas)

console.log(buscarMoneda(dolar))

