function getFoo(name) {
    var text = 'foo, ' + name;

    return function() {
        return text;
    }
}

var foo1 = getFoo('foo1');
var foo2 = getFoo('foo2');

console.log(foo1());
console.log(foo2()); // text 가 동적으로 변하는 것이 아니라 서로 다른 환경을 가지고 있다.