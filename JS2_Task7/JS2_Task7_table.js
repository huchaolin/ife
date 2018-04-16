
define(function (){ 
    function createTable(tArr,table){
        var tHead = tArr[0];
        var tBody = tArr[1];
        var fragment = document.createDocumentFragment();
        //表头
        var row0 = document.createElement("div");
            row0.className ="row";
        for(var i in tHead){
            if (tHead.hasOwnProperty(i)) { //filter,只输出tHead的私有属性
                let div = document.createElement("div");
                    div.name = tHead[i][0];
                    div.innerText = tHead[i][1];
                if( div.name != "name" ) {
                    var upBtn = document.createElement("span");
                        upBtn.className = "upBtn"; 
                    var downBtn = document.createElement("span");
                        downBtn.className = "downBtn";
                    div.appendChild(upBtn);
                    div.appendChild(downBtn);
                }
                row0.appendChild(div);
            };
            fragment.appendChild(row0);
        }
        //表身
       
        tBody.forEach(function(item) {
            var row = document.createElement("div");
            row.className = "row";
            for (var m in item) {
                if (item.hasOwnProperty(m)) { //filter,只输出tBody的私有属性
                    let div = document.createElement("div");
                    div.innerText = item[m];
                    row.appendChild(div);
                }
            }
            fragment.appendChild(row);
        }); 
        table.innerHTML = "";
        table.appendChild(fragment);
    }


    return {
        createTable:createTable,
    };

});

