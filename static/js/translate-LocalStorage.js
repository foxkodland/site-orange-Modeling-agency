// 2 языка на сайте
// текущий язык установлен в localStorage
// json с переводом хранится в lang.js


const allLang = ['ru', 'en'];

let lang_ru = document.querySelector('#lang_ru');
let lang_en = document.querySelector('#lang_en');

lang_ru.addEventListener('click', setLangRU);
lang_en.addEventListener('click', setLangEN);


function setLangRU(){
    localStorage.setItem('lang', 'ru');
    changeLang()
}


function setLangEN(){
    localStorage.setItem('lang', 'en')
    changeLang()
}


function changeLang(){
    // первый заход пользователя
    if (localStorage.getItem('lang') == null) {
        localStorage.setItem('lang', 'en')
    }

    let lang = localStorage.getItem('lang')
    
    // изменить переключатель языков
    if (lang == 'ru') {
        lang_ru.classList.add('lang_select');
        lang_en.classList.remove('lang_select');
    }
    if (lang == 'en') {
        lang_ru.classList.remove('lang_select');
        lang_en.classList.add('lang_select');
    }


    // title
    // document.querySelector('title').innerHTML = langArr['title-index'][lang];

    // перевести все элементы
    for (let key in langArr) {
        let translate = langArr[key][lang];
        // чтобы перевести несколько элементов с одинаковыми классами
        let elements = document.querySelectorAll('.lang-'+key);
        elements.forEach((elem) => {
            if (elem && translate) {
                // перевести placeholder в form.html
                if (key.includes('placeholder')){
                    elem.placeholder = translate;
                }
                // перевести обычные элементы
                else {
                    elem.innerHTML = translate;
                }
            }
        })
    }
}

//window.onload = changeLang();

changeLang();