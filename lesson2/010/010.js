$(function () {
   $('.pop_button input').click(function () {
       $('.background_pop,.pop').show();
   });
   $('.pop>.pop_head>input').click(function () {
       $('.background_pop,.pop').hide();
   });
});