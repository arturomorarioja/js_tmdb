# The Movie Database

## Purpose
Sample application to demonstrate the use of the Fetch API against a public API.

It connects to The Movie Database API (https://developer.themoviedb.org/docs) and consumes the following endpoints:
- GET https://api.themoviedb.org/3/movie/now_playing
- GET https://api.themoviedb.org/3/movie/popular
- GET https://api.themoviedb.org/3/movie/top_rated
- GET https://api.themoviedb.org/3/movie/upcoming

## Installation

Create a file `js/info.js` with the following content:
```JS
export const apiKey = '<YOUR_API_KEY_FOR_THE_MOVIE_DATABASE>';
```

## Tools
JavaScript / CSS3 / HTML5

## Author
Arturo Mora-Rioja