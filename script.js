// ===============================
// ELEMENTS
// ===============================

const intro = document.getElementById("intro");
const giftSection = document.getElementById("giftSection");
const mainContent = document.getElementById("mainContent");

const startBtn = document.getElementById("startBtn");
const giftBox = document.getElementById("giftBox");

const typing = document.getElementById("typing");

const slides = document.querySelectorAll(".slide");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

const hearts = document.getElementById("hearts");
const balloons = document.getElementById("balloons");



// ===============================
// START BUTTON
// ===============================

startBtn.addEventListener("click",()=>{

    intro.style.display="none";

    giftSection.style.display="flex";

});



// ===============================
// GIFT OPEN
// ===============================

giftBox.addEventListener("click",()=>{

    giftBox.classList.add("open");

    setTimeout(()=>{

        giftSection.style.display="none";

        mainContent.style.display="block";

        startTyping();

        startSlider();

    },1800);

});



// ===============================
// TYPEWRITER
// ===============================

const message=

`Dear Bhaiya ❤️

Happy 21st Birthday!

You have always supported me and inspired me in every step of life.

May God bless you with happiness, success, good health and countless beautiful memories.

Thank you for always standing beside me.

Love You Bhaiya ❤️

- Your Little Brother
Gaurav`;

let index=0;

function startTyping(){

    typing.innerHTML="";

    index=0;

    type();

}

function type(){

    if(index<message.length){

        typing.innerHTML+=message.charAt(index);

        index++;

        setTimeout(type,40);

    }

}



// ===============================
// IMAGE SLIDER
// ===============================

// ===============================
// PREMIUM AUTO IMAGE SLIDER
// ===============================

let current = 0;

function showSlide(index){

    slides.forEach(img=>{

        img.classList.remove("active");

    });


    slides[index].classList.add("active");

}


function nextSlide(){

    current++;

    if(current >= slides.length){

        current = 0;

    }

    showSlide(current);

}


// Automatic slide every 3 seconds

setInterval(()=>{

    nextSlide();

},3000);



next.addEventListener("click",()=>{

    nextSlide();

});


prev.addEventListener("click",()=>{

    current--;

    if(current < 0){

        current = slides.length-1;

    }

    showSlide(current);

});

// ===============================
// MUSIC
// ===============================

let playing=false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();

        playing=true;

        musicBtn.innerHTML="⏸ Pause Music";

    }

    else{

        music.pause();

        playing=false;

        musicBtn.innerHTML="🎵 Play Music";

    }

});
// ===============================
// FLOATING HEARTS
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 400);



// ===============================
// FLOATING BALLOONS
// ===============================

const balloonColors = [
    "#ff4d8d",
    "#ff9800",
    "#00bcd4",
    "#8bc34a",
    "#ffd54f",
    "#9c27b0"
];

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.background =
        balloonColors[Math.floor(Math.random() * balloonColors.length)];

    balloon.style.animationDuration =
        (8 + Math.random() * 5) + "s";

    balloons.appendChild(balloon);

    setTimeout(() => {

        balloon.remove();

    }, 14000);

}

setInterval(createBalloon, 1200);



// ===============================
// SMALL SPARKLE EFFECT
// ===============================

function sparkle() {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";

    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.top = Math.random() * window.innerHeight + "px";

    star.style.fontSize = (12 + Math.random() * 18) + "px";

    star.style.pointerEvents = "none";

    star.style.opacity = "1";

    star.style.transition = "all 1.5s ease";

    document.body.appendChild(star);

    setTimeout(() => {

        star.style.opacity = "0";

        star.style.transform = "scale(2)";

    }, 50);

    setTimeout(() => {

        star.remove();

    }, 1600);

}

setInterval(sparkle, 700);



// ===============================
// AUTO SCROLL TO MAIN CONTENT
// ===============================

function scrollToMain() {

    mainContent.scrollIntoView({

        behavior: "smooth"

    });

}



// Gift open hone ke baad auto scroll

giftBox.addEventListener("click",()=>{

    giftBox.classList.add("open");


    // 🎵 Start Music After Gift Open

    music.play()
    .then(()=>{

        playing=true;

        musicBtn.innerHTML="⏸ Pause Music";

    })
    .catch(()=>{

        console.log("Autoplay blocked by browser");

    });



    setTimeout(()=>{

        giftSection.style.display="none";

        mainContent.style.display="block";

        startTyping();

        startSlider();

    },1800);

});


// ===============================
// GREETING POPUP
// ===============================

setTimeout(() => {

    console.log("🎉 Happy Birthday Saurav Suman 🎂");

}, 1000);
// ===============================
// FIREWORKS
// ===============================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;

        this.dx = (Math.random() - 0.5) * 8;
        this.dy = (Math.random() - 0.5) * 8;

        this.life = 100;
        this.color = color;
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        this.dy += 0.05; // gravity
        this.life--;
    }

    draw() {
        ctx.globalAlpha = this.life / 100;

        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function launchFirework() {

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.5;

    const colors = [
        "#ff4d8d",
        "#ffd700",
        "#00e5ff",
        "#ff9800",
        "#7CFC00",
        "#ffffff"
    ];

    const color =
        colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < 80; i++) {
        particles.push(new Particle(x, y, color));
    }
}

function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {

        particles[i].update();
        particles[i].draw();

        if (particles[i].life <= 0) {
            particles.splice(i, 1);
        }

    }

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

setInterval(launchFirework, 1800);



// ===============================
// FINAL GREETING
// ===============================

window.addEventListener("load", () => {

    console.log("🎉 Website Loaded Successfully");

});
// ===============================
// PHOTO PREVIEW
// ===============================

const photos=document.querySelectorAll(".memory");

const preview=document.getElementById("preview");

const previewImg=document.getElementById("previewImg");

const close=document.getElementById("close");

photos.forEach(photo=>{

photo.onclick=()=>{

preview.style.display="flex";

previewImg.src=photo.src;

}

});

close.onclick=()=>{

preview.style.display="none";

}

preview.onclick=(e)=>{

if(e.target===preview){

preview.style.display="none";

}

}



// ===============================
// END
// ===============================