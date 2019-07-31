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
    clearInterval(obj.timer);
    var begin = 0,speed= 0,target = 0;
    var flag = true;
    obj.timer = setInterval(function () {
        console.log(11);
        //这里使用json实现多值传递,修改css属性
        for(var k in json){
            if("opacity" === k){ // 透明度
                begin =  Math.round(parseFloat(getCSSAttrValue(obj, k)) * 100) || 100;
                target = parseInt(json[k] * 100);
            }else if("scrollTop" === k){
                begin = Math.ceil(obj.scrollTop);
                console.log('begin+++++++++++++++++++++++++++++++');
                target = parseInt(json[k]);

            }else { // 其他情况
                begin = parseInt(getCSSAttrValue(obj, k)) || 0;
                target = parseInt(json[k]);
            }

            //1.3求出步长
            speed = (target - begin) * 0.2;
            // speed = Math.ceil(speed);
            // 1.6 动起来
            if("opacity" === k){ // 透明度
                // w3c的浏览器
                obj.style.opacity = (begin + speed) / 100;
                // ie 浏览器
                obj.style.filter = 'alpha(opacity:' + (begin + speed) +')';
            }else if("scrollTop" === k){
                obj.scrollTop = begin + speed;//对于窗口滚动,不能有px单位,因此需要额外添加一个判断
            }else {
                obj.style[k] = begin + speed + "px";
            }
            console.log(begin, target);
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
