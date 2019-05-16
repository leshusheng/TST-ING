$(function () {
    $('.box>ul>li').each(function (i) {
        $(this).find('img').attr('src','images/'+(i+1)+'.jpg');
        $(this).hover(function () {
            $(this).css('opacity','1');
        },function () {
            $(this).css('opacity','0.3');
        });
    });
});