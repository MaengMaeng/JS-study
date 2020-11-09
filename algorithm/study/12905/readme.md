## 문제
- [12905 - 가장 큰 정사각형 찾기](https://programmers.co.kr/learn/courses/30/lessons/12905?language=javascript)

## 풀이방법
- 처음에는 dfs로 풀었으나, 시간 초과
- 시간을 줄이기 위해 한 방법
    1. visit 활용
        - 0을 만나는 라인을 필요 없으므로 모두 visited로 바꿈
    2. 재귀문을 for문으로 변경
    3. visit 배열을 만들기 위한 방법 변경
        - 변경 전
        ```
            const visit = [];
            for(let i = 0; i < xLength; i++){
                visit.push(Array.from({length:yLength}, (v, i) => 0)); // 0으로 초기화
            }
        ```

        - 변경 후
        ```
            const visit = [];
            for(let i = 0; i < xLength; i++){
                visit.push(new Array(yLength)); // undefined로 초기화
            }
        ```
        