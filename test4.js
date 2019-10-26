

function iqTest(numbers){
    const arrOddEven=[0,0,0,0];
    numbers.split(' ').forEach(function(item,i){
        arrOddEven[item%2]=arrOddEven[item%2]+1;
        arrOddEven[item%2+2]=i+1;
    });
    return arrOddEven[0] < arrOddEven[1] ? arrOddEven[2] : arrOddEven[3];
}
// console.log(iqTest('1 2 1 1'));
// console.log(iqTest('2 4 7 8 10'));
// console.log(iqTest('2 4 7 8 10'));

//'fsdshfgasdhf'.sort()



function longest(s1, s2) {
    return (s1+s2)
        .split('')
        .sort()
        .reduce((previousValue, currentValue)=>{
            return { 
                str: previousValue.str+(currentValue != previousValue.lastLetter ? currentValue : '')
                , lastLetter:currentValue 
            };
        },{str:'',lastLetter:''})
        .str;
}
function longest(s1, s2) {
    return [...new Set((s1+s2).split('').sort())].join('');
}

//console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));


function isTriangle(a,b,c)
{
   return (a < b + c) && (a > b-c) && (b < a + c) && (b > a - c) && (c < a + b) && (c > a - b);
}
//console.log(isTriangle(1,2,2));
//console.log(isTriangle(7,2,2));

function findMissingLetter(array)
{
    for(i=1;i<array.length;i++) {
        const letterLast=array[i-1].charCodeAt(0);
        const leterNow=array[i].charCodeAt(0);
        if(leterNow - letterLast > 1) {
           return String.fromCharCode(leterNow-1);
        }
    }
    return ' ';
}

//console.log(findMissingLetter(['a','b','c','d','f']));

function duplicateCount(text){
    const text2=text.toLocaleLowerCase();
    return [...new Set(text2)].filter(elm => text2.split(elm).length > 2).length;
}
// console.log(duplicateCount("aabbcdefff"));

function openOrSenior(data){
    return data.map(elm=>elm[0] >= 55 &&  elm[1] > 7? 'Senior':'Open' );
}
//console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));


function tribonacci(signature,n){
    for(let i=0; i<n-3; i++){
        signature.push(signature.slice(-3).reduce((sum, now) => sum + now));
    }
    return signature.slice(0,n);
}
//console.log(tribonacci([1,1,1],5));

function sumTwoSmallestNumbers(numbers) {  
    return numbers
            .sort((a,b)=>a-b)
            .slice(0,2)
            .reduce((a,b) => a + b);
};
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));

function tetrahedron(size) {
    const triangular =(a) =>((a+1) * a) / 2;
    let rez=0;
    for(let i=0; i<=size; i++){
        rez+=triangular(i);
    }
    return rez;
}
//console.log(tetrahedron(5));

encrypt_this=(text)=>text
        .split(' ')
        .map((item)=>{
            const word=item.split('');
            return word[0].charCodeAt(0)
                    +word[word.length-1]
                    +word.slice(2,word.length-1).join('')
                    +word[1]
        })
        .join(' ');

// console.log(encrypt_this("hello world"));
// console.log(encrypt_this("Hello") == "72olle");
// console.log(encrypt_this("good") == "103doo");
// console.log(encrypt_this("hello world") == "104olle 119drlo");

