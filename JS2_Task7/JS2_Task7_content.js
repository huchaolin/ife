define(function (){
    function Student(name,chinese,math,english){
        this.name = name;
        this.chinese = chinese;
        this.math = math;
        this.english = english;
        this.scorce =  chinese + math + english;
    }
    var stuAttr = ["name","chinese","math","english","scorce"];
    // 表头的内容
    var tHead = {
        name:["name","姓名"],
        chinese:["chinese","语文"],
        math:["math","数学"],
        english:["english","英语"],
        total:["total","总分"]
    };

    // 表身的内容
    var ming = new Student("小明",90,100,70);
    var tao = new Student("小桃",60,100,90);
    var hua = new Student("小花",90,70,80);
    var zhang = new Student("小张",80,80,70);
    var hong = new Student("小红",70,90,70);   
    var studentsArr = [ming,tao,hua,zhang,hong];
    var contentArr = [tHead,studentsArr];

    return {
        contentArr:contentArr,
        stuAttr:stuAttr
    };



});
