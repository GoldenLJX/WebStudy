function scroll() {
    if(window.pageYOffset !== null){//IE9+和最新浏览器
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
    return typeof id==='string'?document.getElementById(id):null;
}