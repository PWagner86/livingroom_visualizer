/*
Dieser Code sorgt dafür, dass immer der neuste
Artikel an oberster Stelle erscheint.
*/ 

const newsWrapper = document.querySelector(".news-wrapper");
let articles = document.querySelectorAll(".article");
let allArticles = [];
console.log(articles);

articles.forEach(article => {
    allArticles.push(article);
})

allArticles.reverse();

allArticles.forEach(article => {
    newsWrapper.appendChild(article);
})

// ----------------------------------------------------------------------->
/*
Dieser Code stellt das Datum in die richtige Reihenfolge.
*/

let news = document.querySelector(".news-wrapper");
let newsDate = document.querySelectorAll(".news-date-wrapper h6");
let year = [];
let month = [];
let day = [];
// console.log(newsDate);
newsDate.forEach(date => {
    let dateInfo = date.innerHTML
    dateInfo = dateInfo.split('');
    // console.log(dateInfo);
    year = dateInfo.splice(0, 4);
    month = dateInfo.splice(0, 4);
    day = dateInfo.splice(0, 2);
    // console.log(year);
    // console.log(month);
    // console.log(day);

    dateInfo = day.concat(month, year).join('');
    // console.log(dateInfo);
    date.innerHTML = dateInfo;
})