// commaizeNumber 함수를 구현하세요.
// num은 Number 타입으로 들어온다고 가정합니다.
function commaizeNumber(num) {
    let numToArr = num.toString().split('');
    let remainder = numToArr.length % 3;
    
    return numToArr.map((v, i) => (i+1)%3 == remainder ? v+',' : v).join('').slice(0, -1);
}
