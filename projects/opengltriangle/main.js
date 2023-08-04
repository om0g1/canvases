const canvas = document.getElementById("canvas");
const pen = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawTriangle(){
    const vertices = [
        { x: canvas.width /2 , y: canvas.height * 0.1 },  // Top vertex
        { x: canvas.width * 0.3, y: canvas.height * 0.9 },  // Bottom-left vertex
        { x: canvas.width * 0.7, y: canvas.height * 0.9 } // Bottom-right vertex
      ];
  
      // Create a gradient
      const gradient = pen.createLinearGradient(vertices[0].x, vertices[0].y, vertices[2].x, vertices[2].y);
      gradient.addColorStop(0, "red");
      gradient.addColorStop(0.5, "green");
      gradient.addColorStop(1, "blue");
  
      // Begin drawing the path
      pen.beginPath();
      pen.moveTo(vertices[0].x, vertices[0].y);  // Move to the top vertex
      pen.lineTo(vertices[1].x, vertices[1].y);  // Draw a line to the bottom-left vertex
      pen.lineTo(vertices[2].x, vertices[2].y);  // Draw a line to the bottom-right vertex
      pen.closePath();  // Close the path
  
      // Fill the triangle with the gradient
      pen.fillStyle = gradient;
      pen.fill();
};

drawTriangle();