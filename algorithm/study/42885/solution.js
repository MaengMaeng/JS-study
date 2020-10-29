function solution(people, limit) {
    let answer = 0;

    people.sort((a,b) => a - b);

    let left = 0;
    let right = people.length - 1;

    while(people.length > 0){
        let sum = people.pop();

        while(sum + people[0] <= limit) sum += people.shift();
        
        answer++;
    }

    return answer;
}

// const input = [[70, 50, 80, 50]	, 100];
const input = [[70, 80, 50]	, 100];

console.log(solution(...input));