const data = 
     "Rome:Jan 81.2,Feb 63.2,Mar 70.3,Apr 55.7,May 53.0,Jun 36.4,Jul 17.5,Aug 27.5,Sep 60.9,Oct 117.7,Nov 111.0,Dec 97.9" + "\n" +
     "London:Jan 48.0,Feb 38.9,Mar 39.9,Apr 42.2,May 47.3,Jun 52.1,Jul 59.5,Aug 57.2,Sep 55.4,Oct 62.0,Nov 59.0,Dec 52.9" + "\n" +
     "Paris:Jan 182.3,Feb 120.6,Mar 158.1,Apr 204.9,May 323.1,Jun 300.5,Jul 236.8,Aug 192.9,Sep 66.3,Oct 63.3,Nov 83.2,Dec 154.7" + "\n" +
     "NY:Jan 108.7,Feb 101.8,Mar 131.9,Apr 93.5,May 98.8,Jun 93.6,Jul 102.2,Aug 131.8,Sep 92.0,Oct 82.3,Nov 107.8,Dec 94.2" + "\n" +
     "Vancouver:Jan 145.7,Feb 121.4,Mar 102.3,Apr 69.2,May 55.8,Jun 47.1,Jul 31.3,Aug 37.0,Sep 59.6,Oct 116.3,Nov 154.6,Dec 171.5" + "\n" +
     "Sydney:Jan 103.4,Feb 111.0,Mar 131.3,Apr 129.7,May 123.0,Jun 129.2,Jul 102.8,Aug 80.3,Sep 69.3,Oct 82.6,Nov 81.4,Dec 78.2" + "\n" +
     "Bangkok:Jan 10.6,Feb 28.2,Mar 30.7,Apr 71.8,May 189.4,Jun 151.7,Jul 158.2,Aug 187.0,Sep 319.9,Oct 230.8,Nov 57.3,Dec 9.4" + "\n" +
     "Tokyo:Jan 49.9,Feb 71.5,Mar 106.4,Apr 129.2,May 144.0,Jun 176.0,Jul 135.6,Aug 148.5,Sep 216.4,Oct 194.1,Nov 95.6,Dec 54.4" + "\n" +
     "Beijing:Jan 3.9,Feb 4.7,Mar 8.2,Apr 18.4,May 33.0,Jun 78.1,Jul 224.3,Aug 170.0,Sep 58.4,Oct 18.0,Nov 9.3,Dec 2.7" + "\n" +
     "Lima:Jan 1.2,Feb 0.9,Mar 0.7,Apr 0.4,May 0.6,Jun 1.8,Jul 4.4,Aug 3.1,Sep 3.3,Oct 1.7,Nov 0.5,Dec 0.7";
const data1 =
     "Rome:Jan 90.2,Feb 73.2,Mar 80.3,Apr 55.7,May 53.0,Jun 36.4,Jul 17.5,Aug 27.5,Sep 60.9,Oct 147.7,Nov 121.0,Dec 97.9" + "\n" +
     "London:Jan 58.0,Feb 38.9,Mar 49.9,Apr 42.2,May 67.3,Jun 52.1,Jul 59.5,Aug 77.2,Sep 55.4,Oct 62.0,Nov 69.0,Dec 52.9" + "\n" +
     "Paris:Jan 182.3,Feb 120.6,Mar 188.1,Apr 204.9,May 323.1,Jun 350.5,Jul 336.8,Aug 192.9,Sep 66.3,Oct 63.3,Nov 83.2,Dec 154.7" + "\n" +
     "NY:Jan 128.7,Feb 121.8,Mar 151.9,Apr 93.5,May 98.8,Jun 93.6,Jul 142.2,Aug 131.8,Sep 92.0,Oct 82.3,Nov 107.8,Dec 94.2" + "\n" +
     "Vancouver:Jan 155.7,Feb 121.4,Mar 132.3,Apr 69.2,May 85.8,Jun 47.1,Jul 31.3,Aug 37.0,Sep 69.6,Oct 116.3,Nov 154.6,Dec 171.5" + "\n" +
     "Sydney:Jan 123.4,Feb 111.0,Mar 151.3,Apr 129.7,May 123.0,Jun 159.2,Jul 102.8,Aug 90.3,Sep 69.3,Oct 82.6,Nov 81.4,Dec 78.2" + "\n" +
     "Bangkok:Jan 20.6,Feb 28.2,Mar 40.7,Apr 81.8,May 189.4,Jun 151.7,Jul 198.2,Aug 197.0,Sep 319.9,Oct 230.8,Nov 57.3,Dec 9.4" + "\n" +
     "Tokyo:Jan 59.9,Feb 81.5,Mar 106.4,Apr 139.2,May 144.0,Jun 186.0,Jul 155.6,Aug 148.5,Sep 216.4,Oct 194.1,Nov 95.6,Dec 54.4" + "\n" +
     "Beijing:Jan 13.9,Feb 14.7,Mar 18.2,Apr 18.4,May 43.0,Jun 88.1,Jul 224.3,Aug 170.0,Sep 58.4,Oct 38.0,Nov 19.3,Dec 2.7" + "\n" +
     "Lima:Jan 11.2,Feb 10.9,Mar 10.7,Apr 10.4,May 10.6,Jun 11.8,Jul 14.4,Aug 13.1,Sep 23.3,Oct 1.7,Nov 0.5,Dec 10.7";
