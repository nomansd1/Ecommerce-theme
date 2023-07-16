const toggleButton = document.querySelector('#menuBtn');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', function () {
    menu.classList.toggle('show__menu');
});