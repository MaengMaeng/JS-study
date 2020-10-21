function solution(land, height) {
    var answer = 0;

    class Node{
        constructor(v1, v2, weight){
            this.v1 = v1;
            this.v2 = v2;
            this.weight = weight;
        }
    }

    const nodes = [];
    const n = land.length;

    for(let x = 0; x < n; x++){
        for(let y = 0; y < n; y++){
            let currentVertex = x * n + y;
            let rightVertex = currentVertex + 1;
            let downVertex = (x + 1) * n + y;

            if(y + 1 < n){
                let weight = Math.abs(land[x][y] - land[x][y + 1]) <= height ? 0 : Math.abs(land[x][y] - land[x][y + 1]);
                nodes.push(new Node(currentVertex, rightVertex, weight));
            }

            if(x + 1 < n){
                let weight = Math.abs(land[x][y] - land[x + 1][y]) <= height ? 0 : Math.abs(land[x][y] - land[x + 1][y]);
                nodes.push(new Node(currentVertex, downVertex, weight));
            }
        }
    }

    nodes.sort((a,b) => a.weight - b.weight);
    
    const find = (node) => {
        if(parent[node] != node){
            parent[node] = find(parent[node]);
        }
        
        return parent[node];
    }
    
    const union = (node1, node2) => {
        let parent1 = find(node1);
        let parent2 = find(node2);
        
        if(rank[parent1] > rank[parent2]){
            parent[parent2] = parent1;
        }
        else{
            parent[parent1] = parent2;
            if(rank[parent1] == rank[parent2]){
                rank[parent2] += 1;
            }
        }
    }
    
    const parent = Array.from({length:n*n}, (v, i) => i);
    const rank = Array.from({length:n*n}, () => 0);

    for(let i = 0; i < nodes.length; i++){
        let {v1, v2, weight} = nodes[i];

        if(find(v1) != find(v2)){
            union(v1, v2);
            answer += weight;
        }
    }

    return answer;
}

// const input = [[[1, 4, 8, 10], [5, 5, 5, 5], [10, 10, 10, 10], [10, 10, 10, 20]]	, 3];
const input = [[[10, 11, 10, 11], [2, 21, 20, 10], [1, 20, 21, 11], [2, 1, 2, 1]]	, 1];
console.log(solution(...input));