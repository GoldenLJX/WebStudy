/**
 * 获取滚动的头部距离和左边距离
 * scroll().top scroll().left
 * @returns {*}
 */
function scroll() {
    if(window.pageYOffset !== null){
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    }else if(document.compatMode === "CSS1Compat"){ // W3C
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    }

    return {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
    }
}


function $(id) {
    return typeof id === "string" ? document.getElementById(id) : null;
}

/**
 * 获取屏幕的宽度和高度
 * @returns {*}
 */
function client() {
    if(window.innerWidth){ // ie9+ 最新的浏览器
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }else if(document.compatMode === "CSS1Compat"){ // W3C
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }

    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
}


/**
 *  匀速动画函数
 * @param {object}obj
 * @param {number}target
 * @param {number}speed
 */
function constant(obj, target, speed) {
    // 1. 清除定时器
    clearInterval(obj.timer);

    // 2. 判断方向
    var dir = obj.offsetLeft < target ? speed : -speed;


    // 3. 设置定时器
    obj.timer = setInterval(function () {
        obj.style.left = obj.offsetLeft + dir + "px";

        if(Math.abs(target - obj.offsetLeft) < Math.abs(dir)){
            clearInterval(obj.timer);

            obj.style.left = target + "px";
            console.log(obj.offsetLeft, target);
        }
    }, 20);

}

/**
 * 获取CSS属性
 * @param {object}obj
 * @param {string}attr
 * @returns {string}
 */
function getCSSStyleAttr(obj, attr) {
    if(obj.currentStyle){ // IE 和 opera
        return obj.currentStyle[attr];
    }else {//标准W3C
        return window.getComputedStyle(obj, null)[attr];
    }
}

/**
 *
 * @param {object}obj
 * @param {object}json
 */
function bufferAnimation(obj,json,fn) {
    console.log(obj);
    clearInterval(obj.timer);
    var begin = 0,speed= 0,target = 0;
    var flag = true;
    obj.timer = setInterval(function () {
        //这里使用json实现多值传递,修改css属性
        for(var k in json){
            begin = parseInt(getCSSStyleAttr(obj,k));
            target = json[k];
            console.log(begin);
            //1.3求出步长
            speed = (target - begin) * 0.2;
            // speed = Math.ceil(speed);
            speed = target>begin ?  Math.ceil(speed):Math.floor(speed);
            obj.style[k] = begin+ speed +'px';
            obj.innerText = begin;
            if(begin !== target){
                flag = false;
            }
        }
        if (flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }

    },20);
}
