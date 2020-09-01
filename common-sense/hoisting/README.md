## 호이스팅 ( Hoisting )

- 자바스크립트는 실행되기 전에 변수들을 유효범위 최상단에 선언한다.
  - var 변수와 함수 선언문에 대해서만 일어나게 된다.

```jsx
foo1();
foo2();

function foo1(){
	console.log('foo1');
}

var foo2 = function(){
	console.log('foo2');
}
function foo1(){
	console.log('foo1');
}

var foo2;

foo1(); // 'foo1';
foo2(); // error : foo2 is not function;

foo2 = function(){
	console.log('foo2');
}
```





## 호이스팅 우선순위

- 변수 선언이 함수 선언보다 위로 끌어올려진다.

```jsx
var foo1 = '변수';
function foo1 () {
    console.log('함수');
}

function foo2() {
    console.log('함수');
}
var foo2 = '변수';

console.log(typeof foo1); // string
console.log(typeof foo2); // string
```