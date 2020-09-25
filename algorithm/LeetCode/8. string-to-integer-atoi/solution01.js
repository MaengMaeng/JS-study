/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = Math.pow(-2, 31);
    
    const newString = str.replace(/^\s*/, '');

    const negativeRegx = /^(\s*\-[0-9]+)/;
    const positiveRegx = /^(\s*\+{0,1}[0-9]+)/;
    
    let negative = newString.match(negativeRegx);
    let positive = newString.match(positiveRegx);
    
    let result = (negative || positive || [0])[0] * 1;
    
    if(result > INT_MAX) return INT_MAX;
    if(result < INT_MIN) return INT_MIN;
    
    return result;
};

console.log(myAtoi(' w -1 1'));