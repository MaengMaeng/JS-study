function solution(board){
    let answer = 0;

    const xLength = board.length;
    const yLength = board[0].length;

    const square = [];
    for(let i = 0; i <= xLength; i++){
        square.push(new Array(yLength+1));
    }

    for(let x = 0; x <= xLength; x++){
        square[x][0] = 0;
    }
    for(let y = 0; y <= yLength; y++){
        square[0][y] = 0;
    }

    for(let x = 1; x <= xLength; x++){
        for(let y = 1; y <= yLength; y++){
            if(board[x - 1][y - 1] === 1){
                square[x][y] = Math.min(Math.min(square[x - 1][y - 1], square[x - 1][y]), square[x][y - 1]) + 1;
                answer = Math.max(answer, square[x][y]);
            }
            else{
                square[x][y] = 0;
            }
        }
    }

    return Math.pow(answer, 2);
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