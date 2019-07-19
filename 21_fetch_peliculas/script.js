const background = document.getElementById('background');
const poster = document.getElementById('poster');
const title = document.getElementById('title');
const overview = document.getElementById('overview');
const genres = document.getElementById('genres');
const cast = document.getElementById('cast');
const search = document.getElementById('search');

let timer;

search.oninput = () => {
    clearTimeout(timer);
    timer = setTimeout(function () {
        if (search.value)
            updateMovie(search.value);
    }, 300);
}


const updateMovie = movie => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=a4a6cc6e048882e02904d281bcfe629d&query=${movie}`)
        .then(response => response.json())
        .then(data => {
            title.innerHTML = data.results[0].title;
            overview.innerHTML = data.results[0].overview;
            background.src = `https://image.tmdb.org/t/p/w1280/${data.results[0].backdrop_path}`;
            poster.src = `https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}`;
            console.log(data);
            updateInfo(data.results[0].id);
        });
};

updateMovie("Avengers: Endgame");

const updateInfo = movieId => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a4a6cc6e048882e02904d281bcfe629d&append_to_response=credits`)
        .then(response => response.json())
        .then(data => {
            updateGenres(data.genres);
            updateCast(data.credits.cast);
        })
}

const updateGenres = genresList => {
    genres.innerText = genresList.map(genre => genre.name).join(', ');
}

const updateCast = castList => {
    cast.innerText = castList.slice(0, 10).map(cast => cast.name).join(', ');
}