/**
 * 숫자를 한국어 숫자로 바꿔주는 함수
 * @param {number} num 입력되는 숫자
 * @returns {string} 한국어로 바뀐 숫자
 */
function formatToKoreanNumber(num) {
    /* 이 함수를 구현해주세요 */
    let number = num, currentNum;
    let arr = [];
    let unit = ['', '만', '억'];

    for(let i = 0; i < 3; i++){
        currentNum = (number % 10000).toString();
        if(currentNum*1 > 0){
            arr.push((currentNum.length == 4 ? currentNum.substr(0,1) + ',' + currentNum.substr(1) : currentNum) + unit[i]);
        }
        else{
            if(i == 0) arr.push(0);
        }
        number = (number - (currentNum*1))/10000;        
    }

    arr.reverse();
	return arr.join(' ');
}

let a = 999999999999;
a = 0;
console.log(formatToKoreanNumber(a));