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
.addEventListener("submit", function(e){


e.preventDefault();

alert(
    "Próximamente conectaremos este formulario a Google Sheets."
);


});

const music = document.getElementById("music");

document.addEventListener("click", () => {

    if (music.paused) {
        music.play();
    }

}, { once: true });
