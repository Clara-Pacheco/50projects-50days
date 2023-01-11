const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

for(const empty of empties){
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}


function dragStart(){
  this.className += ' hold'
  setTimeout(()=>{
    this.className = 'invisible'
  },0)
}

function dragEnd(){
  this.className = 'fill'
}

/* In the dragover and dragenter events handler for the target container,
 we call event.preventDefault(), which enables it to receive drop
events. */

function dragOver(e){
  e.preventDefault()
 
}

function dragEnter(e){
  e.preventDefault()
  this.className += ' hovered'
 
}

function dragLeave(){
  this.className = 'empty'
  
}

function dragDrop(){
  this.className = 'empty'
  this.append(fill)
}