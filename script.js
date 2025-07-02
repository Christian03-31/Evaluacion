console.log("Script cargado correctamente")


document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");
  const campoMensaje = document.getElementById("mensaje");
  const respuesta = document.getElementById("respuesta");
  const iconos = document.getElementById("iconos");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const mensaje = campoMensaje.value.trim();
    const resultado = validarCorreo(mensaje);

    mostrarResultado(resultado, mensaje);
    if (resultado === "valido") {
      campoMensaje.value = "";
    }
  });

  /**
   * Valida si el correo es válido, vacío o incorrecto.
   * @param {string} correo
   * @returns {"vacio" | "invalido" | "valido"}
   */
  function validarCorreo(correo) {
    if (correo === "") return "vacio";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo) ? "valido" : "invalido";
  }

  /**
   * Muestra el mensaje e ícono correspondiente según el resultado.
   * @param {"vacio" | "invalido" | "valido"} estado
   * @param {string} correo
   */
  function mostrarResultado(estado, correo) {
    switch (estado) {
      case "vacio":
        alert("Por favor, escribe un correo electrónico. 😠👎");
        respuesta.textContent = "";
        iconos.textContent = "😠👎";
        break;
      case "invalido":
        alert("El formato del correo electrónico no es válido. 😢");
        respuesta.textContent = "";
        iconos.textContent = "😢";
        break;
      case "valido":
        alert(`Gracias por enviar su correo: "${correo}"`);
        respuesta.textContent = `Correo recibido: ${correo} 😊👍`;
        iconos.textContent = "🎉😄🎊";
        break;
    }
  }
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
