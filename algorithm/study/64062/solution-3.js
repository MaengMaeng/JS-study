function solution(stones, k) {
    let answer = 0;

    let left = 0, right;
    for(let i = 0; i < stones.length; i++){
        right = right > stones[i] ? right : stones[i];
    }

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let count = 0;

        for(let i = 0; i < stones.length; i++){
            if(stones[i] - mid <= 0){
                count++;
            }
            else{
                count = 0;
            }

            if(count >= k){
                break;
            }
        }

        if(count < k){
            answer = answer > mid ? answer : mid;
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }

    return answer + 1;
}

const input = [[2, 4, 5, 3, 2, 1, 4, 2, 5, 1]		, 3];

console.log(solution(...input));