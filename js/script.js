import { queryFilms } from './movies.js';

/**
 * Handling of navigation option visual appearance
 */
document.querySelectorAll('nav button').forEach((menuOption) => {
    menuOption.addEventListener('click', (e) => {
        queryFilms(e.target.id);

        const selectedMenuOption = document.querySelector('nav button.selected');
        if (selectedMenuOption !== null) {
            selectedMenuOption.classList.remove('selected');
        }
        e.target.classList.add('selected');
    });
});