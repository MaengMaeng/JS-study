function solution(numbers) {
    numbers.sort((a,b) => {
        return `${b}${a}`-`${a}${b}`;
    })

    return numbers[0] === 0 ? '0' : numbers.join('');
}

let test = [6, 10, 2];
test = [34,30];
test = [30, 34];
test = [34, 30, 3];
test = [3, 30, 34, 5, 9];
test = [998,997,996,995,994,993,999,992,991,990];
// test = [1, 10, 100, 1000, 0]
// test = [121, 12]
test = [0,0,0];
console.log(solution(test));