const towns = ["Rome", "London", "Paris", "NY", "Vancouver", "Sydney", "Bangkok", "Tokyo",
               "Beijing", "Lima", "Montevideo", "Caracas", "Madrid", "Berlin"]

function meanData(town, strng){
    const townRow =(item)=>item.split('\n')
            .map((item)=>item.split(':'))
            .filter(([item])=>town==item)[0];
    const townData = townRow(strng);
    if(townData == undefined) 
        return false
    else
        return townData[1]
            .split(',')
            .map((item)=>parseFloat(item.split(' ')[1]))
}

function mean(town, strng) {
    const data=meanData(town, strng);
    if(!data) 
        return -1
    else return data.reduce((sum,item)=>sum+item)/data.length
}
function variance(town, strng) {
    const data=meanData(town, strng);

    if(!data) 
        return -1
    const p=1/data.length;
    const MX2= data
        .map((item)=>Math.pow(item,2)*p)
        .reduce((sum,item)=>sum+item);
    const MXpow2=Math.pow(mean(town, strng),2);
    return MX2-MXpow2;
 }

// mean("London", data), 51.199999999999996
// mean("Beijing", data), 52.416666666666664
// variance("London", data), 57.42833333333374
// variance("Beijing", data), 4808.37138888889
//console.log(mean("London", data));
//console.log(mean("Montevideo", data));
//console.log(variance("London", data));
//[191.232,125.59643,132.13683,147.80972,185.69507,225.29603,293.84075,271.56272,254.74028,319.052,288.923,243.46167]
//[ 191.232,125.59642999999998,132.13683,147.80972000000003,185.69506999999996,225.29603000000003,293.84075,271.56272,254.74028,319.052,288.923,232.26803 ]

function anagrams(word, words) {
    const presetWord=(word)=>word.split('').sort().join('');
    return words.filter((item) => item.length == word.length && presetWord(item) == presetWord(word) )
}
//anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
//console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));

function digital_root(num) {
    const dr=(num)=>num.toString().split('').map(a=>parseInt(a)).reduce((a,b)=>a+b);
    const d=dr(num);
    return d>10?digital_root(d):d;
}

//console.log(digital_root(942));
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6


function pythagoreanTriplet (n,m=0) {
    // const a=(y) + (y+3);
    // const b=2*(y+1)*(y+2);
    // const c=(y+1)**2 + (y+2)**2;
    
    // const a = 2*m +1;
    // const b = 2*m*(m+1);
    // const c = 2*(m**2) + 2*m + 1;
    // const d= a*b*c;
    // return d>=n?[a,b,c]:pythagoreanTriplet (n,m+1);

}

// for(i=0;i<=20;i++) {
//     console.log(pythagoreanTriplet(60,i));
// }
//console.log(pythagoreanTriplet(30720,0));
//10000000
//30000000

function alphabetPosition(text) {
    return text
        .toLocaleLowerCase()
        .split('')
        .map(item=>item.charCodeAt(0)-('a'.charCodeAt(0)-1))
        .filter(item=> 1<=item && item<=26)
        .join(' ');
}

//console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//, "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")

// const a = '2'
// const b = '3';
// const c = + a + b ** 3;
// const d =   a + b ** 2;
// console.log(c,d);

// function pythTriplet (n,m=1,last=[]) {
//     const a = 2*m +1;
//     const b = 2*m*(m+1);
//     const c = 2*(m**2) + 2*m + 1;
//     const now=[...last,[a,b,c]];
//     return c<=n ? pythTriplet(n,m+1,now) : last;  
// }
var store={
        tripleStore: {}
        ,pow:{}
    };
var test=0;
const pow=(a,s=2)=>{
    let p=store.pow[a];
    if(p==undefined){
        p=a**s;
        store.pow[a]=p;
    }
    return p;
};


