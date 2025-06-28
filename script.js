console.log("Script cargado correctamente")


document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const campoMensaje = document.getElementById("mensaje");
    const respuesta = document.getElementById("respuesta");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const mensaje = campoMensaje.value.trim();
        const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mensaje);

        if (mensaje === "") {
            alert("Por favor, escribe un correo electrónico.");
            respuesta.textContent = "";
        } else if (!correoValido) {
            alert("El formato del correo electrónico no es válido.");
            respuesta.textContent = "";
        } else {
            alert(`Gracias por enviar su correo: "${mensaje}"`);
            respuesta.textContent = "";
        }
    });
});
