window.onload = function () {
    var top = document.getElementById('top');
    var nav = document.getElementsByTagName('nav')[0];
    window.onscroll = function () {
        if (scroll().top > top.offsetTop) {
            top.style.display = 'none';
            nav.className = "nav"
        } else {
            top.style.display = 'block';
            nav.className = '';
        }
    }

}