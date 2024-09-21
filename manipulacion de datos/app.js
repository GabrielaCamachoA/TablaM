function convertir(event){
    event.preventDefault();
}

function mayuscula(){
    let mensaje = document.getElementById("mensaje").value;
    let convertir = mensaje.toLocaleUpperCase();

    document.getElementById("resultado"). textContent = `Mensaje: ${convertir}`;
}

function minuscula(){
    let mensaje = document.getElementById("mensaje").value;
    let convertir = mensaje.toLocaleLowerCase();

    document.getElementById("resultado"). textContent = `Mensaje: ${convertir}`;
}