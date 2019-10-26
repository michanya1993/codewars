function generateHashtag (str) {
    const rezult = str
        .split(' ')
        .filter(a=>a !== '')
        .map(word => word.substr(0, 1).toUpperCase() + word.substr(1))
        .join('');
        
    if( rezult.length < 140 && rezult !== '' )
        return '#' + rezult;
    else
        return false;  
}

// console.log(generateHashtag("code" + " ".repeat(140) + "wars"))
// console.log(generateHashtag(" Hello there thanks for trying my Kata"))
// console.log(generateHashtag("dfsdfasda"+"a".repeat(138)))


// Дан массив целых чисел и целое число k. Нужно определить, есть ли в массиве два числа, сумма которых равна k . 


// Пример:

// Вход: nums = [10, 15, 3, 7], k = 17
// Выход: true
// Примечания
// В качестве решения предоставьте функцию следующего вида:

// /** @returns Boolean */  
module.exports = function(nums, k) {  
    // ваш код здесь
    for(i in nums) {
        const numA = nums[i];
        for(numB of nums.slice(i+1)) {
            if( numA + numB === k ) return true;
        }
    }
    return false;    
}


function test2(nums, k) {  
    // ваш код здесь
    for(let i=0; i<nums.length; i++) {
        const numA = nums[i];
        for(numB of nums.slice(i+1)) {
            console.log(numA , numB)
            if( numA + numB === k ) return true;
        }
    }
    return false;    
}

// console.log(test2([],  17))

// 10-15
// 10-3
// 10-7

// 15-3
// 15-7

// 3-7




// C. Объединение отсортированных массивов
// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод input.js
// Вывод output.json
// Вам даны два отсортированных целочисленных массива nums1 и nums2, нужно поместить все элементы nums2 в nums1 так чтобы элементы итогового массива остались отсортированными.
// Формат ввода
// [46,55,88,0,0,0,0] 3 [18,29,80,90] 4
// Примечания
// количество элементов в массивах nums1 и nums2 равны m и n соотвественно;
// можно считать, что в массиве nums1 зарезервированно место для всех элементов (n + m) и заполнены нулями;
// результат должен сохраниться в переменной nums1, результат функции явно возвращать не обязательно
/**  
 * @param {number[]} nums1 - первый отсортированный массив  
 * @param {number} m - количество значимых элементов в nums1  
 * @param {number[]} nums2 - второй отсортированный массив  
 * @param {number} n - количество элементов в nums2  
 * @return {void} Не возвращайте ничего, вместо этого модифицируйте nums1.  
 */  
module.exports = function merge(nums1, m, nums2, n) {  
   // ваш код здесь  
}


function test_2(nums1, m, nums2, n) {
    for(let i=0; i<nums1.length; i++) {
        if(i<=m) nums1.pop()
    }
    nums1.push(...nums2);
    nums1.sort();

    console.log(nums1)
}

function test3(nums1, m, nums2, n) {
    for(let i=0; i<nums1.length; i++) {
        if(m <= i) {
            nums1[i]=nums2[i-m]
        }
    }
    nums1.sort();
    

        console.log(nums1)
}

function test3(nums1, m, nums2, n) {
    // for(let i=0; i<nums1.length; i++) {
    //     if(m <= i) {
    //         nums1[i]=nums2[i-m]
    //     }
    // }
    //nums1.sort();
    const nums3=nums1;
    nums3.forEach((currentValue, index, array) =>{
        //console.log(currentValue, index, nums2[0]<currentValue);
        if(nums2[0]<=currentValue) {
            nums1.splice(index, 0,nums2[0]);
            nums2.splice(0, 1);
            console.log(nums1,nums2)
        }
    });
    

        console.log(nums1)
}


//test3([46,55,88,0,0,0,0], 3, [18,29,80,90], 4);


function duplicateEncode(word){
    return word
        .split('')
        .map(a=>word.toLowerCase().split(a).length-1)
        .map(a=>a===1 ? '(':')')
        .join('');
}

const word="xH)ww@wdcyQwmw";//'xH)ww@wdcyQwmw' - Expected: '((())()(((()()', instead got: '()())()((())()'

// console.log(duplicateEncode(word));


function validSolution(board){
    //TODO
    const lines=board.slice();
    const linesSquare=[];
    for(let i=0; i<board[0].length; i++) {
        lines.push(board.reduce((a,b)=>[...a, b[i]],[]))
        linesSquare[i]=[];
    }
    
    for(let i=0; i<board[0].length; i++) {
        for(let j=0; j<board[0].length; j++) {
            linesSquare[(i<3? 0 : i<6 ? 3 : 6) + (j<3? 1 : j<6 ? 2 : 3) - 1].push( board[i][j] );           
        }
    }
    lines.push(...linesSquare);
    const sortLines = lines.map(a=>a.sort().join('')).filter(a=>a!=='123456789');
    
    return sortLines.length === 0;

  }
  //111 222 333
  //456 -> 123 + 3
  //789 -> 123 + 6

