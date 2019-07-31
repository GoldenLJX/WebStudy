window.onload = function () {
    var slider = $('slider');
    var ul = slider.children[0];
    var slider_ctrl = slider.children[1];
    var allLis = ul.children;
    var iNow = 0;
    //1.动态创建指示器
    for(var i=0;i<allLis.length;i++){
        var span = document.createElement('span');
        span.className = 'slider-ctrl-icon';
        span.innerText = allLis.length - i - 1;
        slider_ctrl.insertBefore(span, slider_ctrl.children[1]);//在某个元素之前插入元素
    }
    //2.让第一个被选中
    slider_ctrl.children[1].className = "slider-ctrl-icon current";
    //3.让滚动的内容归位
    var scroll_w = slider.offsetWidth;
    for(var j=1; j<allLis.length; j++){
        allLis[j].style.left = scroll_w + "px";
    }
    //4.遍历监听操作
    for(var i =0;i<slider_ctrl.children.length;i++){
        slider_ctrl.children[i].onmousedown = function () {
            if(this.className === 'slider_ctrl_prev'){
                /*
                  1.当前可视区域的图片快速右移;
                  2.上一张图片快速出现在可视区域的左边
                  3.让这张图片做动画进入
                 */
                bufferAnimation(allLis[iNow], {"left": scroll_w});
                iNow--;
                // 判断
                if(iNow < 0){
                    iNow = allLis.length - 1;
                }
                allLis[iNow].style.left = -scroll_w + 'px';
                bufferAnimation(allLis[iNow], {"left": 0});
            }else if(this.className === 'slider_ctrl_next'){
                /*
                 1.用当前点击的索引和选中索引对比
                 2.点击的 > 选中的, 相当于点击了右边的按钮
                 2.点击的 < 选中的, 相当于点击了左边的按钮
                */
            }else{//下边的指示器
            }
        }
    }
}