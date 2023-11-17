
// работа burger меню
document.addEventListener("DOMContentLoaded", function() {
    let burger = document.querySelector('.burger_menu')
    let nav = document.querySelector('.menu')
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        nav.classList.toggle('active');

        // index
        let name = document.querySelector('.name');
        if (name){
            name.classList.toggle('hidden');
        }
    })
})


