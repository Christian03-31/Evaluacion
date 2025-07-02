console.log("Script cargado correctamente")


document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const campoMensaje = document.getElementById("mensaje");
    const respuesta = document.getElementById("respuesta");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const mensaje = campoMensaje.value.trim();
        const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mensaje);
        const iconos = document.getElementById("iconos");
        if (mensaje === "") {
            alert("Por favor, escribe un correo electrónico. 😠👎");
            respuesta.textContent = "";
            iconos.textContent = "😠👎"
        } else if (!correoValido) {
            alert("El formato del correo electrónico no es válido. 😢");
            respuesta.textContent = "";
            iconos.textContent = "😢"
        } else {
            alert(`Gracias por enviar su correo: "${mensaje}"`);
            respuesta.textContent = `Correo recibido: ${mensaje} 😊👍`;
            iconos.textContent = "😊👍";
            campoMensaje.value = "";

        }
    });
});

let indiceColor = 0;
const colores = ["whitesmoke", "#add8e6", "#2f4f4f"]; // original, celeste, grafito

function cambiarColorFondo() {
    indiceColor = (indiceColor + 1) % colores.length;
    document.body.style.backgroundColor = colores[indiceColor];
}
document.getElementById("boton-color").addEventListener("click", cambiarColorFondo);

