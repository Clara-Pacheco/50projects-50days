const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)

generateJoke()

function generateJoke(){
  fetch('https://icanhazdadjoke.com', {
    headers: {
      'Accept': 'application/json'
    }
  }).then(resp => resp.json()).then(data => {
    jokeEl.innerHTML = data.joke
  })

}

// async function generateJoke(){
//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   }

//   const res = await fetch('https://icanhazdadjoke.com', config)
  
//   const data = await res.json()

//   jokeEl.innerHTML = data.joke  

// }