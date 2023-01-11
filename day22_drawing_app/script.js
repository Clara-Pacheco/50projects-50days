const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 20
let color = 'black'
let x
let y

function drawCircle(x,y){
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color // setting a color on the circle
  ctx.fill() // fill the circle - create the circle
}

function drawLine(x1,y1,x2,y2){
  ctx.beginPath()
  ctx.moveTo(x1,y1)  // moves to an specific position
  ctx.lineTo(x2,y2)  // draws the line
  ctx.strokeStyle = color  // apply a color to the line
  ctx.lineWidth = size //line's size
  ctx.stroke() // draw the line based in the properties above
}

