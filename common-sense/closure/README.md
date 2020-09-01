## 클로져 ( Closure )

- 클로저는 독립적인 (자유) 변수를 가리키는 함수이다. 또는, 클로저 안에 정의된 함수는 만들어진 환경을 ‘기억한다’.

```jsx
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
```





## 클로져를 통한 은닉화

- prototype에서 private variable에 대한 접근 권한 문제를 은닉화를 통해 해결 가능하다.

```jsx
function foo1(name) {
    var _name = name;
    return function() {
        console.log(_name);
    }
}

function foo2(name){
    this._name = name;
}

foo2.prototype.say = function(){
    console.log(this._name);
}

var f1 = foo1('foo1');
var f2 = new foo2('foo2');

f1();
f2.say();

f1._name = 'boo1';
f2._name = 'boo2';

f1(); // 변하지 않음
f2.say(); // 변함
```





## 클로져 반복문

- 일반 반복문
    - setTimeout이 끝난 뒤에 global i 를 참조하게 된다. 이 때 i는 이미 10이 되어 있기 때문에 10만을 출력한다.

```jsx
var i;
for(i = 0; i < 10; i++){
    setTimeout(function() {
        console.log(i);
    }, 100);
} // 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
```

- 클로져 반복문
    - setTimeout이 끝나도 클로져는 자신의 환경을 갖고 있기 때문에 j의 값을 i라는 형태로기억하고 있다.
    - 따라서 각 환경의 i 값인 0, 1, 2 ... 9 를 출력하게 된다.

```jsx
var j;
for(j = 0; j < 10; j++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        }, 100);
    })(j);
} // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```





## 클로져 제거

- 클로저는 각자의 환경을 가지므로, 메모리를 소모한다. 클로져를 생성한 후에 참조를 제거하지 않으면 메모리가 회수 되지 않으므로 클로져의 사용이 끝나면 참조를 제거하는 것이 좋다.