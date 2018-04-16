var rootNode = document.getElementById("rootNode"),
    preBtn = document.getElementById("preBtn"),
    input = document.getElementById("inputID"),
    searchBtn = document.getElementById("searchBtn"),
    nodeArr = [];

function preTrav(rNode) {
    if (rNode == null) {
        return;
    }
    var node = {
        id:null,
        value:null
    };  
    var child = rNode.children;
    var i = 0,
        len = child.length;
     node.id = rNode;
     node.value = rNode.innerText;
     nodeArr.push(node);
     while(i<len) {
         preTrav(child[i]);
     i++;   
     };
}
function showTrav(searchLen) {
    var i = 0,
    len = nodeArr.length;
    if(searchLen) {
        len = searchLen;
    }
    var timer = setInterval(function() {
        if(i < len) {      
            if (i > 0){
                nodeArr[i-1].id.className = "";
            } 
            nodeArr[i].id.className = "bgColor";
        } 
        if(i == len)  {
            if(searchLen) {
                nodeArr[i-1].id.className = "match";
                clearInterval(timer);  
            }
        else {
                nodeArr[i-1].id.className = "";
                clearInterval(timer); 
            };
            if (searchLen == false) {
                alert("no such match!");
                clearInterval(timer); 
            }
        }

        i++;   
    }, 500);
}   

// function showTrav() {
//     var i = 0,
//         len = nodeArr.length;
//         setTimeout(function foo() {
//             nodeArr[i].id.className="bgColor";
//             if (i > 0) {
//                 nodeArr[i-1].id.className="";
//             }
//             i++;
//             if (i < len) {
//                 setTimeout(foo, 500);
//             }
//             else {
//                 nodeArr[i-1].id.className="";
//             }
//         }, 500);
// }   

function search(){
    var char = input.value.toString(),  
        len = nodeArr.length,
        match = false;
    for (var i = 0; i < len; i++) {
            nodeArr[i].id.className = "";
    };
    for (var i = 0; i < len; i++) {
        var  node = nodeArr[i].value.toString();
        if ( node == char ) {
            match = true;
            return i+1;
        };

    };
    if ( match == false){
       // alert("no such match!");
        return false;
    };
};
preBtn.onclick = function(){
    nodeArr = [];
    preTrav(rootNode);
    showTrav();
};
searchBtn.onclick=function(){
    nodeArr = [];   
    preTrav(rootNode);
    var i=search();
    //if(i == false) return;//可以利用这个根据上个函数的内部返回结果决定是否跳出整个外部函数；
    showTrav(i);
}