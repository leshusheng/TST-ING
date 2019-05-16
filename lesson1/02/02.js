$(document).ready(function () {
   $('.red').click(function () {
       $('body').css({background:'#ffdddd'});
       $('.red').addClass('back_red');
       $('.green').removeClass('back_green');
       $('.black').removeClass('back_black');
       $('.menu li').css({background:'red'});
   });
    $('.green').click(function () {
        $('body').css({background:'#a3c5a8'});
        $('.red').removeClass('back_red');
        $('.green').addClass('back_green');
        $('.black').removeClass('back_black');
        $('.menu li').css({background:'green'});
    });
    $('.black').click(function () {
        $('body').css({background:'#cccccc'});
        $('.red').removeClass('back_red');
        $('.green').removeClass('back_green');
        $('.black').addClass('back_black');
        $('.menu li').css({background:'black'});
    });
});