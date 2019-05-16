$(function () {
    $('.box input:text').keyup(function () {
        $(this).val($(this).val().replace(/[^(\d)]/,''));
    });
    $('.box input:submit').click(function () {
        $('.box span').text( parseInt($('.box .num1').val())+parseInt($('.box .num2').val()));
    });
});
