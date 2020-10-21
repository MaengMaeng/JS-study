function solution(land, height) {
    let answer = 0;

    const nodes = [];
    const n = land.length;

    // 간선으로 만드는 부분
    // weight가 height이하면 0으로 처리
    for(let x = 0; x < n; x++){
        for(let y = 0; y < n; y++){
            if(y + 1 < n) nodes.push({v1:x * n + y, v2:x * n + y + 1, weight:Math.abs(land[x][y] - land[x][y + 1]) <= height ? 0 : Math.abs(land[x][y] - land[x][y + 1])});
            if(x + 1 < n) nodes.push({v1:x * n + y, v2:(x + 1) * n + y, weight:Math.abs(land[x][y] - land[x + 1][y]) <= height ? 0 : Math.abs(land[x][y] - land[x + 1][y])});
        }
    }

    // weight를 기준으로 오름차순 정렬
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
        
        parent[parent2] = parent1;
    }
    
    const parent = Array.from({length:n*n}, (v, i) => i);

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