const faqs = document.querySelectorAll('.faq')
const buttons = document.querySelectorAll('.faq-toggle')

buttons.forEach((button,index) =>{
  button.addEventListener('click',()=>{
    faqs[index].classList.toggle('active')
  })
})
