/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0, index = 0;
    let length = s.length;
    let subStr = '';
    const charList = s.split('');
    
    
    for(let i = 0; i < length; i++){
        if((index = subStr.indexOf(charList[i])) !== -1){
            maxLength = Math.max(maxLength, subStr.length);
            subStr = subStr.substring(index + 1);
        }
        
        subStr += charList[i];
    }
    
    return Math.max(maxLength, subStr.length);
};