
define(function (){ return function(global) {
function mousedownResize(e) {
    isResizing = true;
    mX = e.clientX;
    mY = e.clientY;
    dialogX = this.offsetLeft;
    dialogY = this.offsetTop;
    width = this.clientWidth;
    height = this.clientHeight;
}


//改变的鼠标符号为resize光标，绑定到元素mousemove事件
function resize(e) {
    // x1-x2,y1-y2为弹出框在窗口的位置范围，x与y为鼠标实时偏移位置
    var x1 = dialog.offsetLeft,
        y1 = dialog.offsetTop,
        x2 = x1 + dialog.clientWidth,
        y2 = y1 + dialog.clientHeight;    
        x = e.clientX,   
        y = e.clientY;
    //设置元素上的resize光标显示的范围：距离元素各边界处10px,注意处理坐标运算时的符号
    var top = y1 + 10,
        bottom = y2 - 10,
        left = x1 + 10,
        right = x2 -10;
    //实时判断鼠标位置处于哪个resizee光标位置
    N = ( y < top );
    S = ( y > bottom );
    W = ( x < left );
    E = ( x > right);
    var cursorStyle = "default";
    if (N) {
       cursorStyle = "n-resize";
    }
    if (S) {
       cursorStyle = "s-resize";
    }
    if (W) {
       cursorStyle = "w-resize";
    }
    if (E) {
       cursorStyle = "e-resize";
    }
    if (N && W) {
       cursorStyle = "nw-resize";
    }
    if (N && E) {
       cursorStyle = "ne-resize";
    }
    if (S && W) {
       cursorStyle = "sw-resize";
    }
    if (S && E) {
       cursorStyle="se-resize";        
    }
    if (!N && !S && !W && !E) {
       cursorStyle = "default";
    }

    if (cursorStyle === 'default') {
        global.isResizing = false;
    }
    else {
        global.isResizing = true;
    }

    dialog.style.cursor = cursorStyle;


    if (isResizing) {
        if (N) {
           var marginTop = "0px";
           var newTop = y + "px";
           var newH = mY - y + height + "px";
         }
         if (S) {
            var newH = y -mY + height + "px"; 
         }
         if (W) {
            var marginLeft = "0px";
            var newLeft = x + "px";
            var newW = mX - x + width + "px";
         }
         if (E) {
            var newW = x- mX + width + "px";
         }
        if ( marginTop != undefined ) {dialog.style.marginTop = marginTop;}
        if ( marginLeft != undefined )  {dialog.style.marginLeft = marginLeft;} 
        if ( newTop != undefined ) {dialog.style.top = newTop;}
        if ( newLeft !=undefined ) {dialog.style.left = newLeft;}
        if ( newH !=undefined ) {dialog.style.height = newH;}
        if ( newW !=undefined ) {dialog.style.width = newW;}
    }

}

// dialog.addEventListener("mousemove", resize, false);
var dialog = document.querySelector("#winBox");

//记录mousedown时鼠标的偏移值以及元素的宽高及偏移值，绑定到元素mousedown事件
var isResizing= false, mX = 0, mY = 0, dialogX = 0, dialogY = 0,  width = 0,height = 0;
dialog.addEventListener("mousedown",mousedownResize,false);
document.body.addEventListener("mousemove", resize, false);
document.body.addEventListener("mouseup", function(){
    isResizing = false;
}, false);

}});
