// Burger
(function() {
    const burgerBtn = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burger-links');

    function openBurger () {
        burgerBtn.classList.toggle('is-open');
        burgerMenu.classList.toggle('is-open');
    }

    burgerBtn.addEventListener('click', openBurger);
})()