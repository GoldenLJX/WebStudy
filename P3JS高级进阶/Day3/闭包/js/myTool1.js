(function (w) {
    var money = 1000;
    function get() {
        money *= 10;
        console.log(money);
    }
    function spend() {
        money --;
        console.log(money);
    }
    w.myTool={
        'get':get(),
        'spend':spend()
    }
})(window);