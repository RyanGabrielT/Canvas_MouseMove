const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

let mouse = {x: 50, y: 50};

canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX - canvas.getBoundingClientRect().left;
    mouse.y = e.clientY - canvas.getBoundingClientRect().top;
});

function draw() {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.restore();
    ctx.closePath();
};

setInterval(draw, 16);