const API_URL = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=128f779d16493d5a3d3fbcb9cc86a212&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'http://api.themoviedb.org/3/search/movie?api_key=128f779d16493d5a3d3fbcb9cc86a212&query="'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

// Get initial movies

getMovies(API_URL)   // Fetch the movies by URL

async function getMovies(url){
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}


// For submit events, we need to call a 'e.preventDefault()
// so that it does not actually submit to page.

form.addEventListener('submit', (e)=>{  // Search functionality triggered by a submit event
  e.preventDefault()

  const searchTerm = search.value

  // We will check to see if searchTerm exist ( == true)
  // and if searchTerm is not equal to empty.If the conditionals 
  // are alright, we will call getMovies passing the SEARCH_API
  // concatenated with the term we are looking for

  if(searchTerm && searchTerm !== ''){
    getMovies(SEARCH_API + searchTerm)

    search.value = ''
  }else {
    window.location.reload()
  }
})

// if we submit without having anything in there,
// we will just reload the page

//Functionality to show things into the DOM:

function showMovies(movies){
  main.innerHTML = ''
  movies.forEach(movie => {
    const {title,poster_path,vote_average,overview} = movie
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML = `
    
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    

    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>

    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>`

    main.appendChild(movieEl)

  });
}

function getClassByRate(vote){
  if(vote >= 8){
    return 'green'
  }else if(vote >= 5){
    return 'orange'
  }else {
    return 'red'
  }
}

// poster_path only includes the image name, it does not include
// the path to get the img, that´s why we concatenate it with the IMG_PATH variable
// - that contains the path that looks for the image in the movie db, + poster_path
// that is the name of the image that will be searched for.