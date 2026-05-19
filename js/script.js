"use strict"
// console.log(1)
// let wars = 10;
// console.log(wars)

// let result = confirm('Are your here?');

// alert(result);
// console.log(result);

// // const answer  = prompt("Вам есть 18 лет?", "18");
// // alert(answer); 

// const answers = [];

// answers[0] = prompt('Как Вашей имя?', '');
// answers[1] = prompt('Как Ваша фамилия?', '');
// answers[2] = prompt('Сколько Вам лет?', '');

// document.write(answers)

// console.log(typeof(answers));

const numbersfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '0');

const personalMivieDB = {
    count: numbersfFilms,
    movies: {}, 
    actors: {}, 
    gentres: [],
    privat: false
}; 

for (let  i = 0; i < 2 ; i++) {
    let film;

    let invalidAnswer = true;
    let filmLength = 0;
    
    while(invalidAnswer){
        film = prompt(`Какой фильм Вы посмотрели? Вы ввели ${filmLength} символов.`, '');
        if(film.length > 0 && film.length <= 50){
            invalidAnswer = false;
        }
        filmLength = film.length;
    }
    const rating = +prompt('Какой рейтинг?', '0');


    personalMivieDB.movies[film] = rating;
}

console.log(personalMivieDB);

(numbersfFilms > 10)? console.log(`Вы посмотрели много фильмов ${numbersfFilms}`) : console.log(`Вы посмотрели мало фильмов ${numbersfFilms}`);

switch (numbersfFilms) {
    case 10:
        console.log('мало');
        break;
    case 20:
        console.log('много')
        break;
    default:
        console.log('Понятия не имею много это или мало');
        break;

}

let num = 10;

//DO-WHILE
do {
    console.log(num);
    num++;
} while (num < 16);

let result = 100;

for(let i = 0 ; i <= result; i++ ) {
    let str = ""
    for(let j = 0 ; j <= i; j++ ){
        str += "*" 
    } 
    console.log(str);
        
}

// Метка Цикла
first: for(let i = 0 ; i <= 5; i++){
    console.log(`First level ${i}`);
    second: for(let j = 0 ; j <= 5; j++) {
        console.log(`Second level ${j}`);
        thrid: for(let k = 0 ; k <= 5; k++) {
            if( k == 2) continue first;
            console.log(`Thrid level ${k}`);
        }
    }  
}