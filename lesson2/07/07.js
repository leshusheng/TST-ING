$(function () {
    $('.box input').click(function () {
        $('.li_menu').show();
    });
    $('.li_menu li:last-child').click(function () {
        $('.li_menu').hide();
    });
});