'use strict';

import { apiKey } from './info.js';

const baseUrl = 'https://api.themoviedb.org';

document.querySelectorAll('nav a').forEach((menuOption) => {
    menuOption.addEventListener('click', function() {
        queryFilms(this.id);
    });
});

const queryFilms = (query) => {
    const endpoint = `${baseUrl}/3/movie/${query}`;

    fetch(endpoint, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then((response) => response.text())
    .then((data) => showFilms(JSON.parse(data)))
    .catch((error) => console.log('error', error));
};

const showFilms = (films) => {
    const main = document.querySelector('main');
    main.innerHTML = '';

    const filmList = document.createElement('section');
    films.results.forEach((film) => {
        const filmCard = document.createElement('article');
        filmCard.classList.add('film');
        filmCard.innerHTML = `
            <header>
                <h2>${film.title}</h2>
            </header>
            <div class="film-content">
                <img src="https://image.tmdb.org/t/p/w154/${film.poster_path}">
                <div>
                    <p>${film.overview}</p>
                    <p class="film-info original-title">${film.original_title}</p>
                    <p class="film-info date">${film.release_date}</p>
                </div>
            </div>
        `;
        filmList.append(filmCard);
    });
    main.append(filmList);
};