const container = document.querySelector('.container')
const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
console.log(container)
console.log(openBtn)
console.log(closeBtn)

openBtn.addEventListener('click', ()=>{
  container.classList.add('show-nav')
  
})

closeBtn.addEventListener('click', ()=>{
  container.classList.remove('show-nav')
  
})