function foo1(name) {
    var _name = name;
    var say = function() {
        console.log(_name);
    }

    return {say};
}

function foo2(name){
    this._name = name;
}

foo2.prototype.say = function(){
    console.log(this._name);
}

var f1 = foo1('foo1');
var f2 = new foo2('foo2');

f1.say();
f2.say();

f1._name = 'boo1';
f2._name = 'boo2';

f1.say(); // 변하지 않음
f2.say(); // 변함
