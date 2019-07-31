window.onload = function () {
    //获取所有的头部li标签
    var liList = $('tab_header').getElementsByTagName("li");
    var domList = $('tab_content').getElementsByClassName("dom");
    // console.log(liList);
    // console.log(contentList);
    for (var i=0;i<liList.length;i++){
       var li =  liList[i];
        // console.log(li);
        li.index = i;
        console.log(li.index);
        li.onmouseover = function () {
            for (var j=0;j<liList.length;j++){
                liList[j].className = '';
                domList[j].style.display = 'none';
                // console.log(domList[j]);
            }
            this.className = 'selected';
            domList[this.index].style.display = 'block';
            console.log(this.index);
        }
    }
}

function $(id) {
    return typeof id ==='string'?document.getElementById(id):null;
}