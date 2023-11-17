//  добавить в body возможность фуллскрин просмотра
let cross_ = document.createElement('div');
cross_.innerHTML = '<div class="fullscreen">' +
'<div class="cross">' +
    '<span class="cross__span1"></span>' +
    '<span class="cross__span2"></span>' +
'</div>' +
'<div class="fullscreen_back"></div>'  +
'<div class="left"><</div>' +
'<img src="../static/images/models/women/Franciele/IMG_0466.jpg" alt="">' +
'<div class="right">></div>' +
'</div>'
document.body.append(cross_);


// просто открытие фулскрин при клике на фото
let photos = document.querySelectorAll ('.photos img')
photos.forEach((photo) => {
    photo.addEventListener('click', () => {

        // показать экран просмотра
        document.querySelector ('.fullscreen').style.display = 'flex';
        // подставить нужную картинку
        img = document.querySelector ('.fullscreen img');
        img.src = photo.src;

    })
})





// кнопка вправо
document.querySelector ('.right').addEventListener('click', () => {
    let fullscreen_img = document.querySelector ('.fullscreen img');
    let photos = document.querySelectorAll ('.photos img');
    for (let i=0; i < photos.length; i++) {
        if (i == photos.length - 1) {
            return
        }

        if (photos[i].src == fullscreen_img.src) {
            fullscreen_img.src = photos[i+1].src;
            return;
        }
    }
})


// кнопка влево
document.querySelector ('.left').addEventListener('click', () => {
    
    document.querySelector ('.left').style.backgroundColor = '';

    let fullscreen_img = document.querySelector ('.fullscreen img');
    let photos = document.querySelectorAll ('.photos img');
    for (let i = photos.length - 1; i >=0; i--) {
        if (i == 0) {
            return
        }

        if (photos[i].src == fullscreen_img.src) {
            fullscreen_img.src = photos[i-1].src;
            return;
        }
    }
})

// при клике на экран просмотра, он закрывался
document.querySelector ('.fullscreen_back').addEventListener('click', () => {
    document.querySelector ('.fullscreen').style.display = 'none';
})

document.querySelector ('.cross').addEventListener('click', () => {
    document.querySelector ('.fullscreen').style.display = 'none';
})