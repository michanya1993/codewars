
//Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
//array = [[1,2,3],
//         [4,5,6],
//         [7,8,9]]
//snail(array) #=> [1,2,3,6,9,8,7,4,5]
//
//array = [[1,2,3],
//         [8,9,4],
//         [7,6,5]]
//snail(array) #=> [1,2,3,4,5,6,7,8,9]

function subArray( array ) {
    const len = array.length;
    const arr = [];
    for(let i=0; i<len; i++) {
        const line = [];
        for(let j=0; j<len; j++) {
            if( i != 0 && i !=len -1 && j != 0 && j !=len -1  ) {
                line.push(array[i][j]);
            }
        }
        if( line.length !=0 ) {
            arr.push(line);
        }
    }
    return arr;
}

function snail(array) {
  const layers = Math.floor(array[0].length / 2) + (array[0].length % 2);

  const result = [];

  for(let i=0; i<=layers-1; i++) {
    const len = array.length;
    let line = [];
    if (len === 1) {
        line=[array[0][0]]
    }
    else {
        const colFirst = [];
        const colLast = [];
        for(let i=1; i<len-1; i++) {
            colFirst.push(array[i][0]);
            colLast.push(array[i][len-1]);
        }

        line = [
            ...array[0],
            ...colLast,
            ...array[len-1].reverse(),
            ...colFirst.reverse()
          ];
    }
    result.push(...line);
    array = subArray(array);
  }
  return result;
}

array = [[1,2,3,4],
         [8,9,4,5],
         [7,6,5,7],
         [7,6,5,7],
         ]


//console.log(snail([[]]))
console.log(snail(array))

//console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]) )//, [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
//console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]))//, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);