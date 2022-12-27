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

  // Getting all the active circles + updating bar progress

  const actives = document.querySelectorAll('.active')
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

  // 1- A unidade tem que ser em %, porque é a unidade que encontra-se 
  // no CSS

  // 2- Divide a qtd de classes ativas pela qtd de círculos, e retira
  // 1, para obtermos uma porcentagem menor e a barra não ultrapassar
  // o limite do container onde se encontra.


    if(currentActive === 1){
      prev.disabled = true
    }else if(currentActive === circles.length) {
      next.disabled = true
    }else {
      prev.disabled = false
      next.disabled = false
    }

}