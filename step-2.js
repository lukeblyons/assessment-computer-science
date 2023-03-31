// SUM ZERO //

// Time Complexity: O(n)
// Space Complexity: O(n)
function addToZero(arr) {
let set = new Set();
let t0 = performance.now();

for (let num of arr) {
    if (set.has(-num)) {
    let t1 = performance.now();
    console.log(`addToZero: ${t1 - t0} ms`);
    return true;
    } else {
    set.add(num);
    }
}

let t1 = performance.now();
console.log(`addToZero: ${t1 - t0} ms`);
return false;
};
console.log('----------')
console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));
console.log('----------')


// UNIQUE CHARACTERS //

// Time Complexity: O(n)
// Space Complexity: O(n)
function hasUniqueChars(str) {
let set = new Set();
let t0 = performance.now();

for (let char of str) {
    if (set.has(char)) {
    let t1 = performance.now();
    console.log(`hasUniqueChars: ${t1 - t0} ms`);
    return false;
    } else {
    set.add(char);
    }
}

let t1 = performance.now();
console.log(`hasUniqueChars: ${t1 - t0} ms`);
return true;
};
console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
console.log(hasUniqueChars(""));
console.log(hasUniqueChars("a"));
console.log(hasUniqueChars("aa"));
console.log('----------')


// PANGRAM SENTENCE //

// Time Complexity: O(1)
// Space Complexity: O(1)
function isPangram(str) {
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
str = str.toLowerCase();
let t0 = performance.now();

for (let char of alphabet) {
    if (!str.includes(char)) {
    let t1 = performance.now();
    console.log(`isPangram: ${t1 - t0} ms`);
    return false;
    }
}

let t1 = performance.now();
console.log(`isPangram: ${t1 - t0} ms`);
return true;
};
console.log(isPangram("The quick brown fox jumps over the lazy dog!")); 
console.log(isPangram("I like cats, but not mice"));                    
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));                
console.log(isPangram(""));                                             
console.log('----------')


// LONGEST WORD //

// Time Complexity: O(n)
// Space Complexity: O(1)
function findLongestWord(words) {
let maxLength = 0;
let t0 = performance.now();

for (let word of words) {
    if (word.length > maxLength) {
    maxLength = word.length;
    }
}

let t1 = performance.now();
console.log(`findLongestWord: ${t1 - t0} ms`);
return maxLength;
};

console.log(findLongestWord(["hi", "hello"]));
console.log(findLongestWord(["cat", "dog", "elephant"]));
console.log(findLongestWord(["banana", "apple", "orange"]));
console.log(findLongestWord(["a", "ab", "abc", "abcd"]));
console.log('----------')
