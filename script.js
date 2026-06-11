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

document
.getElementById("rsvpForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const form = e.target;

    const data = {
        nombre: form.nombre.value,
        asiste: form.asiste.value,
        adultos: form.adultos.value,
        menores: form.menores.value,
        comentario: form.comentario.value
    };

    try {

        await fetch(
            "https://script.google.com/macros/s/AKfycbw9MlZdKT4QiMfyIdd0pBpsuQxEZbpefmN5UkYOJ_ojA6a9nxP_l1uL0lP4IqyWJXwm/exec",
            {
                method: "POST",
                body: JSON.stringify(data)
            }
        );

        alert("¡Gracias por confirmar tu asistencia! 🤠");

        form.reset();

    } catch(error) {

        alert("Ocurrió un error. Intenta nuevamente.");

        console.error(error);

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
