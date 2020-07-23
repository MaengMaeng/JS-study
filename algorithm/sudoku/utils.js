export default function matrix(length, height, initial){
    let l, h, mat = [];

    for(h = 0; h < height; h++){
        mat.push([]);

        for(l = 0; l < length; l++){
            mat[l].push(initial);
        }
    }
}

export default function array(length, initial){
    let l, array = [];

    for(l = 0; l < length; l++){
        array[l] = initial;
    }

    return array;
}