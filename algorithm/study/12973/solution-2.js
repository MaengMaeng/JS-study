function solution(s){
    const chars = s.split('');
    const queue = [chars[0]];
    
    for(let i = 1; i < chars.length; i++){
        if(queue.length === 0 || queue[queue.length - 1] !== chars[i]) queue.push(chars[i]);
        else queue.pop();
    }

    return queue.length ? 0 : 1;
}