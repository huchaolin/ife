var outBtn=document.getElementById("outBtn"),
inputId=document.getElementById("inputId"),
leftIn=document.getElementById("leftIn"),
rightIn=document.getElementById("rightIn"),
leftOut=document.getElementById("leftOut"),
rightOut=document.getElementById("rightOut"),
queBox=document.getElementById("queBox");
function handler1(){
 var num=inputId.value;
inputId.value="";
if(num!=""){
    var divQue=document.createElement("div"),
    textNode=document.createTextNode(num);
    divQue.className="que";
    divQue.appendChild(textNode);
    queBox.insertBefore(divQue,queBox.firstChild);
    };
};
function handler2(){
var num=inputId.value;
inputId.value="";
if(num!=""){
    var divQue=document.createElement("div"),
    textNode=document.createTextNode(num);
    divQue.className="que";
    divQue.appendChild(textNode);
    queBox.appendChild(divQue);
    };
};
function handler3(){
if(queBox.childNodes.length>0){
    var a=queBox.removeChild(queBox.firstChild);
    alert(a.innerText);
    };
};
function handler4(){
if(queBox.childNodes.length>0){
    var a=queBox.removeChild(queBox.lastChild);
    alert(a.innerText);
    };
};
leftIn.onclick=handler1;
rightIn.onclick=handler2;
leftOut.onclick=handler3;
rightOut.onclick=handler4;


function numberOnly(e){
var data = e.keyCode; 
if(!((data>=96&&data<=105)||(data>=48&data<=57)||(data==8))){
    e.preventDefault();
   alert("Number Only!");
};
};

inputId.addEventListener("keypress",numberOnly,false);