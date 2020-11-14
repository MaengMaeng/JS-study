let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./dev/stdin.txt').toString().split('\n');

let [N, C] = input[0].split(' ').map(v => v * 1);
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i] * 1);
  }
}

numbers.sort((a,b) => a-b);

// console.log(N, C);
// console.log(numbers);

const binarySearch = (distance, numbers, n) => {
    let answer = 0;

    let left = 1, right = distance, mid = 0;

    while(left <= right){
        let cnt = 0;
        let prev = numbers[0];

        mid = Math.floor((left + right) / 2);

        for(let i = 1; i < N; i++){
            if(numbers[i] - prev < mid){
                cnt++;
            }
            else{
                prev = numbers[i];
            }
        }

        if(cnt <= n){
            answer = mid > answer ? mid : answer;
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }

    return answer;
}

let distance = numbers[N - 1];
let n = N - C;

console.log(binarySearch(distance, numbers, n));