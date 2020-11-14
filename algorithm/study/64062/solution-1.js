function solution(stones, k) {
    let answer = Infinity;

    const length = stones.length;
    const Array = {
        arr:[],
        max(){
            return this.arr[0];
        },
        add(element){
            this.arr.push(element);
            this.arr.sort((a,b) => b-a);
        },
        remove(element){
            this.arr.splice(this.arr.indexOf(element), 1);
        }
    }

    for(let i = 0; i < k; i++){
        Array.add(stones[i]);
    }

    for(let i = k; i <= length; i++){
        answer = answer < Array.max() ? answer : Array.max();

        Array.remove(stones[i - k]);
        Array.add(stones[i]);
    }

    return answer;
}

const input = [[0,0,0]	, 3];

console.log(solution(...input));