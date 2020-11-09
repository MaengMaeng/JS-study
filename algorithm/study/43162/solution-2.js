function solution(n, computers) {
    let answer = 0;

    const visit = Array.from({length:n}, () => -1);

    const dfs = (i, k) => {
        for(let j = 0; j < n; j++){
            if(visit[j] === -1 && computers[i][j] === 1){
                visit[j] = k;
                dfs(j,k);
            }
        }
    }

    for(let i = 0; i < n; i++){
        if(visit[i] === -1){
            answer++;
            dfs(i, i);
        }
    }

    return answer;
}

const input = [3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]	];

console.log(solution(...input));