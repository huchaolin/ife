var outBtn=document.getElementById("outBtn"),
inputId=document.getElementById("inputId"),
leftIn=document.getElementById("leftIn"),
rightIn=document.getElementById("rightIn"),
leftOut=document.getElementById("leftOut"),
rightOut=document.getElementById("rightOut"),
sortBtn=document.getElementById("sortBtn"),
count=0,
queBox=document.getElementById("queBox");

function handler1(){
    if(count==60){alert("arrived at limit 60");}
    else{
        var num=parseInt(inputId.value);
        inputId.value="";
        if(isNaN(num)||num<10||num>100){ alert("Enter number 10-100!");}
        else{
            var divQue=document.createElement("div");
            divQue.className="que";
            divQue.style.height=num+"px";
            queBox.insertBefore(divQue,queBox.firstChild);
            count++;
        }
    }
 };
function handler2(){
    if(count==60){alert("arrived at limit 60");}
    else{
        var num=parseInt(inputId.value);
        inputId.value="";
        if(isNaN(num)||num<10||num>100){ alert("Enter number 10-100!");}
        else{
            var divQue=document.createElement("div");
            divQue.className="que";
            divQue.style.height=num+"px";
            queBox.appendChild(divQue);
            count++;
        }
    }
};
function handler3(){
if(queBox.childNodes.length>0){
    var a=queBox.removeChild(queBox.firstChild);
    alert(a.style.height);
    count--;
    };
};
function handler4(){
if(queBox.childNodes.length>0){
    var a=queBox.removeChild(queBox.lastChild);
    alert(a.innerText);
    count--;
    };
};

function numberOnly(e){
    var data = e.keyCode; 
    if(!((data>=96&&data<=105)||(data>=48&&data<=57)||(data==8))){
        e.preventDefault();
    alert("Number Only!");
    };
};
function divSort(){
    if(count>=2){
        var children=queBox.children,
            sortBox=[],
            len,
            i;
            console.log("children",children)
        for(i=0,len=children.length;i<len;i++){
           var  a=[]; 
            a[0]=children[i];
            a[1]=parseInt(children[i].style.height);
            sortBox.push(a);
        };
        sortBox.sort(function(a,b){return (a[1]-b[1]);});console.log("sortBox:",sortBox)
        for(i=0,len=sortBox.length;i<len;i++){
            var sB=sortBox[i];
            queBox.appendChild(sB[0]);
        };
    };
};
leftIn.onclick=handler1;
rightIn.onclick=handler2;
leftOut.onclick=handler3;
rightOut.onclick=handler4;
sortBtn.onclick=divSort;
inputId.onfocus=function(event){event.target.value=" ";};
inputId.addEventListener("keypress",numberOnly,false);