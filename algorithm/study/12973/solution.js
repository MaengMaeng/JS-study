function solution(s){
    const chars = s.split('');
    const queue = [chars[0]];
    
    let length = 1;

    for(let i = 1; i < chars.length; i++){
        if(length === 0 || queue[length - 1] !== chars[i]) {
            queue.push(chars[i]);
            length++;
        }
        else{
            queue.pop();
            length--;
        }
    }

    return length ? 0 : 1;
}