function myTool() {
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
    return {
        get:get,
        spend:spend
    }
}