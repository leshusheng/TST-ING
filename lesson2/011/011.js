$(function () {
    $('.box input:submit').click(function () {
        var $attribute = $('.attribute').val();
        var $value =$('.value').val();
        $('.show').css($attribute,$value);
    });
    $('.box input:reset').click(function () {
        $('.show').removeAttr('style');
    });
});