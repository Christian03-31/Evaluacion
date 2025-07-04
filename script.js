console.log("Script cargado correctamente")

//Este scrip es para generar el formulario para ingresar el correo
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


  function validarCorreo(correo) { //Este scrip sirve para validar el formato de correo electronico
    if (correo === "") return "vacio";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo) ? "valido" : "invalido";
  }


  function mostrarResultado(estado, correo) {//Este scrip muestra las alertas y sus respectivas respuestas
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

//Este scrip es para generar un boton que permita el cambio de colores de fondo de la pagina
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

//Este scrip es para agregar campos a la pagina
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

//Este scrip es para generar una lista desplegable en el campo "Estudios"
document.addEventListener("DOMContentLoaded", function () {
  const tituloEstudios = document.getElementById("titulo-estudios");
  const contenidoEstudios = document.getElementById("contenido-estudios");

  tituloEstudios.addEventListener("click", function () {
    const visible = contenidoEstudios.style.display === "block";
    contenidoEstudios.style.display = visible ? "none" : "block";
    tituloEstudios.textContent = visible ? "Estudios ⯈" : "Estudios ⯆";
  });
});

//Este scrip se utiliza para que al hacer click en la imagen de perfil, esta cambie
document.addEventListener("DOMContentLoaded", function () {
  const foto = document.getElementById("fotoPerfil");

  const imagen1 = "Imagenes/Perfil.jpeg";
  const imagen2 = "Imagenes/Perfil2.jpeg";

  foto.addEventListener("click", function () {
    const actual = foto.getAttribute("src");
    foto.setAttribute("src", actual === imagen1 ? imagen2 : imagen1);
  });
});


