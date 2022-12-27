const progress = document.querySelector('.progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

console.log(circles)

let currentActive = 1


// For next button

next.addEventListener('click', () =>{
  currentActive++
  if(currentActive > circles.length){
    currentActive = circles.length
  }

  update()
})

// For previous button

prev.addEventListener('click', () =>{
  currentActive--
  if(currentActive < 1){
    currentActive = 1
  }

  update()
})

function update(){
  circles.forEach((circle, index) => {
      if(index < currentActive){
        circle.classList.add('active')
      }else {
        circle.classList.remove('active')
      }
  })
}