/**
 * @param {Date} currentDate 현재 시간
 * @param {Date} endDate 종료 시간
 * @returns {string} 남은 시간을 나타내는 문자열
 */
function getDistance(currentDate, endDate) {
    // getDistance 함수를 구현하세요	
    
    console.log(endDate.getTime() - currentDate.getTime());
    console.log(currentDate);
    console.log(new Date(endDate.getTime() - currentDate.getTime()));
	return '';
}

let a = new Date('2020-08-30 23:58:59');
let b = new Date('2020-08-31 00:00:00');

console.log(getDistance(a,b))