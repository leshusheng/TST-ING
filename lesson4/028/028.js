$(function () {
    var setTime = null;
    function nnt() {
        $('.box>ul>li>ul').hide();
    }
    // $('.box>ul>li').mouseenter(function () {
    //     $('.box>ul>li>ul').hide();
    //     $(this).addClass('pop').find('ul').show();
    //     clearTimeout(setTime);
    //     setTime = setTimeout(nnt,1000);
    // });
    // $('.box>ul>li').mouseleave(function () {
    //     $(this).removeClass('pop');
    // });
    $('.box>ul>li').hover(function () {
        $('.box>ul>li>ul').hide();
        $(this).addClass('pop').find('ul').show();
        clearTimeout(setTime);
    },function () {
        clearTimeout(setTime);
        setTime = setTimeout(nnt,1000);
        $(this).removeClass('pop');
    });
    $('.box>ul>li>ul').hover(function () {
        clearTimeout(setTime);
    },function () {
        clearTimeout(setTime);
        setTime = setTimeout(nnt,1000);
    });
});