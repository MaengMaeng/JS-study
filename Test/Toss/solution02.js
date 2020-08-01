/**
 * @param {number} peopleCount 금액을 나눌 사람의 수
 * @param {number} amount 나눌 금액
 * @returns {number[]} 각자가 부담할 금액을 나타내는 숫자의 배열
 */
function splitDutchPayAmount(peopleCount, amount) {
    /* 이 함수를 구현해주세요. */
    let remainder = amount%peopleCount;
    let payment = (amount - remainder) / peopleCount;
    let answer = Array.from({length:peopleCount}, () => payment);
    answer[0] += remainder;
    
	return answer;
}
