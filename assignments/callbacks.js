// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length); 
}
//test for getLength()
console.log(getLength(items, amount => `I have ${amount} items`));



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]); 
}
//test for last()
console.log(last(items, item => `${item} is the last item I have.`));


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let result = x + y; 
  return cb(result); 
}
//test for sumNums()
console.log(sumNums(2, 3, result => `The sum of x and y is: ${result}`));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product = x * y; 
  return cb(product); 
}
//test for multiplyNums()
console.log(multiplyNums(4, 3, product => `The product of x and y is: ${product}`)); 


//callback for contains to perform multiple tests

let cbFunction = item => `Does this list contain the item that you are looking for? ${item}`;

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let ys= false; 
  list.forEach(element => {
    if (element === item) {
      ys = true; 
      return cb(ys);
    }
  });
  return cb(ys); 
}



//tests for contains()
  //test1
  console.log(contains('Gum', items, cbFunction));
  //test2
  console.log(contains("Hot cheetos", items, cbFunction));
  //test3
  console.log(contains('Lipstick', items, cbFunction)); 
  //test4
  console.log(contains('Notebook', items, cbFunction)); 

//end of tests for contains()

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  return cb(array); 
  
}



let cb = (array) => array.filter((item, index) => array.indexOf(item) === index);


console.log(removeDuplicates(random, cb));