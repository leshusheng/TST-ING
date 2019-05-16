$('.box ul li img').each(function () {
    $(this).attr('src','imgs/download.jpg');
});
$(function () {
    $('.box ul li img').not(':first').each(function (i) {
        $(this).attr('src','imgs/'+(i+1)+'.jpg');
    });
    $('.box ul li img').not(':first').mouseenter(function () {
        var $add = $(this).attr('src');
        // document.write($add);
        $('.box>ul>.big>img').attr('src',$add);
    });
});