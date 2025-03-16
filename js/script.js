import { queryFilms } from './movies.js';

/**
 * Handling of navigation option visual appearance
 */
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