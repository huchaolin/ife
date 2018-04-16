
var arr = ['JS2_task7_table','JS2_Task7_content','JS2_Task7_sort'];

require(arr, function (table,content,sort){
    var tableDiv = document.querySelector(".table");
    var contentArr = content.contentArr;    
    table.createTable(contentArr,tableDiv);  
    //创建好了table之后才有 thead
    var handler = sort.handler;
    tableDiv.addEventListener("click", handler, false);
});