"use strict";

const numbeOfFilms = +prompt('Сколко фильмов вы уже посмотрели','');

const personalMovieDb = {
    count: numbeOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



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
 if (personalMovieDb.count <10) {
    console.log('Мало просмотра!')
}else if ( personalMovieDb.count >=10 && personalMovieDb.count<=30){
    console.log('Вы класический зритель');
}else if (personalMovieDb.count >= 30 ) {
   console.log('Вы киноман!');
}else {
    console.log('Произошло ошибка');
}
console.log(personalMovieDb);