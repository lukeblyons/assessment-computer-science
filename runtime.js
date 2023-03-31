const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}

function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



let table = "|------------------|-----------------|-----------------|\n";
table += "|    Array Size    | Insert Time (ms)| Append Time (ms)|\n";
table += "|------------------|-----------------|-----------------|\n";


perf.start();
doublerAppend(tinyArray);
let resultsAppendTiny = perf.stop();
perf.start();
doublerInsert(tinyArray);
let resultsInsertTiny = perf.stop();
table += `| tinyArray        | ${resultsInsertTiny.preciseWords.padEnd(16)}| ${resultsAppendTiny.preciseWords.padEnd(16)}|\n`;
table += "|------------------|-----------------|-----------------|\n";

perf.start();
doublerAppend(smallArray);
let resultsAppendSmall = perf.stop();
perf.start();
doublerInsert(smallArray);
let resultsInsertSmall = perf.stop();
table += `| smallArray       | ${resultsInsertSmall.preciseWords.padEnd(16)}| ${resultsAppendSmall.preciseWords.padEnd(16)}|\n`;
table += "|------------------|-----------------|-----------------|\n";

perf.start();
doublerAppend(mediumArray);
let resultsAppendMedium = perf.stop();
perf.start();
doublerInsert(mediumArray);
let resultsInsertMedium = perf.stop();
table += `| mediumArray      | ${resultsInsertMedium.preciseWords.padEnd(16)}| ${resultsAppendMedium.preciseWords.padEnd(16)}|\n`;
table += "|------------------|-----------------|-----------------|\n";

perf.start();
doublerAppend(largeArray);
let resultsAppendLarge = perf.stop();
perf.start();
doublerInsert(largeArray);
let resultsInsertLarge = perf.stop();
table += `| largeArray       | ${resultsInsertLarge.preciseWords.padEnd(16)}| ${resultsAppendLarge.preciseWords.padEnd(16)}|\n`;
table += "|------------------|-----------------|-----------------|\n";

perf.start();
doublerAppend(extraLargeArray);
let resultsAppendExtraLarge = perf.stop();
perf.start();
doublerInsert(extraLargeArray);
let resultsInsertExtraLarge = perf.stop();
table += `| extraLargeArray  | ${resultsInsertExtraLarge.preciseWords.padEnd(16)}| ${resultsAppendExtraLarge.preciseWords.padEnd(16)}|\n`;
table += "|------------------|-----------------|-----------------|\n";

console.log(table);