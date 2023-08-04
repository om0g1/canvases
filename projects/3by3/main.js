const canvas = document.getElementById("canvas");
const pen = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawGrid() {
    // pen.fillStyle = "white";
    // pen.fillRect(0, 0, canvas.width, canvas.height);
    pen.clearRect(0, 0, canvas.width, canvas.height);

    pen.beginPath();
    for(let i = canvas.width/3; i < canvas.width; i+= canvas.width/3) {
        pen.moveTo(i, 0);
        pen.lineTo(i, canvas.height);
    }
    for(let i = canvas.height/3; i < canvas.height; i+=canvas.height/3) {
        pen.moveTo(0, i);
        pen.lineTo(canvas.width, i);
    }
    pen.stroke();
}

drawGrid();