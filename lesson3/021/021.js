$(function () {
    var i = 0;
   $('.box input').click(function () {
       i += 1;
       $(this).val(i);
   });
});