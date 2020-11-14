let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./dev/stdin.txt').toString().split('\n');

let N = input[0] * 1;
let numbers = input[1].split(' ').map((v) => v*1);
let Limit = input[2] * 1;

numbers.sort((a,b) => a-b);

const binarySearch = () => {
    let left = 0, right = Limit;
    let answer = 0;

    let h = 0, sum = 0;
    for(let i = 0; i < N; i++){
        h = h > numbers[i] ? h : numbers[i];
        sum += numbers[i];
    }

    if(sum <= Limit) return h;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let sum = 0;
                
        for(let i = 0; i < N; i++){
            if(mid > numbers[i]){
                sum += numbers[i];
            }
            else{
                sum += mid;
            }
        }
        
        if(sum <= Limit){
            answer = answer > mid ? answer : mid;
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }

    return answer;
}

console.log(binarySearch());