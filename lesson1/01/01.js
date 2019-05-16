$(document).ready(function () {
    $('.button_menu input[name="width"]').click(function () {
       $('.button_content').css({width:'200px'});
    });
    $('.button_menu input[name="height"]').click(function () {
        $('.button_content').css({height:'200px'});
    });
    $('.button_menu input[name="color"]').click(function () {
        $('.button_content').css({background:'#ff0000'});
    });
    $('.button_menu input[name="hidden"]').click(function () {
        $('.button_content').css({display:'none'});
    });
    $('.button_menu input[name="reset"]').click(function () {
        $('.button_content').css({width: '100px',height: '100px',background: 'black',display: 'block'});
    });
});