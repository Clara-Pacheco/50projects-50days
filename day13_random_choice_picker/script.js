const tagsElements = document.querySelector('#tags')
const textarea = document.querySelector('textarea')

// Automatically focus on the textarea, as soon as
// we open the page

textarea.focus()

textarea.addEventListener('keyup', (e) =>{
  
  createTags(e.target.value)

  if(e.key === 'Enter') {
    setTimeout(() =>{
      e.target.value = ''
    },10)

    randomSelect()
  }
})

function createTags(input){
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag =>tag.trim())

  tagsElements.innerHTML =''

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsElements.appendChild(tagEl)
  })

}

function randomSelect(){
  const times = 30

  //So this up here is is shifting between one to another
  //, highlighting and unhighlighting 
  // after a certain amount of time.

  const interval = setInterval(()=>{
    const randomTag = pickRandomTag()

      highlighTag(randomTag)

      setTimeout(()=>{

      unhighlighTag(randomTag)

    },100)

  },100)

  //And then this takes care of stopping it and just
  // picking a random tag to land on and highlight.

  setTimeout(()=>{
    clearInterval(interval)
    setTimeout(()=>{
      const randomTag = pickRandomTag()
      highlighTag(randomTag)
    },100)
  }, times * 100)
}

function pickRandomTag(){
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random()* tags.length)]
}

function highlighTag(tag) {
  tag.classList.add('highlight')
}

function unhighlighTag(tag) {
  tag.classList.remove('highlight')
}

/* Now we want an event listener on the text area, so add
event listener and we want to listen for a keyup.

We have key down and key up.

We're listening.

When, when you press down and then you let go, that's going to
fire this off.

And when that happens, it's pass in our event parameter here.

When that happens, we're going to call a function called
create tags and we want to pass the object 'e' dot target 
dot value, which is going to be whatever we type in.

So if we create a function called createTags, that receives an
input as parameter that corresponds to the value of the object event
target, meaning, what we have typed. (e.target.value)

Now, the way we're going to do this is we want to take
whatever we type in, and then we put a comma.

We want to split at that comma and create an array of whatever
is on either side of these comments.

So let's say const tags and let's set that to input, which is a string.
We want to split it by the comma and turn it into an array.

Now I don't want to be able to have space.

So what we'll do is add on to this dot filter and filter is also
array method that allows you to return certain things
based on a conditional.

So we'll say for each tag, let's say tag dot trim, which will just trim off any white space.

If that is not equal to an empty string, then we'll return that.

And then we just want a map which will just manipulate the array.

So for each tag we want to return an array with the tag, but we want to trim.

So we're just saying it can't be an empty string.(with filter())

Also, we're going to trim any white space.(with map())

So now if I save that and I do one space, you can see that it's
not actually added the spaces in there.

And I could put comma to space and the space is not added in there.

And if I just do like comma and then another comma, it doesn't
add another it doesn't do anything because of our filter.

*/