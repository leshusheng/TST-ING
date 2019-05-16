$(function () {
    var aMsg = [
        "1分 很不满意|差得太离谱，与卖家描述的严重不符，非常不满",
        "2分 不满意|部分有破损，与卖家描述的不符，不满意",
        "3分 一般|质量一般，没有卖家描述的那么好",
        "4分 满意|质量不错，与卖家描述的基本一致，还是挺满意的",
        "5分 非常满意|质量非常好，与卖家描述的完全一致，非常满意"
    ];
   $('.box .pop li em').each(function (i) {
       $(this).text(aMsg[i]);
   });
   $('.box .pop li').hover(function () {
       var i = $(this).index();
       $('.box .pop li').slice(0,i+1).css({background:"url('img/star.png') 0 -28px no-repeat"});
       $(this).find('em').toggle();
   },function () {
        $('.box .pop li').css({background:"url('img/star.png') 0 0 no-repeat"});
       $('.box .pop li em').hide();
    });
});
