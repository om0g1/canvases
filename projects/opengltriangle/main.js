const canvas = document.getElementById("canvas");
const pen = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawGrid(magnification){
    pen.clearRect(0, 0, canvas.width, canvas.height);

    const cellSize = 100 / magnification;

    pen.beginPath();
    for(let x = 0; x < canvas.width; x += cellSize){
        pen.moveTo(x + panX, 0 + panY);
        pen.lineTo(x + panX, canvas.height + panY);
    }
    for(let y = 0; y < canvas.height; y += cellSize){
        pen.moveTo(0 + panX, y + panY);
        pen.lineTo(canvas.width + panX, y + panY);
    }
    pen.stroke();
}

let magnification = 1;

canvas.onwheel = e => {
    const delta = Math.sign(e.deltaY);
    console.log(e.deltaY);
    magnification += delta * 0.1;
    drawGrid(magnification);
}

let panX = 0;
let panY = 0;
let isPanning = false;

let panStartX = 0;
let panStartY = 0;

canvas.onmousedown = e => {
    isPanning = true;
    panStartX = e.clientX;
    panStartY = e.clientY;
}

canvas.onmousemove = e => {
    if (isPanning){
        const deltaX = e.clientX - panStartX;
        const deltaY = e.clientY - panStartY;
        panStartX = e.clientX;
        panStartY = e.clientY;
        panX += deltaX;
        panY += deltaY;
        drawGrid(magnification);
    }
}

canvas.onmouseup = e => {
    isPanning = false;
}

window.onresize = e => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawGrid(magnification);
}

drawGrid(1);