
    define(['JS2_Task7_table','JS2_Task7_content'],function(table,content){

        function findSubject(span){
            var subjectNode = span.parentNode;
            var children = subjectNode.parentNode.children;
            var len = children.length;
            for (var i =0; i<len; i++ ) {
                if (children[i] == subjectNode) {
                    return i;
                }
            };
        }


        function sortStudent(btn, studentArr) {
            var index = findSubject(btn);
            function compareUp(o1,o2) {
                return o1[stuAttr[index]] -o2[stuAttr[index]];
            };
            function compareDown(o1,o2) {
                return  o2[stuAttr[index]]-o1[stuAttr[index]];
            };

            if( btn.className == "upBtn") {
                studentArr.sort(compareUp);
            }
            if( btn.className == "downBtn") {
                studentArr.sort(compareDown);
            }
            return studentArr;
        }

    function handler(e){
            var e = e || window.event;
            var spanBtn = e.target;
            // 复制原数组
            var contentArr = content.contentArr.concat();
            sortStudent(spanBtn,contentArr[1]);
            table.createTable(contentArr,tableDiv);
        }

        var tableDiv = document.querySelector(".table"); 
        var stuAttr = content.stuAttr
        // table.createTable(content.contentArr,tableDiv);    
        
        //以保证先有了DOM节点之后，handler有效
        return {
            handler:handler
        };
        
    });