const labels = document.querySelectorAll('.form-control label')

console.log(labels)

labels.forEach(label => {
  label.innerHTML = label.innerText.split('').map((letter,index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`).join('')
  console.log(label.innerHTML)
})

// label.innerHTML.split('') this will split the string
// into substrings and will return an array.
// From that(an array with substrings),we will use the method map
// that will go through each element of the array, and return a different array.
// We want to turn the array in a array of spams with delays for each letter. 
// After mapping the old array into a new array, where each index contains
// a spam with each letter of the splitted string, we will use the method
// .join to put them all together again.


/*1- So basically we have the inner text.

So we're looping through the label, we have the inner text, e-mail and password.

The first one was splitting it into an array, which will put each letter in its own item in the array.

Then we're mapping it to create an array of the letter with a span around it.

Then we're turning it back into a string.*/ 


/*2- Now we don't want the whole thing to go up at once.
I mean, you could leave it like that if you want, but I want to have that wave effect.
So that's where the transition delay comes in, because we already have the transition.
Transitioning the movement of the label going up and the transform translate where it moves up.
So in our script here, let's add onto the span in inline style and we'll set that to, let's say transition
dash delay.
Now when we set this, we don't want to set it to a fixed value because it'll do the same thing.(We want
each letter to move in a different time, so that we get the wavy effect.)
It'll just wait and it'll flicker them all up at the same time.
So what I'm going to do here is use the index,which just starts at zero, then 1 to 3 and so on, and
I'm going to multiply it by 50.
So the first one will be zero, second 50, third one will be 100, then 150 and so on.
ATTENTION TO ADD THE MILLISECONDS.
So after the transition delay number, we need to have ms - for milliseconds */