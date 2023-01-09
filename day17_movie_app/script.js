const API_URL = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=128f779d16493d5a3d3fbcb9cc86a212&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'http://api.themoviedb.org/3/search/movie?api_key=128f779d16493d5a3d3fbcb9cc86a212&query="'
const form = document.getElementById('form')
const search = document.getElementById('search')


// Get initial movies

getMovies(API_URL)

async function getMovies(url){
  const res = await fetch(url)
  const data = await res.json()

  console.log(data.results)
}


// For submit events, we need to call a 'e.preventDefault()
// so that it does not actually submit to page.

form.addEventListener('submit', (e)=>{
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

