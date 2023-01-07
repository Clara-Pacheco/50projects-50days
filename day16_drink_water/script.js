const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

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
}