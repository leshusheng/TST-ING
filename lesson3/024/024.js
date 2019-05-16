$(function () {
    $('.box input:button').click(function () {
        alert(/^\d{2}$/.test($('.box .num').val())?'这是两位数':'这不是两位数');
    });
});