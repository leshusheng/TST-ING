$(function () {
    var arr1 = $('.box .arr1').text().split(',');
    var arr2 = $('.box .arr2').text().split(',');
    var arr2concat = arr2;
    var arr3 = $('.box .arr3').text().split(',');
    var arr3concat = arr3.concat();
    // 第一部分
    $('.box input').eq(0).click(function () {
        arr1.shift();
        $('.box .arr1').text(arr1);
    });
    $('.box input').eq(1).click(function () {
        arr1.pop();
        $('.box .arr1').text(arr1);
    });
    // 第二部分
    $('.box input').eq(2).click(function () {
        arr2concat = arr2concat.concat(arr2);
        $('.box .arr2').text(arr2concat);
    });
    $('.box input').eq(3).click(function () {
        arr2concat = arr2.concat();
        $('.box .arr2').text(arr2);
    });
    // 第三部分
    $('.box input').eq(4).click(function () {
        arr3concat = arr3.concat();
        $('.box .arr3').text(arr3concat);
    });
    $('.box input').eq(5).click(function () {
        arr3concat.splice(0,3);
        $('.box .arr3').text(arr3concat);
    });
    $('.box input').eq(6).click(function () {
        arr3concat.splice(1,2);
        $('.box .arr3').text(arr3concat);
    });
    $('.box input').eq(7).click(function () {
        arr3concat.splice(1,2,'orange', 'purple');
        $('.box .arr3').text(arr3concat);
    });
    $('.box input').eq(8).click(function () {
        // var reverse =arr3concat.splice(1,2);
        // reverse = reverse.reverse();
        arr3concat.splice(1,2,arr3concat[2],arr3concat[1]);
        $('.box .arr3').text(arr3concat);
    });
});