

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
