function solution(s) {
    let answer = '';

    let stringToArray = s.split('');
    stringToArray.sort();
    stringToArray.reverse();

    answer = stringToArray.join('');

    return answer;
}