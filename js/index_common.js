// $(document).ready(function () {
//     $('.menu dd').hide();
//     $('.menu dt').click(function () {
//         var $this_dd = $(this).nextUntil('dt');//选中dd范围
//         $this_dd.slideToggle();  //选中dd隐藏/显示
//         $('.menu dd').not($this_dd).hide(); //选中以外的dd隐藏
//         // $('.menu dt').css({background:'#99cc00'});
//         $(this).css({background:'#0099ff'});
//         //设置dd是隐藏属性的元素变色。不完善，点击两次后无法变色
//         $('.menu dt').next('dd:hidden').prev().css({background:'#99cc00'});
//     });
// });

$(document).ready(function () {
    $('.menu dd').hide();
    $('.menu dt').click(function () {
        var $that = $(this).nextUntil('dt');
        if($that.first('dd').is(':hidden')){
            $(this).css({background:'#0099ff'});
            $that.show();
            $('.menu dd').not($that).hide().prev('dt').css({background:'#99cc00'});
        }else {
            $('.menu dd').hide();
            $('.menu dt').css({background:'#99cc00'});
        }
    });
    $('a').each(function (i) {
        var lesson_number = $(this).parent().prevAll('dt').attr('class'); //lesson数=找到前面dt的clss名字
        $(this).attr('href',lesson_number+'/0'+(i+1)+'/0'+(i+1)+'.html');
    });
});