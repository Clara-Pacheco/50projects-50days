const toggle =  document.getElementById('toggle')
const nav =  document.getElementById('nav')

toggle.addEventListener('click',()=>{
  console.log('oi')
  nav.classList.toggle('active')
})