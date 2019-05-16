$(function () {
    function sum() {
        var cc = 0;
        for(var i in arguments){
            cc += arguments[i];
        }
        return cc;
    }
    alert(sum(1,2,3,4,5,6,7,8,9,10));
});