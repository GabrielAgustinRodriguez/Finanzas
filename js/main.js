function plazoFijo(){
    window.alert("Usted ingresó la opción de Plazo Fijo. Primero se le consultará el capital inicial, luego el interés con el cual quiere calcularlo y finalmente el tiempo de inversión. Favor de pulsar aceptar para iniciar");
    let capitalInicial = parseInt(prompt("Favor de iniciar el capital inicial a invertir"));
    let interes = parseInt(prompt("Favor de indicar el interés (TNA) del plazo fijo. Nota: para tranquilidad mental del programador de momento solo se calcula la TNA y no la TEA."));
    let tiempo = parseInt(prompt("Favor de ingresar los días a invertir. Tener presente que el plazo solo generará interés cada 30 días"));
    console.log("Capital inicial ingresado: " + capitalInicial);
    console.log("Interes ingresado: " + interes);
    console.log("Días ingresados: " + tiempo);
    let capitalFinal = calcularPlazoFijo(capitalInicial,interes,tiempo);
    window.alert("Usted ha invertido $" + capitalInicial + ". Dada una TNA de " + interes + "% durante " + tiempo + " dias, obtendrá un capital de $" + capitalFinal);
    usuario = false;
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

function conversiones(){
    window.alert("Usted ingresó en el simulador de conversiones. Con el mismo podrá calcular cuánto recibirá en otras monedas a partir de sus pesos. Favor de pulsar aceptar para iniciar.")
    let monedaCambio = prompt("Favor de indicar la moneda por la cual quiere cambiar sus pesos. Ingrese 1 para Dólar, 2 para Euro, 3 para Reales o 4 para Pesos Uruguayos")
    let pesos = parseInt(prompt("Ingrese la cantidad de pesos que desee cambiar"))
    let total;
    switch (monedaCambio){
        case "1":
            total = Math.trunc(pesos/400);
            window.alert("Con $" + pesos + " pesos usted obtendrá U$D" + total + " dólares");
            break;
        case "2":
            total = Math.trunc(pesos/225);
            window.alert("Con $" + pesos + " pesos usted obtendrá $" + total + " euros");
            break;    
        case "3":
            total = Math.trunc(0.024*pesos);
            window.alert("Con $" + pesos + " pesos usted obtendrá $" + total + " reales");
            break;            
        case "4":
            total = Math.trunc(0.19*pesos);
            window.alert("Con $" + pesos + " pesos usted obtendrá $" + total + " pesos uruguayos");
            break; 
    }

    if (monedaCambio != 1  &&  monedaCambio != 2  &&  monedaCambio !=3 && monedaCambio !=4){
        window.alert("No ha ingresado un dato válido. Deberás apretar F5 para reiniciar")   
    }
    usuario = false;
}

function simuladorPrestamo(){
    window.alert("Usted ingresó en el simulador de préstamos personales. Con el mismo podrá determinar el monto a abonar según el capital solicitado, el interés aplicado y el tiempo a liquidar. Favor de pulsar aceptar para iniciar.")
    let capitalSolicitado = parseInt(prompt("Favor de ingresar el monto a solicitar")) 
    let interes = parseInt(prompt("Favor de ingresar interés a abonar")) 
    let tiempo = parseInt(prompt("Favor de ingresar la cantidad de meses a pagar")); 
    let cuota = prestamo(capitalSolicitado, interes, tiempo);

    windows.alert("Si pedís $" + capitalSolicitado + " bajo un interés del %" + interes + " durante " + tiempo + " meses, vas a pagar $" + cuota + " por mes.");
}

function prestamo(capital, interes, tiempo){
    let cuota = (capital + (capital*interes/100))/tiempo;
    return cuota;
}



let datoIngresado;
let usuario = true;

while (usuario){
    datoIngresado = prompt("Bienvenido usuario. Favor de ingresar el nro. 1 para simular un plazo Fijo, 2 para ver nuestras conversiones de monedas o 3 para simular un préstamo.")
    switch (datoIngresado) {
        case "1":
            plazoFijo();
             break;
        case "2":
            conversiones();
            break;
        case "3":
            simuladorPrestamo();
            break;
    }
    if (datoIngresado != 1  &&  datoIngresado != 2  &&  datoIngresado !=3){
        window.alert("No ha ingresado un dato válido. Favor de volver a intentar")   
    }else{
        usuario=false;
    }

}
    
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
