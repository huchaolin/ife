define(function (){

var btn = document.querySelector("#btn"),
    winBox = document.querySelector("#winBox"),
    cover = document.querySelector("#cover"),
    sure = document.querySelector("#sure"),
    cancel = document.querySelector("#cancel");
var winDiv= winBox.firstElementChild,
    h1 = winDiv.firstElementChild,
    p = winDiv.children[1];
// i 用于确保 clickHidden函数只对于弹出框出现之后的click事件有效
var i=true;
const TEXT_LIST = {
    text1:["head1","content1"],
    text2:["head2","content2"],
    text3:["head3","content3"],
    text4:["head4","content4"],
    text5:["head5","content5"],
    text6:["head6","content6"],
    text7:["head7","content7"]
    }
//弹出框中确认与取消按钮相应的处理函数
const CONFIRM_CANCEL = {
    confirm: func1 = function(){
        alert("处理函数：确认");
        },
    cancel: func2 = function(){
        alert("处理函数：取消");
        }
    };
//显示与隐藏 弹出框与遮盖层
function showBox(){
    winBox.style.display = "block";
    cover.style.display = "block";
    }
function hidden(){
    winBox.style.display = "none";
    cover.style.display = "none";  
    }
 // 弹出框中确认与取消button对应的执行函数
function confirmCancel(e){
    var tar = e.target;
    value = tar.value;
    if( (tar.tagName.toLowerCase()=="button")){
        hidden();
        CONFIRM_CANCEL[value]();
    }
}
// 所有的弹出框事件委托，相应改变弹出框的标题和内容
function btnHandle(e){
    var value = e.target.value,
        text = TEXT_LIST[value];
    if (text){
        showBox();
        h1.innerText = text[0];
        p.innerText = text[1];
    }
    if (i) {
        i=false;
    }
}
    // 判断是不是子节点
function isParent (obj,parentObj){
    while (obj != undefined && obj != null && obj.tagName.toUpperCase() != 'BODY'){
        if (obj == parentObj){
            return true;
        }
        obj = obj.parentNode;
    }
    return false;
    }
// clickHidden绑定到body的click事件上，用于实现弹出框出现后点击弹出框以外任意位置关闭弹出框以及隐藏遮盖层
function clickHidden(e){
    var target = e.target;
    //只要点击的目标元素不是winBox的节点或者不是winBox节点 ，就hidden弹出框以及遮盖层
    var isNo = isParent(target,winBox);
    if(!isNo){
        //如果i为true，即弹出框已出现
        if(i) {
            hidden();
        }
    }
    i = true;
}
//侦听所有点击事件，并根据点击的不同按button动态更新 弹出框
btn.addEventListener("click",btnHandle,false);
//处理整个页面点击后是否隐藏遮盖层与弹出框
document.body.addEventListener("click",clickHidden,false);
//处理弹出框中点击确认与取消button的事件
winBox.addEventListener("click", confirmCancel,false);  

});
