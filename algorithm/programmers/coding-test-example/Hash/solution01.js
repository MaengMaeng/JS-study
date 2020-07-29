function solution(participant, completion) {
    let answer = participant.slice();
    let comp = completion.slice();

    answer.sort();
    comp.sort();

    for(;answer.length > 0;){
        let a = answer.pop();
        let b = comp.pop();

        if(a !== b) {
            return a;
        }
    }

    return answer.pop();
}

let test1 = ["leo", "kiki", "eden"];
let test2 = ["eden", "kiki"];

console.log(solution(test1, test2));