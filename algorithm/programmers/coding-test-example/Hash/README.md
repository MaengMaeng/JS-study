## 3번
- clothes의 카운트를 세는 부분을 {}를 이용해서 바꾸면 더 좋을 것 같다.

기존
```
for(let i = 0; i < clothes_length; i++){
    let cloth = clothes[i];

    let index = c.indexOf(cloth[1]);
    if(index === -1){
        c.push(cloth[1]);
        c_count.push(1);
    } 
    else{
        c_count[index]++;
    }
}
```

바꾼 것
```
const obj = {};
for(let i = 0; i < clothes_length; i++){
    let cloth = clothes[i];

    obj[cloth[1]] = (obj[cloth[1]] || 0) + 1;
}
```


## 4번
- obj2에 object 형태로 넣지 말고 배열 형태로 넣었어도 됐을 것 같다.

기존
```
for(let i = 0; i < genres.length; i++){
    obj2[genres[i]] = (obj2[genres[i]] || []);
    obj2[genres[i]].push({'num':i, 'plays':plays[i]});
}
```

바꾼 것
```
for(let i = 0; i < genres.length; i++){
    obj2[genres[i]] = (obj2[genres[i]] || []);
    obj2[genres[i]].push([i, plays[i]]);
}
```