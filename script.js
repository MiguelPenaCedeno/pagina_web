// Configura aquí la fecha real del lanzamiento (año, mes -0, día, hora)
// Ejemplo: 15 marzo 2026 a las 00:00
const releaseDate = new Date(2026, 2, 15, 0, 0, 0);

function updateCountdown() {
  const now = new Date();
  const diff = releaseDate.getTime() - now.getTime();

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  if (diff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

// Scroll suave al reproductor
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

// Iniciar cuenta regresiva
updateCountdown();
setInterval(updateCountdown, 1000);

