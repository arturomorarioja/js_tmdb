import { apiKey } from './info.js';

const baseUrl = 'https://api.themoviedb.org/3';

export const queryFilms = (query) => {
    const endpoint = `${baseUrl}/movie/${query}`;

    fetch(endpoint, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then((response) => { 
        if (response.ok) {
            return response.text();
        } else {
            showError(`Response error: ${response.status} - ${response.statusText}`);
        }
    })
    .then((data) => showFilms(JSON.parse(data)))
    .catch((error) => showError(error));
};

const showFilms = (films) => {
    const movieList = document.querySelector('#movie-list');
    movieList.innerHTML = '';

    const filmList = document.createDocumentFragment();
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
    movieList.append(filmList);
};

const showError = (error) => {
    const errorSection = document.querySelector('#error');
    errorSection.querySelector('p').innerText = error;
    errorSection.classList.remove('hidden');
};