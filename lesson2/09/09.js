$(function () {
    $('.box>label>input').keyup(function () {
        $(this).val($(this).val().replace(/[^(\d)|(,)]/,''));
    });
    $('.box button').click(function () {
        $('.answer').html(function () {
            var $arr = $('.box>label>input').val().split(',');
            var sum = 0;
            for( var i in $arr){
                sum += parseInt($arr[i]);
            }
            return sum;
        });
    });
});