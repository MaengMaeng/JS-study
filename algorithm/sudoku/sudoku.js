class Node{
    constructor(row, size, column, up, down, left, right){
        this.row = row;
        this.size = size;
        this.column = column;
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
    }
}

function matrix(length, height, initial){
    let l, h, mat = [];

    for(h = 0; h < height; h++){
        mat.push([]);

        for(l = 0; l < length; l++){
            mat[h].push(initial);
        }
    }

    return mat;
}

function array(length, initial){
    let l, array = [];

    for(l = 0; l < length; l++){
        array[l] = initial;
    }

    return array;
}

function dlx_cover(c){
    c.right.left = c.left;
    c.left.right = c.right;

    let it, jt;
    for(it = c.down; it != c; it = it.down){
        for(jt = it.right; jt != it; jt = jt.right){
            jt.down.up = jt.up;
            jt.up.down = jt.down;
            jt.column.size--;
        }
    }
}

function dlx_uncover(c){
    let it, jt;
    for(it = c.up; it != c; it = it.up){
        for(jt = it.left; jt != it; jt = jt.left){
            jt.down.up = jt;
            jt.up.down = jt;
            jt.column.size++;
        }
    }

    c.right.left = c;
    c.left.right = c;
}

function dlx_search(head, k, answer){
    if(head.right == head){
        return 1;
    }

    let now = null;
    let low = 1 << 30;

    let it, jt;
    for(it = head.right; it != head; it = it.right){
        if(it.size < low){
            if(it.size == 0){
                return 0;
            }

            low = it.size;
            now = it;
        }
    }

    dlx_cover(now);

    for(it = now.down; it != now; it = it.down){
        answer.push(it.row);
        for(jt = it.right; jt != it; jt = jt.right){
            dlx_cover(jt.column[0]);
        }

        if(dlx_search(head, k+1, answer)){
            return 0;
        }
        else{
            answer.pop();
            for(jt = it.left; jt != it; jt = jt.left){
                dlx_uncover(jt.column[0]);
            }
        }  
    }

    console.log(answer);
    dlx_uncover(now);
    return 0;
}

function dlx_solve(matrix){
    const n = 9;
    let l, column = [];
    for(l = 0; l < 9; l++){
        column.push(new Node());
    }

    let head = new Node();
    head.right = column[0];
    head.left = column[n - 1];

    let i;
    for(i = 0; i < n; ++i){
        column[i].size = 0;
        column[i].up = column[i];
        column[i].down = column[i];
        if(i === 0) {
            column[i].left = head;
        }
        else{
            column[i].left = column[i - 1]
        }

        if(i === n - 1){
            column[i].right = head;
        }
        else{
            column[i].right = column[i + 1]
        }
    }

    let nodes = [];
    for(i = 0; i < 489; ++i){
        let last = null;

        for(j = 0; j < n; ++j){
            if(matrix[i][j]){
                let now = new Node();
                now.row = i;
                now.column = column[j];
                now.up = column[j].up;
                now.down = column[j];

                if(last){
                    now.left = last;
                    row.right = last.right;
                    last.right.left = now;
                    last.right = now;
                }
                else{
                    now.left = now;
                    now.right = now;
                }

                column[j].up.down = now;
                column[j].up = now;
                column[j].size++;
                last = now;
                nodes.push(now);
            }
        }
    }

    let answer = [];
    dlx_search(head, 0, answer);
    return answer;
}

function solution(s){
    let mat = [], data = [];
    let board = matrix(9,9,0);

    let i, j, k, grid;

    for(i = 0; i < 9; i++){
        for(j = 0; j < 9; j++){
            grid = s[i][j];

            if(grid !== 0){
                k = grid - 1;
                row = array(324, 0);
                row[i * 9 + j] = 1;
                row[81 + i * 9 + k] = 1;
                row[81 * 2 + j * 9 + k] = 1;
                row[81 * 3 + (i / 3 * 3 + j / 3) * 9 + k] = 1;
                mat.push(row);
                data.push([i,j,k]);
            }
            else{
                for(k = 0; k < 9; ++k){
                    row = array(324, 0);
                    row[i * 9 + j] = 1;
					row[81 + i * 9 + k] = 1;
					row[81 * 2 + j * 9 + k] = 1;
                    row[81 * 3 + (i / 3 * 3 + j / 3) * 9 + k] = 1;
                    mat.push(row);
                    data.push([i, j, k]);
                }
            }
        }
    }

    let answer = dlx_solve(mat);

    for(let u = 0; u < answer.length; u++){
        board[data[u][0]][data[u][1]] = data[u][2];
    }
    
    print(board)
    return board;
}


function print(k){
    for(let i = 0; i < 9; i++){
        console.log(k[i]);
    }
}

// let s = [
// [3,0,0,2,4,0,0,0,7],
// [0,0,7,0,0,0,5,0,0],
// [0,4,0,9,0,0,0,1,0],
// [0,0,1,0,7,0,0,9,0],
// [0,0,3,1,0,9,4,0,0],
// [0,5,0,0,6,0,3,0,0],
// [0,2,0,3,0,0,0,4,0],
// [0,0,4,0,0,0,1,0,0],
// [5,0,0,4,8,0,0,0,9],
// ];

let s = [
    [0,0,0,8,0,1,0,0,2],
    [0,5,0,7,0,0,8,0,0],
    [0,0,0,0,6,2,0,9,0],
    [7,0,9,0,0,0,0,3,6],
    [0,0,5,0,0,0,7,0,0],
    [3,2,0,0,0,0,1,0,8],
    [0,4,0,5,7,0,0,0,0],
    [0,0,2,0,0,3,0,7,0],
    [6,0,0,1,0,4,0,0,0]
];

let s = [
    [0,7,0,0,0,0,1,0,0],
    [0,9,0,0,4,0,5,0,0],
    [8,0,0,2,0,3,0,0,0],
    [0,5,3,8,0,9,0,0,4],
    [6,0,0,3,0,5,0,0,8],
    [2,0,0,4,0,7,3,1,0],
    [0,0,0,5,0,6,0,0,3],
    [0,0,5,0,8,0,0,9,0],
    [0,0,8,0,0,0,0,5,0]
    ];
    
solution(s);