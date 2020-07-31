function solution(citations) {
    let arr = citations.slice();

    let min = Math.min.apply(null, arr);
    if(min >= arr.length){
        return arr.length;
    }

    arr.sort((a,b) => {
        return b-a;
    })

    for(let i = 0; i < arr.length; i++){
        if(i+1 > arr[i]){
            return i;
        }
    }

    return 0;
}

let test;
test = [0,1,2];
test = [3,0,6,1,5];
test = [0];
test = [5,5,5,4];
console.log(solution(test));