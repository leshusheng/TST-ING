$(function () {
   $('.box input').click(function () {
       $(this).css({background:'red',}).val('取消');
       var num =100;
       var set = setInterval(function () {
            num--;
           (num==0)?clearInterval(set):num;
            $('.getMinutes').text(parseInt(num/60).toString().replace(/^(\d)$/,'0$1'));
            $('.getSeconds').text((num%60).toString().replace(/^(\d)$/,'0$1'));
       },1000);
   });
});