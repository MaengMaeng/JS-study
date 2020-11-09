function solution(genres, plays) {
    var answer = [];
    var obj1 = {}, obj2 = {};
    
    for (var i = 0; i < genres.length; i++) {
        obj1[genres[i]] = (obj1[genres[i]] || 0) + plays[i];
        obj2[genres[i]] = (obj2[genres[i]] || []);
        obj2[genres[i]].push({ 'num': i, 'plays': plays[i] });
    }

    var arr = Object.keys(obj1).map(function (key) { return { "genre": key, "plays": obj1[key] }; });

    arr.sort(function (a, b) {
        return a["plays"] < b["plays"] ? 1 : a["plays"] > b["plays"] ? -1 : 0;
    });

    for (var i = 0; i < arr.length; i++) {
        obj2[arr[i]["genre"]].sort(function (a, b) {
            return a["plays"] < b["plays"] ? 1 : a["plays"] > b["plays"] ? -1 : 0;
        });

        for (var j = 0; j < Math.min(obj2[arr[i]["genre"]].length, 2); j++) {
            answer.push(obj2[arr[i]["genre"]][j]["num"]);
        }
    }

    return answer;
}