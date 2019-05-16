// $(function () {
//     var num ="";//显示变量
//     var syst ='';//缓存变量
//     var symbol ="";//缓存运算符
//     var ttts=null;//缓存运算公式
//         // 数字输入------规则还不完善
//     $('.box .input_menu .num').click(function () {
//         num = num+$(this).text();
//         $('.content').text(num);
//     });
//     // 重置按钮
//     $('.box .input_menu .reset').click(function () {
//         num ="";
//         syst ='';
//         symbol ='';
//         $('.content').text('0');
//     });
//     // 运算
//     $('.box .input_menu .symbol').click(function () {
//         syst = eval(syst+symbol+num);
//         symbol =$(this).text();
//         num = '';
//         $('.content').text(syst+symbol);
//     });
//     $('.box .input_menu .equal').click(function () {
//         syst = eval(syst+symbol+num);
//         symbol ='';
//         num = '';
//         $('.content').text(syst);
//     });
// });
$(function () {
    var num ="";//显示变量
    var syst ='';//缓存变量
    var symbol ="";//缓存运算符
    var ttts=null;//缓存运算公式
    // 数字输入------规则还不完善
    $('.box .input_menu .num').click(function () {
        num = num+$(this).text();
        $('.content').text(num.replace(/^\.|\.$/,''));
    });
    // 重置按钮
    $('.box .input_menu .reset').click(function () {
        num ="";
        syst ='';
        symbol ='';
        $('.content').text('0');
    });
    // 运算
    $('.box .input_menu .symbol').click(function () {
        syst = eval(syst+symbol+num);
        symbol =$(this).text();
        num = '';
        $('.content').text(syst+symbol);
    });
    $('.box .input_menu .equal').click(function () {
        syst = eval(syst+symbol+num);
        symbol ='';
        num = '';
        $('.content').text(syst);
    });
});