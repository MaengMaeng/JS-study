/**
 * @param {Date} birthDate 사용자의 생년월일
 * @param {Date} currentDate 현재 날짜
 * @returns {string} 사용자의 생년월일과 날짜를 담은 string
 */
function getAge(birthDate, nowDate) {
	// 이 함수를 구현해주세요.
    let x, y;

    y = nowDate.getYear() - birthDate.getYear() + 1;
		
    birthDate.setYear(nowDate.getYear() + 1900);
	
    x = nowDate.getTime() > birthDate.getTime() ? y - 1 : y - 2;
    
    // console.log(nowDate.getYear(), birthDate.getYear());
    console.log(birthDate.toISOString());

	return `만 ${x}세, 한국나이 ${y}세`;
}

let a = new Date('1993-12-27 00:00:00');
let b = new Date('2020-08-31 00:00:00');

console.log(getAge(a,b))