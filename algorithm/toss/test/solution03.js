/**
 * @param {string} type 연산의 종류 (add 또는 multiply)
 * @param {number[]} operands 피연산자
 * @returns {number} 연산 결과
 */
function calculate(type, operands) {
	// 함수를 구현해주세요.
	let reducer = type == 'add' ? (a, c) => a + c : (a, c) => a * c;
	
	return operands.reduce(reducer);
}

/*
{"type":"add","operands":[1,2]}
{"type":"multiply","operands":[1,2,3]}
{"type":"add","operands":[2,3,4]}
{"type":"multiply","operands":[9,2,3]}
{"type":"add","operands":[100,120,2]}
{"type":"add","operands":[0,2]}
*/