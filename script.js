// Scroll suave al bloque de escucha
const scrollBtn = document.getElementById("scrollToListen");
const listenSection = document.getElementById("escucha");

if (scrollBtn && listenSection) {
  scrollBtn.addEventListener("click", () => {
    listenSection.scrollIntoView({ behavior: "smooth" });
  });
}

// Manejo simple del formulario (solo front, sin backend)
const form = document.getElementById("subscribeForm");
const messageEl = document.getElementById("formMessage");

if (form && messageEl) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const privacy = formData.get("privacy");

    messageEl.classList.remove("error", "success");

    if (!name || !email || !privacy) {
      messageEl.textContent =
        "Revisa que hayas completado tu nombre, email y aceptado la política de privacidad.";
      messageEl.classList.add("error");
      return;
    }

    // Aquí podrías hacer un fetch a tu backend o servicio de email.
    // De momento solo mostramos un mensaje de éxito.
    messageEl.textContent =
      "¡Listo! Te añadimos a la lista de novedades de Kidchen.";
    messageEl.classList.add("success");
    form.reset();
  });
}

// Año en el footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
