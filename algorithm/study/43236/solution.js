function solution(distance, rocks, n) {
    let left = 1, right = distance;
    let answer = 0;

    const newRocks = rocks.slice();
    newRocks.push(distance);
    newRocks.sort((a,b) => a-b);

    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        let count = 0, prev = 0;

        for(let i = 0; i < newRocks.length; i++){
            if(newRocks[i] - prev < mid){
                count++;
            }
            else{
                prev = newRocks[i];
            }
        }

        if(count <= n){
            answer = mid > answer ? mid : answer;
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }

    return answer;
}