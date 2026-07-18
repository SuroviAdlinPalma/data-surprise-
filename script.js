function openQuestion() {
    document.getElementById('firstScreen').style.display = 'none';
    document.getElementById('questionScreen').style.display = 'block';
}

function sayYes() {
    document.getElementById('questionScreen').style.display = 'none';
    document.getElementById('successScreen').style.display = 'block';

    // Simple celebration effect
    alert('Yay! Bless said YES! 💖');
}

// Make the NO button move away
const noBtn = document.getElementById('noBtn');

if (noBtn) {
    noBtn.addEventListener('mouseover', function () {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        noBtn.style.position = 'relative';
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
}
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤";
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
