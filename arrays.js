'use strict';

// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const i in items) {
    console.log(`${items[i]} ${i}`)
  }
}
printIndices(['apple', 'berry', 'cherry'])


// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  let result = []
  for (const i in items){
    if (i % 2 === 0) {
      result.push(items[i])
    }
  }
  console.log(result)
}
everyOtherItem(['apple', 'berry', 'cherry', 'banana', 'orange'])


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  //Print a list of the `n` smallest integers in `items`.
  const itemsSort = items.sort((a, b) => a - b).slice(0, n);
  itemsSort.reverse();
    
    return itemsSort
  }

