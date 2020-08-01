/**
 * @param {Date} birthDate 사용자의 생년월일
 * @param {Date} currentDate 현재 날짜
 * @returns {string} 사용자의 생년월일과 날짜를 담은 string
 */
function getAge(birthDate, nowDate) {
    // 이 함수를 구현해주세요.
    let x, y;

    let birthDateArr = birthDate.toISOString().slice(0,19).split(/:| |T|-/);
    let nowDateArr = nowDate.toISOString().slice(0,19).split(/:| |T|-/);

    y = nowDateArr[0] - birthDateArr[0] + 1;
    x = y-1;
    for(let i = 1; i < birthDateArr.length; i++){
        if(nowDateArr[i] !== birthDateArr[i]){
            x = nowDateArr[i] > birthDateArr[i] ? y - 1 : y - 2;
            break;
        }
    }
    return `만 ${x}세, 한국나이 ${y}세`;
}

let a = new Date('1993-12-27 00:00:00');
let b = new Date('2020-08-31 00:00:00');
console.log(getAge(a,b));