const labels = document.querySelectorAll('.form-control label')

console.log(labels)

labels.forEach(label => {
  label.innerHTML = label.innerText.split('').map((letter,index) => `<span>${letter}</span>`).join('')
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


/*So basically we have the inner text.

So we're looping through the label, we have the inner text, e-mail and password.

The first one was splitting it into an array, which will put each letter in its own item in the array.

Then we're mapping it to create an array of the letter with a span around it.

Then we're turning it back into a string.*/ 