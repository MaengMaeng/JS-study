## 디바운스

- 연이어 호출되는 함수들 중 가장 마지막 ( 혹은 가장 첫번째 )만 실행 하는 것

```jsx
var timer;

document.querySelector('#input').addEventListener('input', function(e) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(function() {
    console.log('함수 실행', e.target.value);
  }, 200);
});
```

- 이렇게 되면 200ms 안에 새로운 입력이 들어오면 타이머를 제거하고 새로운 타이머를 설정해서 다시 200ms를 기다린 후에 함수를 실행하게 된다.
- 가장 처음 값으로만 실행하려면?

```jsx
var timer;

document.querySelector('#input').addEventListener('input', function(e) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = (function(v){
		return setTimeout(function() {
	    console.log('함수 실행', v);
	  }, 200);
	})(e.target.value);
});
```





## 쓰로틀

- 마지막 함수가 호출된 후에 일정 시간이 지나기 전에 호출하지 않게 하는 것

```jsx
var timer;
document.querySelector('#input').addEventListener('input', function (e) {
  if (!timer) {
    timer = setTimeout(function() {
      timer = null;
      console.log('함수 실행', e.target.value);
    }, 200);
  }
});
```

- 가장 처음 값으로만 실행하려면?

```jsx
var timer;

document.querySelector('#input').addEventListener('input',function (e) {
  if (!timer) {
    timer = (function(v){
	    return setTimeout(function() {
	      timer = null;
        console.log('함수 실행', v);
	    }, 3000);
    })(e.target.value);
  }
});
```