"use strict";


let numbeOfFilms;

function start () {
    numbeOfFilms = +prompt('Сколко фильмов вы уже посмотрели','');
    while (numbeOfFilms == ''|| numbeOfFilms== null || numbeOfFilms == isNaN(numbeOfFilms)) {
        numbeOfFilms = +prompt('Сколко фильмов вы уже посмотрели','');
    }
}

 start ();
const personalMovieDb = {
    count: numbeOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms () {
    for (let i=0; i<2; i++) {
        const a = prompt ('Один из последных просмотренных филмов',''),
        b = prompt ('На сколько оцените его?','');
        if (a !=''&& b != '' && a !=null && b !=null && a.length < 50) {
            personalMovieDb.movies[a]=b;
            console.log('done');
        }else {
         console.log('Заполните пожалуйста поля!');
            i--;
        }
    }      
}
rememberMyFilms ();

function detectPersonalLevel () {
    if (personalMovieDb.count <10) {
        console.log('Мало просмотра!')
    }else if ( personalMovieDb.count >=10 && personalMovieDb.count<=30){
        console.log('Вы класический зритель');
    }else if (personalMovieDb.count >= 30 ) {
       console.log('Вы киноман!');
    }else {
        console.log('Произошло ошибка');
    }
}
 
detectPersonalLevel ();

function showMyDb (hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }   

}

showMyDb (personalMovieDb.private);

function writeGenres () {
    for (let i=1; i<=3; i++) {
        personalMovieDb.genres[i-1] =  prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeGenres ();