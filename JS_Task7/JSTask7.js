var root = document.getElementById("rootTree"),
    pre = document.getElementById("pre"),
    mid = document.getElementById("mid"),
    back = document.getElementById("back");
var nodeArr = [];  
// 创建一个Node对象来装二叉树的节点
function getNode(root){
    var node = {
        value:null,
        leftChild:null,
        rightChild:null
    };
    node.value = root;
    node.leftChild = root.children[0];
    node.rightChild = root.children[1]; 
    return node;
}
// 前序遍历并按遍历顺序放入数组
function preTrav(root){
if (!root) {
    return;
}
    var node = getNode(root);
    nodeArr.push(node);
    preTrav(node.leftChild);
    preTrav(node.rightChild);
};
//中序遍历并按遍历顺序放入数组
function midTrav(root){
    if (!root) {
        return;
    }
        var node = getNode(root);
        midTrav(node.leftChild);
        nodeArr.push(node);
        midTrav(node.rightChild);
};
//后序遍历并按遍历顺序放入数组
function backTrav(root){
    if (!root) {
        return;
    }
    var node = getNode(root);
    backTrav(node.leftChild);
    nodeArr.push(node);
    backTrav(node.rightChild);
};
//遍历顺序变色演示
function changeColor(nodeArr) {
    var i = 0,
        len = nodeArr.length;
    var timer = setInterval(function() {
        if(i < len) {
            if(i > 0) {
                nodeArr[i-1].value.className = "";
            }
            nodeArr[i].value.className = "changeColor";
        }
        if(i == len) {
            nodeArr[i-1].value.className = "";
            clearInterval(timer);
        }
        i++;
    }, 500);  
}
// reset Color,reset Array
function reset(a){
    var i = 0,
        len = a.length;
    for (i; i<len; i++) {
        a[i].value.className = "";
    }
}

pre.onclick = function(){
    reset(nodeArr);
    preTrav(root);
    changeColor(nodeArr);
    nodeArr = [];
}
mid.onclick = function(){
    reset(nodeArr);
    midTrav(root);
    changeColor(nodeArr);
    nodeArr = [];
}
back.onclick = function(){
    reset(nodeArr);
    midTrav(root);
    changeColor(nodeArr);
    nodeArr = [];
}
