function solution(numbers) {
    numbers.sort((a, b) => {
        if(a - b === 0) return 0;

        let aa = (a+'').split('');
        let bb = (b+'').split('');

        let i;
        for(i = 0; i < aa.length && i < bb.length; i++){
            if(aa[i] < bb[i]){
                return 1;
            }
            else if(aa[i] > bb[i]){
                return -1;
            }
        }

        if(aa.length > bb.length){
            for(let j = i; j < aa.length; j++){
                if(bb[i-1] > aa[j]){
                    return 1;
                }
                else if(bb[i-1] < aa[j]){
                    return -1;
                }
            }
        }
        else{
            for(let j = i; j < bb.length; j++){
                if(bb[j] > aa[i-1]){
                    return 1;
                }
                else if(bb[j] < aa[i-1]){
                    return -1;
                }
            }
        }
    })

    return numbers.join('');
}

let test =     [6, 10, 2];
test = [34,30];
test = [30, 34];
test = [3, 30, 34, 5, 9]
test = [12, 1223, 1];
console.log(solution(test));