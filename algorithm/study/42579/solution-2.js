function solution(genres, plays) {
    const map = {};
    const pqMap = {};

    for(let i = 0; i < genres.length; i++){
        map[genres[i]] = (map[genres[i]] || 0) + plays[i];
        // 장르의 총 플레이 수

        pqMap[genres[i]] = (pqMap[genres[i]] || []);
        // 노래 정보를 저장할 배열

        pqMap[genres[i]].push({'num':i, 'plays':plays[i]});
        // 노래 정보 : 고유 번호, 플레이 수 저장
    }

    let arr = Object.keys(map).map((key) => {return {"genre":key, "plays":map[key]}});
    // {장르, 총 플레이수} 를 저장한 배열

    arr.sort((a, b) => b['plays'] - a['plays']);
    // 플레이 순을 기준으로 내림차순으로 정렬

    let answer = [];

    for(let i = 0; i < arr.length; i++){ // 장르의 수
        pqMap[arr[i]["genre"]].sort((a, b) => b['plays'] - a['plays']);
        // 장르마다 노래, 이건 정렬이 안되있음
        // 플레이수를 기준으로 내림차순 정렬

        for(let j = 0; j < Math.min(pqMap[arr[i]["genre"]].length, 2); j++){ // 최대 2번
            answer.push(pqMap[arr[i]["genre"]][j]["num"]);
        }
    }

    return answer;
}