// Seleccionar secciones y breadcrumb
const secciones = document.querySelectorAll("main section");
const breadcrumb = document.querySelector(".breadcrumb");
const breadcrumbActual = document.getElementById("breadcrumb-actual");

// Mostrar sección
function mostrarSeccion(id) {
  // Ocultar todas
  secciones.forEach(seccion => {
    seccion.style.display = "none";
  });

  // Mostrar la activa
  const seccionActiva = document.getElementById(id);
  seccionActiva.style.display = "block";

  // Actualizar breadcrumb
  breadcrumbActual.textContent =
    seccionActiva.querySelector("h2").textContent;

  // Mostrar u ocultar breadcrumb
  if (id === "inicio") {
    breadcrumb.style.display = "none";
  } else {
    breadcrumb.style.display = "block";
  }
}

// Navegación
document.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    e.preventDefault();
    const id = e.target.getAttribute("href").replace("#", "");
    mostrarSeccion(id);
  }
});

// Inicio
mostrarSeccion("inicio");
