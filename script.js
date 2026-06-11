const eventDate = new Date("2026-07-25T15:00:00");

function updateCountdown() {


const now = new Date();

const diff = eventDate - now;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
);

const minutes = Math.floor(
    (diff % (1000 * 60 * 60))
    / (1000 * 60)
);

const seconds = Math.floor(
    (diff % (1000 * 60))
    / 1000
);

document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;

}

setInterval(updateCountdown, 1000);

updateCountdown();

let isSubmitting = false;

document
.getElementById("rsvpForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const form = e.target;
    const btn = form.querySelector("button");

    // 🔒 bloquear doble click
    btn.disabled = true;
    btn.textContent = "Enviando...";

    const data = {
        nombre: form.nombre.value,
        asiste: form.asiste.value,
        adultos: form.adultos.value,
        menores: form.menores.value,
        comentario: form.comentario.value
    };

    try {

        await fetch("https://script.google.com/macros/s/AKfycbz85H0gFGFcHWUsURvea6TuFb8DKtHJGz3Rm2eZrcZf0wc8UV7fr41W0nm7AKZ110nfYA/exec", {
            method: "POST",
            body: JSON.stringify(data)
        });

        alert("¡Gracias por confirmar tu asistencia! 🤠");

        form.reset();

    } catch (error) {

        alert("Ocurrió un error. Intenta nuevamente.");
        console.error(error);

    } finally {

        isSubmitting = false; // 🔓 desbloqueo lógico
        
        // 🔓 desbloquear SIEMPRE
        btn.disabled = false;
        btn.textContent = "Confirmar asistencia 🌵";
    }

});



const music = document.getElementById("music");

document
.getElementById("enterBtn")
.addEventListener("click", () => {

    music.play();

    document
    .getElementById("welcomeScreen")
    .style.display = "none";

});
