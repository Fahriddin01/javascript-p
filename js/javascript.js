"use strict";

const numbeOfFilms = +prompt('Сколко фильмов вы уже посмотрели','');

const personalMovieDb = {
    count: numbeOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt ('Один из последных просмотренных филмов',''),
      b = prompt ('На сколько оцените его?',''),
      c = prompt ('Один из последных просмотренных филмов',''),
      d = prompt ('На сколько оцените его?','');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);