const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 20
let isPressed = false
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (e) => {
  isPressed = true

  // to get the position 'x' and 'y' where the mouse is:

  x = e.offsetX
  y = e.offsetY

})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false

  // to get the position 'x' and 'y' where the mouse is:

  x = undefined
  y = undefined

})

canvas.addEventListener('mousemove', (e) => {
 if(isPressed) {
  const x2 = e.offsetX
  const y2 = e.offsetY

  drawCircle(x2,y2)
  drawLine(x,y,x2,y2)

  x = x2
  y = y2
 }

 /*We pass them into drawCircle and it draws a circle.
Now, the problem we have is if I go really fast, you can see that
there's spaces in between the circles.
And we don't want that.
We want just a straight line no matter what.
So in addition to Draw Circle, we're going to draw a line.
We'll just copy that down and say draw line.
Now, this is going to be where we draw the line, but we need we need to
add the move to positions as well.
So this move to is the first two arguments passed in which is going to be X and Y.
Now, if we check it out now, we have this weird effect going on.
And that's because after we do this, we want to set the X value to whatever
the current position is and the Y value to whatever Y is.
So what's happening now is the line width is not as wide as the circle
because I actually forgot down here I set line width to the size.
So line width and radius of a circle are two different things.
So if I multiply this by two, it should end up working and being the same.
So now it's just a straight line.
The width of the, the radius of the circle or the size of the circle
is the same now as the line width of the line.
So they're both being drawn. */

})

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
  ctx.lineWidth = size * 2 //line's size
  ctx.stroke() // draw the line based in the properties above
}

