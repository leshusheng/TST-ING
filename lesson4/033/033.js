$(function () {
   $('.box .form1 input').focus(function () {
       $(this).css({background:'url("imgs/input.png") 0 -31px'});
   }).blur(function () {
       $(this).css({background:'url("imgs/input.png") 0 0'});
   });
});