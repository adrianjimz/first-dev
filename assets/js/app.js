$(document).ready(function(){

    $('#mostrar-componente1').click(function (evento) {
        evento.preventDefault();

        var component = $('#componente1');

        if (component.hasClass('open')){
            component.removeClass('open');
        } else {
            component.addClass('open');
        }
    });

    $('.active-switch').click(function (evento) {
        evento.preventDefault();

        var item = $(this).closest('.item');

        if (item.hasClass('active')){
            item.removeClass('active');
        } else {
            item.addClass('active');
        }
    });

});