$(function () {
    var i = 1;
   setInterval(function () {
       $('.box p').text(i);
       i++;
   },1000);
});