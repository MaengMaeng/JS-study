function solution(n, computers) {
    let answer = 0;

    const network = Array.from({length:n}, () => -1);

    const dfs = (i) => {
        for(let j = 0; j < n; j++){
            if(network[j] === -1 && computers[i][j] === 1){
                network[j] = network[i];
                dfs(j);
            }
        }
    }

    for(let i = 0; i < n; i++){
        if(network[i] === -1){
            network[i] = i;
            answer++;
            dfs(i);
        }
    }

    return answer;
}

const input = [3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]	];

console.log(solution(...input));