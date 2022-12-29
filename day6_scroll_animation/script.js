//First we capture all the boxes:

const boxes =document.querySelectorAll('.box')
console.log(boxes)

// Second, we fire off an event of scroll on the window

window.addEventListener('scroll',() =>{
  const triggerBottom = (window.innerHeight)/5 * 4
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    if(boxTop < triggerBottom){
      box.classList.add('show')
    }else{
      box.classList.remove('show')
    }
  })
})