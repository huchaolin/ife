

//取出字符串的数字,注意正则表达式需要添加符号
function getNum(text){
    var value = text.replace(/[^0-9-]/ig,""); 
     return parseInt(value);
    } 
function tLeft(td){
    //  parseInt(getNum(td.style.transform))
    var ang = getNum(td.style.transform);
    ang=ang-90;    
    td.style.transform="rotate(" + ang + "deg)";
}
function tRight(td){
    //  parseInt(getNum(td.style.transform))
    var ang = getNum(td.style.transform);
    ang=ang+90;
    td.style.transform="rotate(" + ang + "deg)"; 
}
function tBack(td){
    //  parseInt(getNum(td.style.transform))
    var ang = getNum(td.style.transform);
    ang=ang+180;
    td.style.transform="rotate(" + ang + "deg)"; 
}
function notice(){
    alert("已经走到边了噢~");
}
function go(td){
    //  parseInt(getNum(td.style.transform)) 
    var top =parseInt(td.style.top);
        left = parseInt(td.style.left);
   var ang = getNum(td.style.transform); 
   var num = ang % 360; 
       num = num >=0 ? num : (num+360);
   if (num == 0){
        if (top==0) {
            notice();
            return;
        }
        top-=10;
        td.style.top=top+"%";
        return; 
    }
    if (num == 90) {
        if (left==90) {
            notice();
            return;
        }
        left+=10; 
        td.style.left=left+"%" ;        
    }
    if (num == 180){
        if (top==90) {
            notice();
            return;
        }
        top+=10; 
        td.style.top=top+"%";
    }
    if (num == 270){
        if (left==0) {
            notice();
            return;
        }
    left-=10;
    td.style.left=left+"%";
    }
}
function changeState(event,td){
    var value = event.target.value;
    STATE_LIST[value](td);
}
function handle(e){
    var event=e;
    changeState(e,target );
}
const STATE_LIST = {
    go: go,
    tLeft: tLeft,
    tRight: tRight,
    tBack: tBack
}
var btn = document.querySelector("#button");
var target = document.querySelector("#target");
//btn.onclick=changeState(event,target );
 btn.addEventListener("click",handle,false);
