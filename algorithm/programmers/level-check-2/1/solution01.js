function solution(land){
    let r = land.length;

    let dp = new Array(r+1);

    for(let i = 0; i < r+1; i++){
        dp[i] = Array.from({length: 4}, () => 0);
    }

    for(let i = 0; i < 4; i++){
        dp[0][i] = land[0][i];
    }

    for(let i = 1; i < r; i++){
        for(let j = 0; j < 4; j++){
            for(let k = 0; k < 4; k++){
                if(j !== k){
                    dp[i][j] = Math.max(dp[i][j], land[i][j] + dp[i-1][k]);
                }
            }
        }
    }

    return Math.max.apply(null, dp[r-1]);
}