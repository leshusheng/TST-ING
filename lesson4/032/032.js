$(function () {
    $('.box input[name=get]').click(function () {
        alert("width:"+$('.box').css('width')+'\n'
            +'height:'+$('.box').css('height')+'\n'
            +'background:'+$('.box').css('backgroundColor')
        );
    });
    $('.box input[name=set]').click(function () {
        $('.box').addClass('box2');
        $('.box input').css('backgroundColor','#0084ff');
    });
    $('.box input[name=default]').click(function () {
        $('.box input').css('backgroundColor','#ff6600');
        $('.box').removeClass('box2');
    });
});