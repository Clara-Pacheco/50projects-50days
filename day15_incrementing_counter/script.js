/*So now we're going to make this function by having it
count up to whatever the data target is, and place it in
the div with class container.
So basically the inner text of counter, so we have multiple counters,
which means we need to bring them in with querySelectorAll()*/

const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerHTML = '0'

  const updateCounter = () => {
   
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerHTML

    const increment = target / 200

    if(c < target){
      counter.innerHTML = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter,1)
    }else{
      counter.innerHTML = target
    }
  }

  updateCounter()
})

/*Whatever the data target is, we need to change this to a
number, because we're going to want to do some math on it.
We could either wrap it in a number constructor, we could use Parse INT,
or we can just add a plus sign. */