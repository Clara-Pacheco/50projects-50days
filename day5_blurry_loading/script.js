/*
So now we want to work on actually having this percentage change.
So we want it to go from 0 to 100 and then the background image
is going to start blurry and then it's going to go to clear as
this loads.*/

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

/*
Now the way we want to run this function is in an interval
and I want it to run every 30 milliseconds.
So let's create a variable here called int.
So we'll say let int and set this to set interval.
And the function we want to run is the blurring function.
And let's say every 30 milliseconds, this is not 30 seconds, this is 30 milliseconds, which is very
quick. */

let int = setInterval(blurring,30)

/* If the load value is greater than 99, then we want to stop
that interval.
And the way we do that is with the clear interval function.
We pass in INT Because that represents this set interval. */

function blurring(){
  load++
  if(load > 99) {
    clearInterval(int)
  }
  loadText.innerHTML = `${load}%`
  loadText.style.opacity= scale(load,0,100,1,0)
  bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}

/* The opacity value isn't going to be the load value because
 that goes from 0 to 100, opacity goes from 0 to 1, right?
Or actually in our case, we want it to start full, you know,
fully opaque.
So one and we want it to go to zero.
So we have to map a range of numbers.
There's basically 0 to 100 to going from 1 to 0
in the same amount of time. */

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

//map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}