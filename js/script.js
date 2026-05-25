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




// // **********************************************************
// // Lesson 35

// // Установка прототипа в динамике
// const solder = {
//     helth: 450, 
//     armor: 100,
//     hello: function() {
//         console.log('Say HELLO');
//     }
// };

// const john = {
//     helth: 325
// }

// Object.setPrototypeOf(john, solder);

// john.hello()

// // Установка прототипа на этапе создания
// const mike = Object.create(solder);
// mike.hello();




// **********************************************************
// Lesson 35 - динамическая типизация
// В строку
console.log(typeof(5 + ''));

// В число
console.log(typeof(Number('3')));
console.log(typeof(+'5'));
console.log(typeof(parseInt('15px', 10)));

// Булево значение
// false - 0, '', null, undefined, NaN
let switcher = null;
if(switcher){
    console.log('working');
}

switcher = 1;
if(switcher){
    console.log('working...');
}

console.log(typeof(Boolean('4')));
console.log(!!('444'));








const personalMivieDB = {
    count: 0,
    movies: {}, 
    actors: {}, 
    genres: [],
    privat: false,
    start: function() {
        let numbersfFilms = '';
        while(numbersfFilms == '' || numbersfFilms == null || isNaN(numbersfFilms)){
            numbersfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');
        }
        personalMivieDB.count = numbersfFilms;
        
    },
    rememberMyFilms: function() {
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

        this.movies[film] = rating;
        }
    },
    detectedPersonalLevel: function() {
        (this.count > 10)? console.log(`Вы посмотрели много фильмов ${this.count}`) : console.log(`Вы посмотрели мало фильмов ${this.count}`);

        switch (this.count) {
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
    },
    showMyDb: () => {
        if(!personalMivieDB.privat)
            console.log(personalMivieDB)
    },
    writeYourGenres: () => {
        for(let i = 1; i < 4; i++){
            let genre = '';
            while(genre == null || genre.length < 1 ) {
                genre = prompt(`Жанр под номером ${i}:`, '').trim();
            }
            
            personalMivieDB.genres[(i-1)] = genre;
        }

        personalMivieDB.genres.forEach((val, index) => console.log(`Жанр под номером ${index + 1} - ${val}`));
    },
    toggleVisibleMyDB: function() {
        personalMivieDB.privat = !personalMivieDB.private;
    } 

}; 

personalMivieDB.start();
personalMivieDB.rememberMyFilms();

personalMivieDB.detectedPersonalLevel();

personalMivieDB.writeYourGenres();
personalMivieDB.showMyDb();
