$(function () {
    var i = 0;
    var set = null;
    set = setInterval(fun1,1000);
    $('.box .menu li').hover(function () {
        clearInterval(set);
        $('.menu li').css({opacity:'0.8',background:'#f8bf6b'});
        $(this).css({opacity:'1',background:'#ff6600'});
        $('.box .list li').css('opacity','0').eq($(this).index()).css('opacity','1');
    },function () {
        clearInterval(set);
        set = setInterval(fun1,1000);
        // (set === setInterval(fun1,1000))?clearInterval(set):set = setInterval(fun1,1000);
        $('.menu li').css({opacity:'0.8',background:'#f8bf6b'});
        // $('.box .list li').css('opacity','0');
    });
    function fun1() {
        $('.box .list li').css('opacity','0').eq(i).css('opacity','1');
        $('.menu li').css({opacity:'0.8',background:'#f8bf6b'}).eq(i).css({opacity:'1',background:'#ff6600'});
        i++;
        (i>4)?i=0:i;
    }
});