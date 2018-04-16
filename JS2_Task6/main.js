
var arr = ['JS2_task6_resize', 'JS2_task6_dialog', 'JS2_task6_drag'];

require(arr, function (resize, dialog, drag){
    var global = {isResizing: false};
    resize(global);
    drag(global);
});
