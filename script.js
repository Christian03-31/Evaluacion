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

document.addEventListener("DOMContentLoaded", function () {
    let indiceColor = 0;
    const colores = ["whitesmoke", "#add8e6", "#2f4f4f"];

    function cambiarColorFondo() {
        indiceColor = (indiceColor + 1) % colores.length;
        document.body.style.backgroundColor = colores[indiceColor];
    }

    const boton = document.getElementById("boton-color");
    if (boton) {
        boton.addEventListener("click", cambiarColorFondo);
    } else {
        console.warn("No se encontró el botón con id 'boton-color'");
    }
});

// Funcionalidad para agregar habilidades técnicas
document.addEventListener("DOMContentLoaded", function () {
    const habilidades = [];
    const formHabilidad = document.getElementById("formHabilidad");
    const listaHabilidades = document.getElementById("listaHabilidades");

    if (formHabilidad) {
        formHabilidad.addEventListener("submit", function (e) {
            e.preventDefault();

            const nombre = document.getElementById("nombreHabilidad").value.trim();
            const nivel = document.getElementById("nivelHabilidad").value.trim();

            if (nombre === "" || nivel === "") {
                alert("Por favor, completa ambos campos.");
                return;
            }

            const habilidad = { nombre, nivel };
            habilidades.push(habilidad);
            formHabilidad.reset();
            mostrarHabilidades();
        });

        function mostrarHabilidades() {
            listaHabilidades.innerHTML = "";
            habilidades.forEach((hab, index) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <strong>${hab.nombre}</strong> - ${hab.nivel}
                    <button onclick="eliminarHabilidad(${index})">Eliminar</button>
                `;
                listaHabilidades.appendChild(div);
            });
        }

        window.eliminarHabilidad = function (index) {
            habilidades.splice(index, 1);
            mostrarHabilidades();
        };
    }
});
