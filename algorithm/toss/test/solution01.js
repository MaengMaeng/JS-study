/**
 * 나이를 숫자로 입력받고, 연령대 그룹을 문자열로 반환하는 함수
 * @param {number} age 연령
 * @returns {string} 연령대
 */
function printAgeGroup(age) {
	// 이 함수를 구현해주세요.
	return age < 10 ? '10대 미만' : age >= 90 ? '90대 이상' : ((age - age%10) + '대');
}