// /* Задания на урок:



// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// 5) Добавить нумерацию выведенных фильмов */

// 'use strict';

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// const del = document.querySelectorAll('.promo__adv img');

// del.forEach(function (i) {
//     i.remove();
// });


// let drama =  document.querySelector('.promo__genre')
// let qq = document.querySelector('.promo__bg')


// drama.innerHTML = 'драма';  

// qq.style.backgroundImage = `url("img/bg.jpg")`

// movieDB.movies.sort();
// const Films = document.querySelectorAll(".promo__interactive-list li");

// Films.forEach((item, i) => {
//    item.innerHTML = (i + 1) + ". " + movieDB.movies [i]
// });

// let elements = document.querySelectorAll('.promo__interactive-list li');

// elements.forEach((element) => {
//   element.addEventListener('click', function() {
//     element.remove();
//   });
// });


import { movies } from './db.js'



let cont = document.querySelector('.promo__interactive-list')
let promo__bg = document.querySelector('.promo__bg')
let janr = document.querySelector('.promo__menu-list')


reloadd(movies, janr)

function reloadd(arr, place) {
    janr.innerHTML = ''
    for (let item of arr) {
        // let genres = ['All', ...new Set(movies.map(item => item.Genre))]
        let ll = document.createElement('li')
        let aa = document.createElement('a')

        aa.innerHTML = item.Genre

        place.append(ll)
        ll.append(aa)

        // ll.classList.add()   
        aa.classList.add('promo__menu-item')
    }
}

  const genres = ['All', ...new Set(movies.map(item => item.Genre))]


reload(movies, cont)

function reload(arr, place) {
    cont.innerHTML = ''

    for (let item of arr) {
        let li = document.createElement('li')
        let div = document.createElement('div')
        li.innerHTML = item.Title
        li.classList.add('promo__interactive-item')
        div.classList.add('delete')
        
        place.append(li)
        li.append(div)
        
        // var currentIndex = 0;
        li.onclick = () => {
            promo__bg.style.background = `url(${item.Poster})`
            // ww.innerHTML = item.Genre
            // currentIndex = (currentIndex + 1) % item.Genre.length;
            // ww.innerHTML = item.Genre[currentIndex];
        }
        // li.onclick = () => {
        //     changeFilm(item)
        // }

        let pr = document.querySelector('.promo__genre')
        pr.addEventListener("click", function() {
            var elemente = document.getElementById("promo__genre");
            currentIndex = (currentIndex + 1) % textArray.length;   
            elemente.innerHTML = textArray[currentIndex];
          });
        var currentIndex = 0;

        // function changeText() {
        //   var element = document.getElementById(".promo__genre");
        //   currentIndex = (currentIndex + 1) % item.Genre.length;
        //   element.innerHTML = item.Genre[currentIndex];
        // }
    
        // document.getElementById(".promo__genre").onclick = changeText


        // function changeText() {
        // //   var element = document.getElementById("changeText");
        //   currentIndex = (currentIndex + 1) % item.Genre.length;
        //   ww.innerHTML = item.Genre[currentIndex];
        // }


        // let genres = ['All', ...new Set(movies.map(item => item.Genre))]
        // let ll = document.createElement('li')
        // let aa = document.createElement('a')

        // aa.innerHTML = item.Genre

        // place.append(ll)
        // ll.append(aa)

        // // ll.classList.add()   
        // aa.classList.add('promo__menu-item')


    }


    // let promo__genre = document.querySelector('.promo__genre')
    // function changeFilm(props) {
    //     // promo__bg.style.backgroundImage = `url("${props.Poster}")`
    //     promo__genre.innerHTML = props.Genre}
}
// let promo__interactive = document.querySelector('.promo__interactive-list')
let inp_search = document.querySelector('.ss')

inp_search.onkeyup = (event) => {
    const keyword = event.target.value.toLowerCase().trim()

    const filtered = movies.filter(element => {
        let Titler = element.Title.toLowerCase().trim()
        if (Titler.includes(keyword)) {
            return element
        }
    })
    show_results(filtered)
    // console.log(filtered);
}
function show_results(arr) {
    cont.innerHTML = ''

    for (let item of arr) {
        let li = document.createElement('li')
        li.innerHTML = item.Title
        cont.append(li)
        li.classList.add('promo__interactive-item')
    }
}