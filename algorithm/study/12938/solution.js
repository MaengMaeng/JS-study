function solution(n, s) {
    let answer = [];
    let max = 0;

    let array = [];
    let sum = 0;

    for(let i = 0; i < n - 1; i++){
        sum += i + 1;
        array.push(i + 1);
    }
    array.push(s - sum);

    answer = array.slice();
    max = Math.max(max, array.reduce((p, v) => p * v));

    for(let i = n - 1; array[i] - 1 > array[i - 1] + 1;){
        array[i]--;
        array[i - 1]++;

        let m = array.reduce((p, v) => p * v);
        if(m > max){
            answer = array.slice();
            max = m;
        }
    }

    
    

    return answer;
}