function Observer(data) {
    this.data = data;
    //调用设置在此构造函数原型上的方法,处理data对象
    this.walk(data);
}

Observer.prototype.walk = function (data){
    //for in 循环 遍历所有属性
    var item;
    for (var key in data) {
        if(data.hasOwnProperty(key)) {
            item = data[key];
            if (typeof item == 'object') {
                //属性是 对象 的 用递归；
                new Observer(item);
            }
            this.listen(key,item);
        }
    }
}

Observer.prototype.listen = function(key, item) {
    Object.defineProperty(this.data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            console.log('你访问了' + key);
            return item;
        },
        set: function (newItem) {
            console.log('你设置了' + key);
            console.log('新的' + key + ' = ' + newItem)
            if( typeof newItem == "object"){ new Observer(newItem);}
            item = newItem;
        }
    })
}

let data = {
    user: {
        name: "liangshaofeng",
        age: "24"
    },
    address: {
        city: "beijing"
    }
};

let app = new Observer(data);