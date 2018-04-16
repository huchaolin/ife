var outBtn=document.getElementById("outBtn"),
inputId=document.getElementById("inputId"),
leftIn=document.getElementById("leftIn"),
rightIn=document.getElementById("rightIn"),
leftOut=document.getElementById("leftOut"),
rightOut=document.getElementById("rightOut"),
searchBtn=document.getElementById("searchBtn"),
searchId=document.getElementById("searchId"),
queBox=document.getElementById("queBox");
function handler1(){
 var num=inputId.value;
inputId.value="";
if(num!=""){
    var divQue=document.createElement("div"),
    textNode=document.createTextNode(num);
    divQue.className="que";
    divQue.value = num;
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
    divQue.value = num;
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

/*1.用浏览器内部转换器实现html转码*/
     htmlEncode = function (html){
             //1.首先动态创建一个容器标签元素，如DIV
             var temp = document.createElement ("div");
         //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
             (temp.textContent != undefined ) ? (temp.textContent = html) : (temp.innerText = html);
             //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
             var output = temp.innerHTML;
            temp = null;
            return output;
        };

function search() {
    var children = queBox.children,
        words = searchId.value,
        i,len;

    var flag = false;

    for(i = 0, len = children.length; i < len; i++) {
        // var pos,
        //     mValue = children[i].innerHTML;
        // pos = mValue.indexOf(words);
        var node = children[i];
        var value = node.value;
        var nodeHtml=node.innerHTML;
         var  encodedHtml= htmlEncode(value);
         var encodedWords = htmlEncode(words);
         children[i].innerText =value;
         children[i].innerHTML = encodedHtml.replace(new RegExp(encodedWords, 'g'), '<span>' + encodedWords + '</span>');
       // children[i].innerHTML = nodeHtml.replace(new RegExp(encodedWords, 'g'), '<span>' +encodedWords+ '</span>');
        
        // while(pos > -1){
        //     flag = true;
        //     var l = pos+words.length;
        //     var text = mValue.slice(0,pos) + "<span>" + words + "</span>" + mValue.slice(l);
        //     children[i].innerHTML = text;
        //     pos = mValue.indexOf(words, pos + 1);
        // }
    }

    return flag;
}
leftIn.onclick=handler1;
rightIn.onclick=handler2;
leftOut.onclick=handler3;
rightOut.onclick=handler4;
searchBtn.onclick=search;


// <span>asd</span>