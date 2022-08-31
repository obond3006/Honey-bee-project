$('.burger-container').click(function(){
$('.burger-container span').toggleClass('middle');
$('.burger-container span:before').toggleClass('first');
$('.burger-container span:after').toggleClass('last');
});




(function(){
    const burgerBtn = document.querySelector('.burger-container');
    const burgerList = document.querySelector('.burger__links');

    function openBurger(){
        if (burgerBtn.classList.contains('burger-active')){
            burgerBtn.classList.remove('burger-active');
            burgerList.classList.remove('burger-active');
        } else {
            burgerBtn.classList.add('burger-active');
            burgerList.classList.add('burger-active');
        }
    };

    burgerBtn.addEventListener('click', openBurger);
})();