//   console.log(validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
//   ]));


function validateBattlefield(field) {
    const fieldPivot = [];

    for(let i=0; i<field[0].length; i++) {
        fieldPivot.push(field.reduce((a,b)=>[...a, b[i]],[]));
    }

    const unVaidateRow=(curRow, nextRow)=> {
        const len=curRow.length;
        
        for(let i=0; i<len; i++) {
            const isLeft = i !==0 ;
            const isRight = i !==len-1 ;

            if(isLeft) {
                if(curRow[i] + nextRow[i-1] === 2) return true;
                if(curRow[i] + curRow[i-1] + nextRow[i] === 3) return true;
            }
            if(isRight) {
                if(curRow[i] + nextRow[i+1] === 2) return true;
                if(curRow[i] + curRow[i+1] + nextRow[i] === 3) return true;
            }
        }
        return false;
    }

    const validMatrix=(matrix)=> {
        const len=matrix.length;
        for(let i=0; i<len-1; i++) {
            if(unVaidateRow(matrix[i],matrix[i+1])) return false;
        }
        return true;
    }

    const sumBlc=
        field
            .map(
                a=>a.reduce(
                    (b,c)=>b+c,0
                )
            ).reduce(
                (b,c)=>b+c,0
            )
    ;
    
    const ships=(matrix)=>
        matrix
            .map(
                a=>a
                    .join('')
                    .split('0')
                    .filter(a=>a && a !=='1')
                    .map(a=>a.length)
            )
            .filter(a=>a.length>0)
            .reduce((a,b)=>[...a,...b],[]);

    let ship4=0;
    let ship3=0;
    let ship2=0;
    [...ships(fieldPivot),...ships(field)].forEach((val)=>{
        ship4 += val === 4 ? 1 : 0; 
        ship3 += val === 3 ? 1 : 0; 
        ship2 += val === 2 ? 1 : 0; 
    });
    
    return validMatrix(field) 
        && validMatrix(fieldPivot)
        && sumBlc === 20
        && ship4 === 1
        && ship3 === 2
        && ship2 === 3
    ;
}



// validateBattlefield(
//     [[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//      [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//      [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);


// validateBattlefield([ [ 1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
//   [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
//   [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
//   [ 0, 1, 0, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]);


var puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];

const abc0='bdfhjlnprtvxzBDFHJLNPRTVXZ';
const abc1='dhlptxBFJNRVZ37,aeimquyCGK';
const abc2='hpxFNV3,emuCKS08bjrzHPX5 g';
const abc3='pFV,mCS8jzP5gwM2dtJZaqGW?n';
const abc4='bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirpFV,mCS8jzP5gwM2dtJZaqGW?n';

const testF=(str)=>{
    return str
        .split('')
        .map(a=>a.charCodeAt(0))
    ;
}

//console.log(testF(abc0)) //2  1
// console.log(testF(abc1)) //4  2
// console.log(testF(abc2)) //8  3
// console.log(testF(abc3)) //16 4
//console.log(testF(abc4)) //16 4


var countChange = function(money, coins) {
    // your implementation here
    const maxQuantity = Math.floor(money / coins.sort((a,b)=>a-b)[0]);
    return maxQuantity

  }

//   console.log(countChange(4, [1,2])) // => 3
//   console.log(countChange(10, [5,2,3])) // => 4
//   console.log(countChange(11, [5,7])) //  => 0

squirrel=(h,H,S)=>{
    return (S)/(h+H);
}

const flags= {
    isA: true, 
    isB: true, 
    isC: true, 
};
const data=[
    {a:1,b:'a',c:1,cnt:10},
    {a:1,b:'a',c:1,cnt:6},
    {a:1,b:'b',c:2,cnt:7},
    {a:1,b:'b',c:3,cnt:8},
    {a:2,b:'c',c:1,cnt:8},
    {a:2,b:'c',c:1,cnt:1},
];

const uniqValues=(flags, data, flagKey, colKey) => flags[flagKey] ? [... new Set(data.map(a=>a[colKey]))] : [] ;

const aArr=uniqValues(flags, data, 'isA','a');
const bArr=uniqValues(flags, data, 'isB','b');
const cArr=uniqValues(flags, data, 'isC','c');

const f = (a, b) => [].concat(...a.map(ai => b.map(bi => ai.concat([bi]))));
const cartesian = (...arrays) => arrays.reduce((a, b) => f(a, b), [[]]);

console.log(aArr)
console.log(bArr)
console.log(cArr)
console.log([aArr,bArr,cArr])

console.log(cartesian(aArr,bArr,cArr))