// 2 языка на сайте
// текущий язык установлен в конце url ввиде hash #ru или #en
// json с переводом хранится в lang.js



const allLang = ['ru', 'en'];

let lang_ru = document.querySelector('#lang_ru');
let lang_en = document.querySelector('#lang_en');

lang_ru.addEventListener('click', setLangRU);
lang_en.addEventListener('click', setLangEN);

function setLangRU(){
    // let lang = lang_ru.textContent.toLowerCase();
    let lang = 'ru';
    changeURL(lang);
}

function setLangEN(){
    let lang = 'en';
    changeURL(lang);
}

// добавит язык в url
function changeURL(lang){
    location.href = window.location.pathname+ '#' + lang;
    location.reload()
}

function changeLang(){
    let hash = window.location.hash;
    hash = hash.substring(1);

    // если ошибочный язык в URL -> en
    if (!allLang.includes(hash)) {
        changeURL('en')
    }
    
    // изменить переключатель языков
    if (hash == 'ru') {
        lang_ru.classList.add('lang_select');
        lang_en.classList.remove('lang_select');
    }
    if (hash == 'en') {
        lang_ru.classList.remove('lang_select');
        lang_en.classList.add('lang_select');
    }


    // title
    // document.querySelector('title').innerHTML = langArr['title-index'][hash];

    // перевести все элементы
    for (let key in langArr) {
        let translate = langArr[key][hash];
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

    


    // поменять все ссылки
    let allLink = document.querySelectorAll('header a');
    allLink.forEach((a) =>{
        a.href = a.href + '#' + hash
    })

    allLink = document.querySelectorAll('.models a')
    allLink.forEach((a) =>{
        a.href = a.href + '#' + hash
    })

    allLink = document.querySelectorAll('footer a')
    allLink.forEach((a) =>{
        a.href = a.href + '#' + hash
    })
}

//window.onload = changeLang();
changeLang();