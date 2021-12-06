"use strict";



const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDb.count = +prompt('Сколко фильмов вы уже посмотрели','');
        while (personalMovieDb.count == ''|| personalMovieDb.count== null || personalMovieDb.count == isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt('Сколко фильмов вы уже посмотрели','');
        }
    },
    rememberMyFilms:function () {
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
    },
    detectPersonalLevel:function () {
        if (personalMovieDb.count <10) {
            console.log('Мало просмотра!')
        }else if ( personalMovieDb.count >=10 && personalMovieDb.count<=30){
            console.log('Вы класический зритель');
        }else if (personalMovieDb.count >= 30 ) {
           console.log('Вы киноман!');
        }else {
            console.log('Произошло ошибка');
        }
    },
    showMyDb:function (hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
        }   
    
    },
    toggleVisibleMDb:function () {
        if (personalMovieDb.private) {
            personalMovieDb = false;
        }else {
            personalMovieDb.private = true;
        }
    },
    writeGenres:function () {
        for (let i=1; i<=3; i++) {
            let genre =  prompt(`Ваш любимый жанр под номером ${i}`);
            if ( genre === '' || genre == null) {
                console.log('Вы не ввыли вообще');
                i--;
            }else {
                personalMovieDb.genres[i-1] = genre;
            }
        }
       personalMovieDb.genres.forEach ((item ,i) => {
           console.log(`Любимый жанр ${i+1} - это ${item} `)
       });
    }
};

