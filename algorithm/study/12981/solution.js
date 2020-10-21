function solution(n, words) {
    let answer = [0,0];

    const usedWords = [words[0]];

    let prevWord = words[0];

    for(let i = 1; i < words.length; i++){
        if(prevWord.charAt(prevWord.length - 1) !== words[i].charAt(0) || usedWords.indexOf(words[i]) !== -1){
            return [i%n + 1, Math.floor(i/n) + 1];
        }
        
        prevWord = words[i];
        usedWords.push(words[i]);
    }


    return answer;
}

const input = [3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]	];

console.log(solution(...input));