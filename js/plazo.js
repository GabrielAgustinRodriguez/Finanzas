//PLAZO FIJO

let capitalInput = document.getElementById("capitalP")

let interesInput = document.getElementById("interesP")

let tiempoInput = document.getElementById("tiempoP")

let botonPlazo = document.getElementById("btnplazo")

botonPlazo.addEventListener("click", respuestaPlazoClick)


function respuestaPlazoClick(){
    console.log(capitalInput.value);
    console.log(interesInput.value);
    console.log(tiempoInput.value);

    console.log("Entro al plazo")
    Swal.fire({
        title: "Plazo Fijo",
        text: "Si depositás $" + capitalInput.value + " durante " + tiempoInput.value + " meses, recibís un total de $" + calcularPlazoFijo(capitalInput.value, interesInput.value, tiempoInput.value),
    });
}


function calcularPlazoFijo(capitalInicial, interes, dias){
    let interesCalculado = interes/12*dias;
    let capital = parseInt(capitalInicial);
    let capitalFinal = parseInt(capital + (capital * (interesCalculado/100)));
    console.log("El capital final obtenido: " + capitalFinal);
    return capitalFinal;
}
