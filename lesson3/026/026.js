$(function () {
    setInterval(function () {
       var odate = new Date();
        $('.getHours').text(odate.getHours().toString().replace(/^(\d)$/,'0$1'));
        $('.getMinutes').text(odate.getMinutes().toString().replace(/^(\d)$/,'0$1'));
        $('.getSeconds').text(odate.getSeconds().toString().replace(/^(\d)$/,'0$1'));
    },10);
});