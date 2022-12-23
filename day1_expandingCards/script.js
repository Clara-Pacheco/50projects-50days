let panels = document.querySelectorAll('.panel')

function removeActiveClass(){
  panels.forEach((panel)=>{
   panel.classList.remove('active')
  })
}

for(let panel of panels){
  panel.addEventListener('click',function(){
    removeActiveClass()
    panel.classList.add('active')
  })
 
  
}