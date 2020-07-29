## Array
- 배열 초기화 생성
```
const arr = Array.from({length:4}, () => 0);
console.log(arr); // Array(5) [0, 0, 0, 0]
```

- 이중배열 만들기
```
let arr = new Array(5);
for(let i = 0; i < 5; i++){
    arr[i] = new Array(5);
}
```

- 정렬
```
let arr = [5, 4, 3, 2, 1];
arr.sort();
console.log(arr); // 1 2 3 4 5
```

- 배열 복사
```
let a = ['a', 'b', 'c'];
let b = a.splice();

a[0] = 1;

console.log(a); // 1 b c
console.log(b); // a b c
```

## Math
- 최대값 찾기
```
let i = 0, j = 10;
console.log(Math.max(i, j)); // j = 10
```

- 배열의 최대값 찾기
```
let arr = [0, 1, 2, 3, 4, 5];
console.log(Math.max.apply(null, arr)); // 5
```