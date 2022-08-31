$('.burger-container').click(function(){
$('.burger-container span').toggleClass('middle');
$('.burger-container span:before').toggleClass('first');
$('.burger-container span:after').toggleClass('last');
});




(function(){
    const burgerBtn = document.querySelector('.burger-container');
    const burgerList = document.querySelector('.burger__links');

    function openBurger(){
        if (burgerBtn.classList.contains('active')){
            burgerBtn.classList.remove('active');
            burgerList.classList.remove('active');
        } else {
            burgerBtn.classList.add('active');
            burgerList.classList.add('active');
        }
    };

    burgerBtn.addEventListener('click', openBurger);
})();