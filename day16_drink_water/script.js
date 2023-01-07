const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup,idx)=> {
  cup.addEventListener('click', ()=> highlighCups(idx))
})

function highlighCups(idx){ // the index of the cup we have clicked on
  if(smallCups[idx].classList.contains('full') && 
  !smallCups[idx + 1].classList.contains('full')){
    idx--   // take the current idx and decrement by 1.
  }
  
  smallCups.forEach((cup,idx2) =>{ // the index of each cup of this loop
    if(idx2 <= idx) {
      cup.classList.add('full')
    }else{
      cup.classList.remove('full')
    }
  })

  updateBigCup()
}

function updateBigCup(){
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

 if(fullCups === 0){
  percentage.style.visibility = 'hidden'
  percentage.style.height = 0
 }else {
  percentage.style.visibility = 'visible'
  percentage.style.height = `${fullCups / totalCups * 330}px`
  percentage.innerHTML = `${fullCups / totalCups * 100}%`
 }

 if(fullCups === totalCups){
  remained.style.visibility = 'hidden'
  remained.style.height = 0
 }else{
  remained.style.visibility = 'visible'
  liters.innerHTML = `${2 - (250*fullCups / 1000)}L`
 }
}