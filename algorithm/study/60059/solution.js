function solution(key, lock) {
    const rotate = (key) => {
        let x = key.length;
        let y = key[0].length;

        const newKey = new Array(y);

        for(let i = 0; i < y; i++){
            newKey[i] = new Array(x);    
        }

        for(let i = 0; i < x; i++){
            for(let j = 0; j < y; j++){
                newKey[j][(x - 1) - i] = key[i][j];
            }
        }

        return newKey;
    }

    const check = (key, lock, xx, yy) => {
        let x = lock.length;
        let y = lock[0].length;

        let k;

        for(let i = 0; i < x; i++){
            for(let j = 0; j < y; j++){
                try {
                    k = key[i + xx][j + yy] || 0;
                } catch (error) {
                    k = 0;
                }
                
                if(lock[i][j] !== 1) return false;
            }
        }

        return true;
    }

    let rotateKey = key.slice();

    for(let t = 0; t < 4; t++){
        let x = rotateKey.length;
        let y = rotateKey[0].length;

        for(let i = 1 - x; i < x; i++){
            for(let j = 1 - y; j < y; j++){
                if(check(rotateKey, lock, i, j)) return true;
            }
        }

        rotateKey = rotate(rotateKey);
    }

    return false;
}

// const input = [[[0, 0, 0], [1, 0, 0], [0, 1, 1]]	, [[1, 1, 1], [1, 1, 0], [1, 0, 1]]	];
// const input = [[[1, 0,0], [1, 0,0], [1, 0,0]]	, [[1, 1, 1], [1, 1, 1], [1, 1, 0]]	];
// const input = [[[1,2],[3,4]]	, [[1, 1, 1], [1, 1, 1], [1, 1, 0]]	];
const input = [[[0,1,2,3]]	, [[1, 1, 1], [1, 1, 1], [1, 1, 0]]	];
console.log(solution(...input));;