function pythFindAB(c) {
    const per =(...par)=> par.reduce((a,b)=>a+b);
    const nod=(a,b)=>a%b==0?b:nod(b,a%b);
    let abc=[];
    for(let b=c-1;b>=4;b--) {
        test++;
        if (nod(c,b) != 1) continue;
        const a = (c**2 - b**2)**0.5;
        if (Number.isInteger(a) && a<=b) {
            abc.push([[a,b,c],per(a,b,c)]);
        }
    }
    return abc;
}

function pythFind(n) {
    let abc=[];
    for(c=3;c<=n;c=c+2) {
        test++;
        let data=store.tripleStore[c];
        if(data==undefined){
            data=pythFindAB(c);
            store.tripleStore[c]=data;
        }
        
        if(data.length!=0){
            abc.push(...data);
        }
    }
    return abc;
}

function findMaxTriple(cMax) {
    const allTriplets = pythFind(cMax);
    let maxVal=allTriplets[0][1];
    let maxItem=0;
    for(item in allTriplets) {
        const nowVal=allTriplets[item][1];
        if(maxVal < nowVal) {
            maxVal = nowVal;
            maxItem = item;
        }
    }
    const rez=allTriplets[maxItem];
    return [
        ['number triples below-eq '+cMax ,allTriplets.length]
        , ['max perimeter', rez[1]]
        , ['largest triple', [rez[0]]]
    ];
}

//[['number triples below-eq 100', 16], ['max perimeter', 234], ['largest triple', [[65, 72, 97]]]]

// [['number triples below-eq 200', 32], ['max perimeter', 456], ['largest triple', [[95, 168, 193]]]]
// [['number triples below-eq 200', 32], ['max perimeter', 420], ['largest triple', [[28, 195, 197]]]]

// [['number triples below-eq 601', 96], ['max perimeter', 1426], ['largest triple', [[368, 465, 593]]]]
// [['number triples below-eq 601', 95], ['max perimeter', 1426], ['largest triple', [[368, 465, 593]]]]



function genTriple(k) {
    for(m=1;m<=k;m++){
        //console.log(m);
        //for(let n=0;n<m;n++) {
        for(let n=m-1;n>0;n--) {
            const a = m**2 - n**2;
            const b = 2*m*n;
            const c = m**2 + n**2;
            if (a>b) break;
            console.log(a,b,c,m,n);
            // console.log(m,n);
        }
    }
}
//console.log(genTriple(17));

//  console.log(findMaxTriple(10000));
//  console.log(test);

//35 820 201
//35 809 327
// 7 902 653 t1796
// 3 961 108 t1239 t1056
// 2 018 758 t982
// 1 655 948
//    89 701

//2m
//   243 120 790  3k
// 1 122 421 164  5k
// 3 076 233 708  7k
// 8 960 544 705 10k

//1.6m
//   197 516 093  3k
//   911 202 294  5k
// 2 495 781 205  7k
// 7 267 545 413 10k

//    24 985 003 10k

//,[['number triples below-eq 50',7]
//,['max perimeter', 90]
//, ['largest triple', [[9, 40, 41]]]]);

// console.log(findMaxTriple(100),[['number triples below-eq 100', 16], ['max perimeter', 234], ['largest triple', [[65, 72, 97]]]]);
// console.log(findMaxTriple(150), [['number triples below-eq 150', 24], ['max perimeter', 340], ['largest triple', [[51, 140, 149]]]]);
// console.log(findMaxTriple(200),[['number triples below-eq 200', 32], ['max perimeter', 456], ['largest triple', [[95, 168, 193]]]]);



// (3, 4, 5),   12        (5, 12, 13),  30          (8, 15, 17),  40        (7, 24, 25),  56
// (20, 21, 29), 70        (12, 35, 37), 84          (9, 40, 41),  90        (28, 45, 53), 126
// (11, 60, 61), 132       (16, 63, 65), 144         (33, 56, 65), 154       (48, 55, 73), 176
// (13, 84, 85), 182       (36, 77, 85), 198         (39, 80, 89), 208 


