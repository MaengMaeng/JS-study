function solution(clothes) {
    let c = [], c_count = [];
    let clothes_length = clothes.length;

    for(let i = 0; i < clothes_length; i++){
        let cloth = clothes[i];

        let index = c.indexOf(cloth[1]);
        if(index === -1){
            c.push(cloth[1]);
            c_count.push(1);
        } 
        else{
            c_count[index]++;
        }
    }

    let answer = 1;

    for(let i = 0; i < c_count.length; i++){
        answer *= (c_count[i] + 1);
    }

    return answer - 1;
}

// let test = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
// console.log(solution(test));