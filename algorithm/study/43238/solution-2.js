function solution(n, times) {
    times.sort((a,b) => a - b);

    const length = times.length
    // let left = Math.floor((times[0]*n)/(length));
    let left = 0;
    let right = (times[length - 1] * n);

    let mid, result, answer = 0;
    while(left <= right){
        mid = Math.floor((left + right)/2);
        
        result = 0;
        for(let i = 0; i < length; i++){
            result += Math.floor(mid/times[i]);
        }

        // console.log(mid, result);

        if(result < n){
            left = mid + 1;
        }
        else{
            right = mid - 1;
            answer = mid;
        }
    }

    return answer;
}

// const input = [6, [1, 6]];
const input = [6, [2, 10]];
console.log(solution(...input));