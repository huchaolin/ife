define(function (){ return function(global) {
    var winBox = document.querySelector("#winBox");

    var initX = 0,
        initY = 0,
        mouseDownX = 0 ,
        mouseDownY = 0,
    //用于保证mousedown与mousemove同时发生时实现拖拽
        flag = false;
    //绑定到mousedown，记录mousedown时的鼠标初始位置，以及弹出框初始位置
    function dragStart(e){
        //浮框初始的位置
        initX = parseInt(this.offsetLeft);
        initY = parseInt(this.offsetTop);
        //鼠标按下的时候的初始位置
        mouseDownX = parseInt(e.clientX);
        mouseDownY = parseInt(e.clientY); 
        flag = true;
    } 
    //绑定到mousemove，根据mousemove的实时位置偏移值，实时改变弹出框的位置
    function dragMove(e){
        if(flag) {
            this.style.margin = 0 +"px";
            this.style.left = initX + parseInt(e.clientX) - mouseDownX + "px";
            this.style.top = initY + parseInt(e.clientY) - mouseDownY + "px";
        }
    }
    //确保mousemove绑定的拖拽事件仅在mousedown的状态下有效
    function dragEnd(e){
        flag = false;
    }

    var eventMap = {
        mousedown: dragStart.bind(winBox),
        mousemove: dragMove.bind(winBox),
        mouseup: dragEnd.bind(winBox)
    }

    function handler(e) {
        if (global.isResizing) {
            e.preventDefault();
            return false;
        }
        // eventMap[e.type].call(this, e);
        eventMap[e.type](e);
    }

    winBox.addEventListener("mousedown", handler,false);
    winBox.addEventListener("mousemove", handler,false);        
    winBox.addEventListener("mouseup", handler,false);
    
}});
