$(function () {
    // 全选/全不选
    $('.box .menu input').click(function () {
        var or = $(this).prop('checked');
        $('.box ul li input').prop('checked',or);
        (or==true) ? $('.or').text('全选'):$('.or').text('全不选');
        name();
    });
    // 反选
    $('.box .no_checkbox').click(function () {
        $('.box li input').not(':first').each(function () {
            var or = $(this).prop('checked');
            (or==true) ? $(this).prop('checked',false):$(this).prop('checked',true);
        });
        name();
    });
    // 根据选中个数更新全选框
    function name(){
        var dd = true;
        $('.box li input').not(':first').each(function () {
            dd = $(this).prop('checked')&&dd;
            (dd==true) ? $('.box .menu input').prop('checked',true):$('.box .menu input').prop('checked',false);
        });
    }
    $('.box input').change(function () {
        var dd = true;
        $('.box li input').not(':first').each(function () {
            dd = $(this).prop('checked')&&dd;
            (dd==true) ? $('.box .menu input').prop('checked',true):$('.box .menu input').prop('checked',false);
        });
    });
});