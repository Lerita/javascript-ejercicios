const serieImg = document.getElementById('serie-img');
const title = document.getElementById('serie-title');
const overview = document.getElementById('serie-overview');
const search = document.getElementById('search');
const seasons = document.getElementById('seasons');
const episodes = document.getElementById('episodes');
const episodeModel = document.getElementsByClassName('episode')[0]

let timeout;

search.oninput = () => {
    clearTimeout(timeout);

    timeout = setTimeout(function () {
        if (search.value)
            updateSerie(search.value);
    }, 300);
}

const updateSerie = serie => {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=a4a6cc6e048882e02904d281bcfe629d&query=${serie}`)
        .then(response => response.json())
        .then(data => {
            title.innerHTML = data.results[0].name;
            overview.innerHTML = data.results[0].overview;
            serieImg.src = `https://image.tmdb.org/t/p/w1280${data.results[0].backdrop_path}`;
            console.log(data);
            seasonsNumber(data.results[0].id);
        })
}

updateSerie('stranger');

const seasonsNumber = id => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=a4a6cc6e048882e02904d281bcfe629d`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            seasons.innerHTML = '';

            for (let i = 1; i <=  data.number_of_seasons; i++) {           
                const option = document.createElement('option');
                option.innerText = `Temporada ${i}`;
                option.value = i;
                option.selected = true;
                seasons.appendChild(option)
            };
            seasons.onchange = () => {
                updateEpisodes(id, seasons.value);
            };
            updateEpisodes(id, data.number_of_seasons);
        })
}


const updateEpisodes = (id, seasonNumber) => {
    fetch(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?api_key=a4a6cc6e048882e02904d281bcfe629d`)
        .then(response => response.json())
        .then(data => {
            episodes.innerHTML = '';

            for (const episode of data.episodes) {
                const newEpisode = episodeModel.cloneNode(true);

                newEpisode.children[0].src = `https://image.tmdb.org/t/p/w400${episode.still_path}`;
                newEpisode.children[1].innerHTML = `EP ${episode.episode_number} ${episode.name}`;
                newEpisode.children[2].innerHTML = `${episode.overview}`;

                episodes.appendChild(newEpisode);
            }
        })
}