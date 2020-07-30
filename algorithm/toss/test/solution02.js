/**
 * @param {string} text 금액을 담고 있는 문자열
 * @returns {number} 문자열으로부터 뽑아낸 금액 숫자
 */
function getAmount(text) {
	// 이 함수를 구현해주세요.
	let reg = /[^0-9]/g
	return text.replace(reg,'')*1;
}