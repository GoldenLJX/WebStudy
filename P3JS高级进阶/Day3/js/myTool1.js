(function (w) {
    var money = 1000;
    function get() {
        debugger;
        money *= 10;
        console.log(money);
    }
    function spend() {
        debugger;
        money --;
        console.log(money);
    }
    w.myTool={
        get:get(),
        spend:spend()
    }
})(window);