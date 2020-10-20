function solution(n, edge) {
    let answer = 0, dist;

    // 그래프를 그리고
    const graph = [];
    for(let i = 0; i < n; i++){
        graph.push([]);
    }
    for(let i = 0; i < edge.length; i++){
        graph[edge[i][0] - 1].push(edge[i][1] - 1);
        graph[edge[i][1] - 1].push(edge[i][0] - 1);
    }

    // 거리 저장하는 배열
    const dists = Array.from({length : n}, () => Infinity);
    dists[0] = 1;

    const queue = [0];

    while(queue.length > 0){
        let node = queue.shift();

        for(let i = 0; i < graph[node].length; i++){
            if(dists[graph[node][i]] > dists[node] + 1){
                dists[graph[node][i]] = dists[node] + 1;
                queue.push(graph[node][i]);
                dist = dists[node] + 1;
            }
        }
    }

    for(let i = 0; i < dists.length; i++){
        if(dists[i] === dist) answer++;
    }

    return answer;
}

const input = [6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	 ];
// const input = [7, [[3, 6], [4, 3], [3, 2], [1, 2], [2, 4], [5, 2], [6,7], [5,7]]	 ];
// const input = [3, [[1,2], [1,3]]];

console.log(solution(...input));