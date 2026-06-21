/**
 * Exercise 1: Define an empty array
 *             1) Create an empty array and assign it to a variable called `foods`.
 */

const foods = [];

console.log('Exercise 1 result:', foods);


/**
 * Exercise 2: Add strings to the array
 *            1) Add 'pizza' and 'cheeseburger' to the `foods` array. 
 *               Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.
 */

foods.push('pizza');
foods.push('cheeseburger');

console.log('Exercise 2 result:', foods);


/**
 * Exercise 3: Insert at the beginning
 *             1) Insert the string 'taco' at the beginning of the `foods` array.
 */

foods.unshift('taco');

console.log('Exercise 3 result:', foods);


/**
 * Exercise 4: Access an array element
 *             1) Retrieve the 'pizza' string from the array based on its position (index) in the array.
 *             2) Assign it to a variable called `favFood`.
 */

let favFood = foods[1];

console.log('Exercise 4 result:', favFood);


/**
 * Exercise 5: Insert an element between two others
 *             1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.
 */

foods.splice(2,0,'tofu');

console.log('Exercise 5 result:', foods);


/**
 * Exercise 6: Replace elements
 *             1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.
 */

foods.splice(1, 1 ,'sushi', 'cupcake');

console.log('Exercise 6 result:', foods);


/**
 * Exercise 7: Using the `slice()` method
 *             1) Use the `slice()` method to create a new array that contains 'sushi' and 'cupcake'.
 *             2) Assign it to a variable named `yummy`.
 */

const yummy = foods.slice(1,3);

console.log('Exercise 7 result:', yummy);


/**
 * Exercise 8: Finding an index
 *             1) Using the `indexOf()` method, find the index of the string 'tofu' in the  `foods` array. 
 *             2) Assign it to a variable named `soyIdx`.
 */

let soyIdx = foods.indexOf('tofu');

console.log('Exercise 8 result:', soyIdx);


/**
 * Exercise 9: Joining elements
 *             1) Use the `join()` method to concatenate the strings in the `foods` array, separated by ' -> '.
 *             2) Assign the result to a variable called `allFoods`. 
 */

let allFoods = foods.join(' -> ');

console.log('Exercise 9 result:', allFoods);


/**
 * Exercise 10: Check for an element
 *              1) Using the .includes() method, check if the `foods` array contains the string 'soup'.
 *              2) Assign the result to a variable called `hasSoup``.
 */

let hasSoup = foods.includes('soup');

console.log('Exercise 10 result:', hasSoup);


/**
 * Exercise 11: Odd numbers from an array
 *              1) Choose a method to iterate through the `nums` array.
 *              2) Push each odd number to a new array named `odds`.
 */

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = [];
nums.forEach(n => {
    if(n % 2 ==1)
        odds.push(n);
});

console.log('Exercise 11 result:', odds);


/**
 * Exercise 12: FizzBuzz with arrays
 *              1) Choose a method to iterate through the `nums` array. 
 *              2) As you loop, sort the numbers into new arrays based on the following rules:
 *                  - Push any number evenly divisible by 3 to an array called `fizz`.
 *                  - Push any number evenly divisible by 5 to an array called `buzz`.
 *                  - Push any number that is evenly divisible by 3 and 5 to an array called `fizzbuzz`.
 *                     -> this means that it is divisible by 15 :)
 * 
 * 
 *               Note: A single number may meet more than one of the above rules. If it does,
 *                     it should be placed in multiple arrays. For example, the number `15`
 *                     will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.
 */

const fizz = []; // Divisible by 3
const buzz = []; // Divisible by 5
const fizzbuzz = []; // Divisible by 3

nums.forEach(n => {
    if(n % 15 == 0){
        // if a number n is divisble by 15, then n is divisible by 3 and 5
        fizz.push(n);
        buzz.push(n);
        fizzbuzz.push(n);
    }else if(n % 3 == 0){
        fizz.push(n);
    }else if(n % 5 == 0){
        buzz.push(n);
    }
});

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);