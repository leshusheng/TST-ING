$(function () {
    $('.box input:text').keyup(function () {
        $(this).val($(this).val().replace(/[^(\d)]/,''));
    });
    $('.box input:button').click(function () {
        $('.box span').text(parseInt($('.num1').val())>parseInt($('.num2').val())?parseInt($('.num1').val()):parseInt($('.num2').val()));
   });
});