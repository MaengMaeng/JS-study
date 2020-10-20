function solution(n, results) {
    let answer = 0;

    class Node{
        constructor(){
            this.win = [];
            this.lose = [];
        }
    }

    const players = [];
    for(let i = 0; i < n; i++){
        players.push(new Node());
    }

    for(let i = 0, r; r = results[i]; i++){
        players[r[0] - 1].win.push(r[1] - 1);
        players[r[1] - 1].lose.push(r[0] - 1);
    }

    for(let i = 0; i < n; i++){
        let node = players[i];
        let queue = node.win.slice();

        while(queue.length > 0){
            let player = players[queue.shift()];

            for(let j = 0; j < player.win.length; j++){
                if(node.win.indexOf(player.win[j]) === -1){
                    node.win.push(player.win[j]);
                    queue.push(player.win[j]);
                    players[player.win[j]].lose.push(i);
                }
            }
        }
    }

    for(let i = 0; i < n; i++){
        if(players[i].win.length + players[i].lose.length === n - 1){
            answer++;
        }
    }

    return answer;
}

const input = [5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]	];
// const input = [4, [[1, 2], [2, 3], [3, 4]]	];

console.log(solution(...input));