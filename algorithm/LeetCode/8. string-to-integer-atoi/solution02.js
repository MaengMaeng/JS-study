var myAtoi = function(str) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = Math.pow(-2, 31);
    
    const charArray = str.split('');
    
    let result = '';
    
    for(let i = 0; i < charArray.length; i++){
        if(charArray[i].match(/[\s\+\-0-9]/)){
            if(result !== '' && (charArray[i] === ' ' || charArray[i] === '-' || charArray[i] === '+')) break;
            if(charArray[i] !== ' ') result += charArray[i];
        }
        else{
            break;
        }
    }
    
    result = result*1 || 0;
    
    if(result > INT_MAX) return INT_MAX;
    if(result < INT_MIN) return INT_MIN;
    
    return result;
};

console.log(myAtoi('+4193+w'));