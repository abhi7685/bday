function showMessage() {
    document.getElementById("message").classList.remove("hidden");
}

// Confetti Effect
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * confettiCanvas.height,
        r: Math.random() * 5 + 1,
        d: Math.random() * 10,
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
    }
    updateConfetti();
}

function updateConfetti() {
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.y += Math.random() * 2;
        if (p.y > confettiCanvas.height) {
            p.y = 0;
            p.x = Math.random() * confettiCanvas.width;
        }
    }
}

function animateConfetti() {
    drawConfetti();
    requestAnimationFrame(animateConfetti);
}

animateConfetti();
