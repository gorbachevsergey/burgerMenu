$('.btnShowNav').click(function() {
    if ($('.titleNav').css('display') != 'none'){
        $('.titleNav').css('display', 'none');
        $('.menuBurgerList').css('display','flex');
        $('.menuBurger').css('flex-direction','column');
        $('.menuBurgerListCompany').css('padding',0)
        $('.menuBurgerListCompany').css('justify-content','center')
    } else{
        $('.titleNav').css('display', 'flex')
        $('.menuBurgerList').css('display','none');
        $('.menuBurger').css('flex-direction','row');
    }
})