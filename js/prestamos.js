//Prestamos

let capitalSolicitado = document.getElementById("capitalS")

let interesS = document.getElementById("interesS")

let tiempoS = document.getElementById("tiempoS")

let botonPrestamo = document.getElementById("btnprestamo")

botonPrestamo.addEventListener("click", respuestaPrestamoClick)



function respuestaPrestamoClick(){
    Swal.fire({
        title: "Préstamos",
        text: "Si solicitás $" + capitalSolicitado.value + " a un interés del %" + interesS.value + " vas a terminar pagando $" + prestamo(capitalSolicitado.value, interesS.value, tiempoS.value) + " por mes.",
    });
    guardarFormulario();
}

function guardarFormulario(){
    localStorage.setItem("capitalInicial", capitalSolicitado.value)
    localStorage.setItem("interes", interesS.value)
    localStorage.setItem("tiempo", tiempoS.value)
}

function prestamo(capital, interes, tiempo){
    let c = parseInt(capital);
    let i = parseInt(interes);
    let t = parseInt(tiempo)
    let cuota = (c + (c*i/100))/t;
    cuota = cuota.toFixed(2) // Para que solo me devuelva 2 digitos decimales
    return cuota;
}


