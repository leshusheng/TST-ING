// $(document).ready(function () {
//     $('label').hover(function () {
//        $('.tips').show();
//     },function () {
//        $('.tips').hide();
//     });
// });

$(document).ready(function () {
    $('label').hover(function () {
        $('.tips').toggle();
    });
});