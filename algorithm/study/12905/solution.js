function solution(board){
    let answer = 0;
    const xLength = board.length;
    const yLength = board[0].length;

    const visit = [];
    for(let i = 0; i < xLength; i++){
        visit.push(new Array(yLength));
    }

    const findSquare = (x, y) => {
        for(let d = 0;;d++){
            if(x + d === xLength || y + d === yLength){
                for(let xx = x; xx < x + d; xx++){
                    for(let yy = y; yy < y + d; yy++){
                        visit[xx][yy] = 1;
                    }
                }
    
                return Math.pow(d, 2);
            }
    
            let xi = -1, yi = -1;
    
            for(let i = y; i <= y + d; i++){
                if(board[x + d][i] === 0) yi = i;
            }
            for(let i = x; i < x + d; i++){
                if(board[i][y + d] === 0) xi = i;
            }
    
            for(let xx = x; xx < x + d; xx++){
                for(let yy = y; yy <= yi; yy++){
                    visit[xx][yy] = 1;
                }
            }
    
            for(let xx = x; xx <= xi; xx++){
                for(let yy = y; yy < y + d; yy++){
                    visit[xx][yy] = 1;
                }
            }
    
            if(xi !== -1 || yi !== -1) return Math.pow(d, 2);
        }
    }

    for(let x = 0; x < xLength; x++){
        for(let y = 0; y < yLength; y++){
            if(board[x][y] === 1 && visit[x][y] === undefined) answer = Math.max(answer, findSquare(x,y,0));
        }
    }

    return answer;
}

const a = [];
for(let i = 0; i < 10000; i++){
    a.push(Array.from({length:1000}, (v, idx) => {
        return 0;
    }));
}

a[0][0] = 1;

const input = [[1,0,1],[0,1,0],[1,0,1]];

console.log(solution(a));