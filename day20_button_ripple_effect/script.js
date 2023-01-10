const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
  button.addEventListener('click',(e)=>{
    const x = e.clientX // position clicked in the 'x' axis inside of the button in relation to the body - it varies
    const y = e.clientY // position clicked in the 'y' axis inside of the button in relation to the body - it varies

    console.log(x,y)

    const buttonTop = e.target.offsetTop // position to the button itself in relation to the top of the body -it´s fixed
    const buttonLeft = e.target.offsetLeft // position to the button itself in relation to the left of the body -it´s fixed

    console.log(buttonTop,buttonLeft)

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    console.log(xInside,yInside)

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    button.appendChild(circle)

    setTimeout(() => {
      circle.remove()
    }, 500);
  })
})

