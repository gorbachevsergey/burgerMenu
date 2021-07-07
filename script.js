(function() {
    const burger = document.querySelector('.btnShowNav');
    const burgerList = document.querySelector('.menuBurgerList');
    burger.addEventListener('click',() => {
        burger.classList.toggle('btnShowNavActive');
        burgerList.classList.toggle('menuBurgerListActive');
    })
}());