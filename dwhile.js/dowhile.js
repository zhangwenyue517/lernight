var count = 0;//定义跑动的次数
var isgo = false;//定义动画的执行方向
var timer;//定义计时器对象
window.onload = function() {
    var ul_img = document.getElementById("ul-img");//获取ul元素
    var li_img = document.getElementsByClassName("li-img");//获取li元素
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var container = document.getElementById("container");
    //var arrow = container.getElementsByClassName("arrows");
    var buttons = document.getElementById("buttons");
    var on = buttons.getElementsByClassName("on");//获取所有按钮元素
    //定义计时器，自动轮播
    showtime();
    function showtime() {
        timer = setInterval(function() {
            if(isgo == false) {
                count++;
                ul_img.style.transform = "translate("+ -1366 * count + "px)";
                if(count >= li_img.length - 1) {
                    count = li_img.length - 1;
                    isgo = true;
                }
            }else {
                count--;
                ul_img.style.transform = "translate("+ -1366 * count + "px)";
                if(count <= 0) {
                    count = 0;
                    isgo = false;
                }
            }
            for(var i = 0; i < on.length; i++) {
                on[i].style.backgroundColor = "#ABE0B9";
            }
            on[count].style.backgroundColor = "#43AD18";
        }, 4000);
    }
    prev.onmousemove = function() {
            showtime();
        }
        next.onmousemove = function() {
            showtime();
        }
    //整个容器中鼠标悬停停止，离开恢复自动轮播
    container.onmousemove = function() {
        clearInterval(timer);
    }
    container.onmouseleave = function() {
        showtime();
    }
    //左右箭头点击事件
    prev_ic = function() {
        clearInterval(timer);
        isgo = false;
        count++;
        if(count > 4) {
            count = 4;
            return;
        }
        ul_img.style.transform = "translate("+ -1366 * count + "px)";
        for(var i = 0; i < on.length; i++) {
            on[i].style.backgroundColor = "#ABE0B9";
        }
            on[count].style.backgroundColor = "#43AD18";
    }
    next_ic = function() {
        clearInterval(timer);
        isgo = true;
        count--;
        if(count < 0) {
            count = 0;
            return;
        }
        ul_img.style.transform = "translate("+ -1366 * count + "px)";
        for(var i = 0; i < on.length; i++) {
            on[i].style.backgroundColor = "#ABE0B9";
        }
            on[count].style.backgroundColor = "#43AD18";
    }
    prev.onclick = function() {
        prev_ic();
    }
    next.onclick = function() {
        next_ic();
    }
    /*for(var i = 0; i < arrow.length; i++) {
        arrow[i].onclick = function() {
            if (this.title == 1) {
                count++;
                if(count > 4) {
                    count = 0;
                }
                ul_img.style.transform = "translate("+ -1366 * count + "px)";
                for(var i = 0; i < on.length; i++) {
                    on[i].style.backgroundColor = "#ABE0B9";
                }
                on[count].style.backgroundColor = "#43AD18";
            }
            if(this.title == 0) {
                count--;
                if(count < 0) {
                    count = 4;
                }
                ul_img.style.transform = "translate("+ -1366 * count + "px)";
                for(var i = 0; i < on.length; i++) {
                    on[i].style.backgroundColor = "#ABE0B9";
                }
                on[count].style.backgroundColor = "#43AD18";
            } 
        }
        ul_img.style.transform = "translate("+ -1366 * count +"px)";
        for(var i = 0; i < on.length; i++) {
            on[i].style.backgroundColor = "#ABE0B9";
        }
        on[count].style.backgroundColor = "#43AD18";
    }*/
    //小圆点悬停按钮
    for(var b = 0; b < on.length; b++) {
        on[b].index = b;
        on[b].onmouseover = function() {
            clearInterval(timer);
            for(var a = 0; a < on.length; a++) {
                on[a].style.backgroundColor = "#ABE0B9";
            }
            on[this.index].style.backgroundColor = "#43AD18";
            if(this.index == 4) {
                isgo = true;
            }
            if(this.index == 0) {
                isgo = false;
            }
            ul_img.style.transform = "translate("+ -1366 * this.index +"px)";
        }
        on[b].onmouseout = function() {
            showtime();
        }
    }
}