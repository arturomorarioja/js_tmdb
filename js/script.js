import { apiKey } from './info.js';

const baseUrl = 'https://api.themoviedb.org';

document.querySelectorAll('nav button').forEach((menuOption) => {
    menuOption.addEventListener('click', function() {
        queryFilms(this.id);

        const selectedMenuOption = document.querySelector('nav button.selected');
        if (selectedMenuOption !== null) {
            selectedMenuOption.classList.remove('selected');
        }
        this.classList.add('selected');
    });
});

const queryFilms = (query) => {
    const endpoint = `${baseUrl}/3/movie/${query}`;

    fetch(endpoint, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then((response) => { 
        if (response.ok) {
            return response.text();
        } else {
            console.error('Response error', `${response.status} - ${response.statusText}`);
        }
    })
    .then((data) => showFilms(JSON.parse(data)))
    .catch((error) => console.error('Fetch error', error));
};

const showFilms = (films) => {
    const main = document.querySelector('main');
    main.innerHTML = '';

    const filmList = document.createElement('section');
    films.results.forEach((film) => {
        const filmCard = document.querySelector('#filmCard').content.cloneNode(true);

        filmCard.querySelector('h2').innerText = film.title;
        filmCard.querySelector('img').setAttribute('src', `https://image.tmdb.org/t/p/w154/${film.poster_path}`);
        filmCard.querySelector('img').setAttribute('alt', `Poster for ${film.title}`);
        filmCard.querySelector('.film-overview').innerText = film.overview;
        filmCard.querySelector('.original-title').innerText = film.original_title;
        filmCard.querySelector('.date').innerText = film.release_date;

        filmList.append(filmCard);
    });
    main.append(filmList);
};