// (3, 4, 5),   12
// (5, 12, 13),  30
// (8, 15, 17),  40
// (7, 24, 25),  56
// (20, 21, 29), 70
// (12, 35, 37), 84          
// (9, 40, 41),  90        
// (28, 45, 53), 126
// (11, 60, 61), 132       
// (16, 63, 65), 144         
// (33, 56, 65), 154       
// (48, 55, 73), 176
// (13, 84, 85), 182       
// (36, 77, 85), 198         
// (39, 80, 89), 208       
// (65, 72, 97), 234

// [ 6, 8, 10, 24 ],
// [ 9, 12, 15, 36 ],
// [ 12, 16, 20, 48 ],
// [ 15, 20, 25, 60 ],
// [ 10, 24, 26, 60 ],
// [ 18, 24, 30, 72 ],
// [ 16, 30, 34, 80 ],

// [ 3, 4, 5, 12 ],
// [ 5, 12, 13, 30 ],
// [ 8, 15, 17, 40 ],
// [ 7, 24, 25, 56 ],
// [ 20, 21, 29, 70 ],
// [ 21, 28, 35, 84 ],

// [ 12, 35, 37, 84 ],
// [ 15, 36, 39, 90 ],
// [ 24, 32, 40, 96 ],
// [ 9, 40, 41, 90 ],
// [ 27, 36, 45, 108 ],
// [ 14, 48, 50, 112 ],
// [ 30, 40, 50, 120 ],
// [ 24, 45, 51, 120 ],
// [ 20, 48, 52, 120 ],
// [ 28, 45, 53, 126 ],
// [ 33, 44, 55, 132 ],
// [ 40, 42, 58, 140 ],
// [ 36, 48, 60, 144 ],
// [ 11, 60, 61, 132 ],
// [ 16, 63, 65, 144 ],
// [ 25, 60, 65, 150 ],
// [ 33, 56, 65, 154 ],
// [ 39, 52, 65, 156 ],
// [ 32, 60, 68, 160 ],
// [ 42, 56, 70, 168 ],
// [ 48, 55, 73, 176 ],
// [ 24, 70, 74, 168 ],
// [ 21, 72, 75, 168 ],
// [ 45, 60, 75, 180 ],
// [ 30, 72, 78, 180 ],
// [ 48, 64, 80, 192 ],
// [ 18, 80, 82, 180 ],
// [ 13, 84, 85, 182 ],
// [ 36, 77, 85, 198 ],
// [ 40, 75, 85, 200 ],
// [ 51, 68, 85, 204 ],
// [ 60, 63, 87, 210 ],
// [ 39, 80, 89, 208 ],
// [ 54, 72, 90, 216 ],
// [ 35, 84, 91, 210 ],
// [ 57, 76, 95, 228 ],
// [ 65, 72, 97, 234 ]

function missingNext(seq,len,cnt=1) {
    const firstNum=seq.substr(0,len);
    
    const nextNum=+firstNum+cnt;
    const nextNuStr=nextNum.toString();
    const seqPart=firstNum+nextNuStr;
    const nextSeq = seq.substr(len);
    return {
        result: (seqPart == seq.substr(0,seqPart.length) )//&& nextSeq.length != 0)
        ,nextNum
        ,len:nextNuStr.length
        ,nextSeq
        ,passed:cnt==2?true:false
    }
}

function missingStep(seq,len) {
    let data=missingNext(seq,len,1);
    if (!data.result) {
        data=missingNext(seq,len,2);
    }
    return data;
}

function missingStr(seq,len=1) {
    if (seq.length == len || seq == '') {
        return {result:false}
    }
    let result=true;
    let passed = [];
    while (result) {
        const data = missingStep(seq,len);
        result=data.result;
        seq=data.nextSeq;
        len=data.len
        if(data.passed && seq != '') {
            passed.push(data.nextNum - 1)
        }
    }

    if(seq == '') {
        return { result:true ,passed }
    }
    else {
        return { result:false  }
    }
}

function missing(seq){
    
    let data;
    let result = false;
    let passed = [];
    for(len=1;len<seq.length;len++){
        data=missingStr(seq,len);
        result = data.result;
        if ( result ) {
            passed = data.passed;
            break;
        }
    }

    if(result && passed.length == 1) {
        return passed[0];
    }
    else {
        return -1;
    }
}

//console.log(missing('900001900002900004900005900006'));


