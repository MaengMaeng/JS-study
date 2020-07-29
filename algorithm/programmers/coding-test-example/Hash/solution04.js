function solution(genres, plays) {
    const obj1 = {};
    const obj2 = {};

    for(let i = 0; i < genres.length; i++){
        obj1[genres[i]] = (obj1[genres[i]] || 0) + plays[i];

        obj2[genres[i]] = (obj2[genres[i]] || []);
        obj2[genres[i]].push({'num':i, 'plays':plays[i]});
    }

    let arr = Object.keys(obj1).map((key) => {return {"genre":key, "plays":obj1[key]}});
    arr.sort((a, b) => {
        return a["plays"] < b["plays"] ? 1 : a["plays"] > b["plays"] ? -1 : 0;
    })

    let answer = [];

    for(let i = 0; i < arr.length; i++){
        obj2[arr[i]["genre"]].sort((a,b) => {
            return a["plays"] < b["plays"] ? 1 : a["plays"] > b["plays"] ? -1 : 0;
        })

        for(let j = 0; j < Math.min(obj2[arr[i]["genre"]].length, 2); j++){
            answer.push(obj2[arr[i]["genre"]][j]["num"]);
        }
    }

    return answer;
}

let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays));