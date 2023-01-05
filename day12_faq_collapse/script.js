const faqs = document.querySelectorAll('.faq')
const buttons = document.querySelectorAll('.faq-toggle')

buttons.forEach((button,index) =>{
  button.addEventListener('click',()=>{
    faqs[index].classList.toggle('active')
  })
})

/* We could access each faq through the parentNode as well:

buttons.forEach((button,index) =>{
  button.addEventListener('click',()=>{
    button.parentNode.classList.toggle('active')
  })
})

*/