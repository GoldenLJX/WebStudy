window.onload = function () {
    //1.加载布局
    waterfall("main" ,"box");
    //2动态加载图片
    window.onscroll  = function () {
        if (checkWillLoadImage()){
            //2.1构建数据
            var dataArr = [
                {'src':'img3.jpg'},
                {'src':'img4.jpg'},
                {'src':'img5.jpg'},
                {'src':'img6.jpg'},
                {'src':'img7.jpg'},
                {'src':'img8.jpg'},
                {'src':'img9.jpg'},
                {'src':'img10.jpg'},
            ]
            for (var i=0;i>dataArr.length;i++){
                var box = document.createElement('div');
                box.className = "box";
                $('main').appendChild(box);

                var pic = document.createElement('div');
                pic.className = "pic";
                box.appendChild(pic);

                var img = document.createElement('img');
                img.src = "images/"+dataArr[i].src;
                pic.appendChild(img);
            }
            waterfall('main','box');
        }
    }
}

function waterfall(parent,child) {
    //父盒子居中
    //1.首先获取所有单个的盒子宽度
    var allBox = $(parent).getElementsByClassName(child);
    //1.1获取单个盒子的宽度
    var boxW = allBox[0].offsetWidth;
    console.log(boxW);
    //1.2获取屏幕宽度
    var screenW = document.documentElement.clientWidth;
    console.log(screenW);
    //1.3求出列数
    var cols = parseInt(screenW/boxW);
    $(parent).style.width = cols * boxW + 'px';
    $(parent).style.margin = "0 auto";
    //2.求出盒子的高度
    var boxHeight,heightArr =[],minBoxHeight=0,minBoxIndex=0;
    for (var i = 0;i<allBox.length;i++){
        //2.1求出单个盒子的高度
        boxHeight = allBox[i].offsetHeight;
        if(i<cols){
            heightArr.push(boxHeight);
        }else {//剩余行
            //获取最小高度
            minBoxHeight = Math.min.apply(this,heightArr);
            minBoxIndex = getMinBoxIndex(heightArr,minBoxHeight);
            //3.盒子定位
            allBox[i].style.position = 'absolute';
            allBox[i].style.left = minBoxIndex * boxW +'px';
            allBox[i].style.top = minBoxHeight + "px";
            //4更新最小盒子高度,去掉原本最小的那个值
            heightArr[minBoxIndex] += minBoxHeight;
        }
    }
    console.log(heightArr);

}
//获取最小高度的索引
function getMinBoxIndex(arr,val) {
    for (var i =0;i<arr.length;i++){
        if(arr[i]===val){
            return i;
        }
    }
}
function $(id) {
    return typeof id === "string"?document.getElementById(id):null;
}

function checkWillLoadImage() {
    //1获取最后一个盒子
    var allBox = document.getElementsByClassName("box");
    var lastBox = allBox[allBox.length -1];
    //2求出最后一个盒子自身高度的一般 + offsetTop
    var lastBoxHeight = lastBox.offsetHeight*0.5 +lastBox.offsetTop;
    //3求出屏幕的高度
    var screenH = document.body.clientHeight || document.documentElement.clientHeight;
    //4求出页面偏离浏览器的高度
    var scrollTop = scroll().top;
    return lastBoxHeight <=screenH+scrollTop;
}