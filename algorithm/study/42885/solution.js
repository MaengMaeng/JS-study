function solution(people, limit) {
    let answer = 0;

    people.sort((a,b) => a - b);

    while(people.length > 0){
        let sum = people.pop() + (sum + people[0] <= limit) ? people.shift() : 0;
        
        answer++;
    }

    return answer;
}

// const input = [[70, 50, 80, 50]	, 100];
const input = [[10, 20, 30]	, 100];

console.log(solution(...input));