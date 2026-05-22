"use strict"

// let result = confirm('Are your here?');

// alert(result);
// console.log(result);

// // const answer  = prompt("Вам есть 18 лет?", "18");
// // alert(answer); 


// **********************************************************
// const answers = [];

// answers[0] = prompt('Как Вашей имя?', '');
// answers[1] = prompt('Как Ваша фамилия?', '');
// answers[2] = prompt('Сколько Вам лет?', '');

// document.write(answers)

// console.log(typeof(answers));



// **********************************************************
// let num = 10;

// //DO-WHILE
// do {
//     console.log(num);
//     num++;
// } while (num < 16);

// let result = 100;

// for(let i = 0 ; i <= result; i++ ) {
//     let str = ""
//     for(let j = 0 ; j <= i; j++ ){
//         str += "*" 
//     } 
//     console.log(str);     
// }




// **********************************************************
// // Метка Цикла
// first: for(let i = 0 ; i <= 5; i++){
//     console.log(`First level ${i}`);
//     second: for(let j = 0 ; j <= 5; j++) {
//         console.log(`Second level ${j}`);
//         thrid: for(let k = 0 ; k <= 5; k++) {
//             if( k == 2) continue first;
//             console.log(`Thrid level ${k}`);
//         }
//     }  
// }




// **********************************************************
// // Работа с массивами
// const someArr = [1, 2, 13, 4, 6 , 5, 8];

// // Удаление последнего
// someArr.pop();

// // Добавить в конец
// someArr.push(10);

// console.log(someArr);

// // Перебор массива of - используется brake & continue
// for (let value of someArr) {
//     console.log(value);
// }

// // ForEach массива
// someArr.forEach(function(item, i, someArr){
//     console.log(`Внутри массива somaArr под индексом ${i} находится ${item}`);
// });

// // Из массива в строку
// console.log(someArr.join('; '))

// // Сортировка (как строки)
// console.log(someArr.sort());

// // Своя сортировка с коллбеком
// function compareNum(a,b) {
//     return a - b;
// }

// console.log(someArr.sort(compareNum));




// **********************************************************
// // Соединение объектов (+ поверхностное клонирование)
// const numbers = {
//     a: 10,
//     b: 8, 
//     c: {
//         x: 5,
//         z: 557
//     }
// };

// const add = {
//     d: 87,
//     e: 31
// }

// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);
// clone.d = 63;

// console.log(add);
// console.log(clone);

// // Поверхностная копия массива
// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();

// newArr[1] = 1;

// console.log(oldArr);
// console.log(newArr);

// // Спрэд оператор создаст и соединит массив 
// const video = ['youtube', 'rutube', 'vimeo' ],
//         blogs = ['wordpress', 'livejornal', 'blogger'],
//         interet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(interet);

// // Спрэд оператор разложит массив
// function logNums(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const numsArr = [2, 4, 1];

// logNums(...numsArr);

// // Спрэд оператор создаст объект
// const person = {
//     name: 'Petia',
//     age: 25, 
//     gender: 'men'
// }

// const person2 = {...person};
// console.log(person2)




let numbersfFilms = '';

function start() {
   
    while(numbersfFilms == '' || numbersfFilms == null || isNaN(numbersfFilms))
        numbersfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');
}

start();

const personalMivieDB = {
    count: numbersfFilms,
    movies: {}, 
    actors: {}, 
    gentres: [],
    privat: false
}; 

function rememberMyFilms() {
    for (let  i = 0; i < 2 ; i++) {
        let film;

        let invalidAnswer = true;
        let filmLength = 0;
        
        while(invalidAnswer){
            film = prompt(`Какой фильм Вы посмотрели? Вы ввели ${filmLength} символов.`, '').trim();
            if(film.length > 0 && film.length <= 50){
                invalidAnswer = false;
            }
            filmLength = film.length;
        }
        const rating = +prompt('Какой рейтинг?', '0');

        personalMivieDB.movies[film] = rating;
    }
}

rememberMyFilms();

function detectedPersonalLevel(l) {
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
}

detectedPersonalLevel();

function showMyDb(){
    if(!personalMivieDB.privat)
        console.log(personalMivieDB)
}

function writeYourGenres(){
    for(let i = 1; i < 4; i++){
        const genre = prompt(`Жанр под номером ${i}:`, '').trim();
        personalMivieDB.gentres[(i-1)] = genre;
    }
}

writeYourGenres();
showMyDb();