//хрень а не код
function missing_1(seq,len=1,passed=[]) {
    let data;
    let some;
    let isSeq=true;
    let isSeq_2=true;
    if(seq!='') {
        data=missingStep(seq,len);
        if(!data.result) {
            isSeq=false;
            return {isSeq,isSeq_2:false};
        }
        seq=data.nextSeq;
        len=data.len;
        if(data.passed && data.result) {
            passed.push(data.nextNum - 1);
        }
        some=missing_1(seq,len,passed);
        isSeq_2=some.isSeq;
    }
    return {seq,data,passed,isSeq,isSeq_2};
}
function missing_old(seq){
    
    let data;
    for(len=1;len<seq.length;len++){
        data=missing_1(seq,len,[]);
        //console.log(data);//!data.data.passed
        if(data.isSeq && data.isSeq_2) break;
        //break;
    }
    // console.log(seq);
    console.log(data);
    let result=-1;
    if(!data.isSeq ) {
        result=-1;//'-1 -- it is no sequence';
    } 
    else 
    switch(data.passed.length) {
        case 0: result=-1; break;//'-1 -- no number missing'; break;
        case 1: result=data.passed[0]; break;
        default : result=-1;//'-1 -- error in sequence. Both '+data.passed.join(' and ')+' missing';
    }
    return result;
}
//Expected: 134206, instead got: -1
// 134197
// 134198
// 134199
// 134200
// 134201
// 134202
// 134203
// 134204
// 134205
//----
// 134207
// 134208

// { seq: '134198134199134200134201134202134203134204134205134207134208',
//   data: 
//    { result: true,
//      nextNum: 134198,
//      len: 6,
//      nextSeq: '134198134199134200134201134202134203134204134205134207134208',
//      passed: false },
//   passed: [ 134206 ],
//   isSeq: true,
//   isSeq_2: true }

// { seq: '34197134198134199134200134201134202134203134204134205134207134208',
//   data: 
//    { result: true,
//      nextNum: 3,
//      len: 1,
//      nextSeq: '34197134198134199134200134201134202134203134204134205134207134208',
//      passed: true },
//   passed: [ 2, 2, 2, 1, 2, 2, 2, 2, 2 ],
//   isSeq: true,
//   isSeq_2: true }

//console.log(missing('134197134198134199134200134201134202134203134204134205134207134208')); //4
// console.log(missing('599600601602')); //4
// console.log(missing('9101113')); //12

// In this Kata, you will be given a string of numbers in sequence and your task will be to return the missing number. If there is no number
// missing or there is an error in the sequence, return -1.

// For example:

// missing("123567") = 4 
// missing("899091939495") = 92
// missing("9899101102") = 100
// missing("599600601602") = -1 -- no number missing
// missing("8990919395") = -1 -- error in sequence. Both 92 and 94 
// missing.





// ROT13 is a simple letter substitution cipher that replaces a letter 
// with the letter 13 letters after it in the alphabet. 
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and 
// returns the string ciphered with Rot13. 
// If there are numbers or special characters included in the string, 
// they should be returned as they are. 
// Only letters from the latin/english alphabet should be shifted, 
// like in the original Rot13 "implementation".



function rot13(message,diff = 13){
    const newLetterCode=(a,c)=>a + (c - a + diff) % 26;
    const rot13if=(a,z,c,l)=> a <= c && c <= z ? String.fromCharCode(newLetterCode(a,c)) : l 
    const letter=(l)=> {
        const a = 'a'.charCodeAt(0);
        const z = 'z'.charCodeAt(0);
        const A = 'A'.charCodeAt(0);
        const Z = 'Z'.charCodeAt(0);
        const c = l.charCodeAt(0);
        l = rot13if(a,z,c,l);
        l = rot13if(A,Z,c,l);
        return l;
    }
    return message.split('').map(letter).join('');
}

//console.log(rot13('Test 1ax'))

