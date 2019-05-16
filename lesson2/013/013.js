$(function () {
    $('.box .menu li').each(function (i) {
        $(this).mouseenter(function () {
            $('.box .menu li').removeClass('menu_li_hover');
            $(this).addClass('menu_li_hover');
            $('.pop ul').hide().eq(i).show();
        });
    });
});