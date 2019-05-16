$(function () {
    var icc = true;
    var i = 0;
    var set = setInterval(fun1,1000);
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
    });
    function fun1() {
        $('.box .list li').css('opacity','0').eq(i).css('opacity','1');
        $('.menu li').css({opacity:'0.8',background:'#f8bf6b'}).eq(i).css({opacity:'1',background:'#ff6600'});
        (icc)?num():num2();
        function num() {
            i++;
            (i==4)?icc=false:icc;
        }
        function num2() {
            i--;
            (i==0)?icc=true:icc;
        }
    }
});