function sumStrings(a,b) { 
    const max=(a,b)=> a>b ? a : b;
    const part=(a,b) => Math.floor(a/b) + ( a%b == 0 ? 0 : 1 );
    const len = max(a.length,b.length);
    const lenOnePart = 5;
    const parts = part(len,lenOnePart);
    let numbers = [];

    a=a.padStart(len, "0");
    b=b.padStart(len, "0");

    for(let i=0;i < parts; i++) {
        const start = i*lenOnePart;
        const aNew = a.substr(start,lenOnePart);
        const bNew = b.substr(start,lenOnePart);
        numbers=[[aNew,bNew],...numbers];
    }
    let result = '';
    let e=0;
    let j=0;
    for(i of numbers) {
        const [a,b] = i;
        const c = (+a + +b + e).toString();
        const last = j==numbers.length-1 ? true : false;
        const d = c.substr(a.length*-1)
        e = c == d ? 0 : 1 ;
        result=(last ? c : d)+result;
        j++;
    }
    return result;
}
// console.log(sumStrings('123','123'))
//- Expected: '712577413488402631964821329', instead got: '7.125774134884027e+26'
//console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
// 712577413488402631964821329
//712569312664357328695151392
//8100824045303269669937
// 712571741348840263196148213129
// 131151201344081895336534324866
// 712569312664357328695151392
// 8100824045303269669937


// console.log(-2 +1+ -3+ 4+ -1+ 2+ 1+ -5+ 4)
// -2, 1, -3, 4, -1, 2, 1, -5, 4
//            4, -1, 2, 1

// [ 4, 5, 5, -14, 6, 17, -2, 32, -3, -24, 47, -34 ] 73

// console.log(6+ 17+ -2+ 32+ -3+ -24+ 47)
//[ -40, -46, 24, -38, -35 ]
var maxSequence = function(arr){
    let max=0;
    console.log(arr)

    return max;
}

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function mix(s1, s2) {
    const letters=(s)=>new Set(s.match(/[a-z]/g).sort())
    const uniLetters = [...letters(s1)].filter((i)=>letters(s2).has(i));
    const countLettrs=(i)=>[ s1.split(i).length-1 , s2.split(i).length-1, i ];
    const maxStr=(a,b)=>a==b?'=':a>b?1:2;
    const sortS=(a,b)=>a==b?3:a>b?1:2;
    const rrr=([a,b,c])=>[Math.max(a,b),c ,maxStr(a,b)+':'+c.padStart(Math.max(a,b), c),sortS(a,b)];
    const sort2=(a,te={})=>{
        for(item of a) {
            if(te[item[0]] == undefined){
                te[item[0]] = [];
            }
            te[item[0]].push([item[3],item[2]]);
        }
        return te;
    }

    const arr= sort2(uniLetters
        .map(countLettrs)
        .filter(([a,b])=>a==1 && b==1? false : true)
        .map(rrr)
        .sort((a,b)=>b[0]-a[0]))
        // .reduce(sort2,{});
        // .reduce((a,b)
        //.map(([a,b,c])=>c)
        //.join('/')
    for(key in arr) {
        console.log(arr[key],123);
    }

    return arr
    
    
}

// console.log(mix("Are theyyy here z", "yes, they are here"));
console.log(mix("looping is fun but dangerous", "less dangerous than coding"));

// 1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg
// 1:ooo/1:uuu/1:ii/2:sss/2:aa/2:dd/2:ee/=:nnn/=:gg

// , "2:eeeee/2:yy/=:hh/=:rr")


const testArr = [ 
[ 3, 'n', '=:nnn', 3 ],
[ 3, 'o', '1:ooo', 1 ],
[ 3, 's', '2:sss', 2 ],
[ 3, 'u', '1:uuu', 1 ],
[ 2, 'a', '2:aa', 2 ],
[ 2, 'd', '2:dd', 2 ],
[ 2, 'e', '2:ee', 2 ],
[ 2, 'g', '=:gg', 3 ],
[ 2, 'i', '1:ii', 1 ] ];

// console.log(testArr);
let te={};
for(item of testArr) {
    // console.log(item);
    if(te[item[0]] == undefined){
        te[item[0]] = [];
    }
    te[item[0]].push(item);
}
// console.log(te);

// let a={};
// let a[1]=3;
// console.log(a);


Даша, как я понял вопросами ниже занимаешься ты. Можешь подготовить ответы?
-- перевод ЮЛ как продвинулось
-- расширание оквэд
-- касса
-- как проходит продвижение
-- меню + кофе
-- дизан




зачем гриль?

