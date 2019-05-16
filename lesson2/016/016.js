$(function () {
    $('.box ul li img').each(function (i) {
        $(this).attr('src','images/'+(i+1)+'.jpg');
    });
    $('.box ul li').mouseenter(function () {
        $(this).find('img').show().mouseleave(function () {
            $(this).hide();
        });
    });
});