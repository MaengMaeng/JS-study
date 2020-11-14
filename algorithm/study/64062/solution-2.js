function solution(stones, k) {
    let answer = Infinity;

    const length = stones.length;
    const heap = {
        arr:[Infinity],
        size:0,
        max(){
            return this.arr[1];
        },
        add(element){
            this.arr.push(element);
            this.size++;

            let index = this.size;

            while(this.arr[Math.floor(index/2)] < this.arr[index]){
                this.swap(index, Math.floor(index/2));

                index = Math.floor(index/2);
            }
        },
        remove(element){
            let index = this.arr.indexOf(element);

            if(this.size === index){
                this.arr.pop();
                this.size--;
                return;
            }

            this.arr[index] =  this.arr.pop();
            
            while(index < this.size){
                let left = this.arr[index * 2] || -1;
                let right = this.arr[index * 2 + 1] || -1;
                
                let leafIndex = left > right ? (index * 2) : ((index * 2) + 1);
                let leaf = left > right ? left : right;
                
                if(leaf > this.arr[index]){
                    this.swap(index, leafIndex);

                    index = leafIndex;
                }
                else{
                    break;
                }
            }

            this.size--;
        },
        swap(a, b){
            let swap = this.arr[a];
            this.arr[a] = this.arr[b];
            this.arr[b] = swap;
        }
    }

    for(let i = 0; i < k; i++){
        heap.add(stones[i]);
    }

    for(let i = k; i <= length; i++){
        answer = answer < heap.arr[1] ? answer : heap.arr[1];

        heap.remove(stones[i - k]);
        heap.add(stones[i]);
    }

    return answer;
}

// const input = [[2, 4, 5, 3, 2, 1, 4, 2, 5, 1]		, 3];

// console.log(solution(...input));