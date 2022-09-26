'use strict';

// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  word_counts = {}
  for word of phrase.split(' ') {
    if word_counts[word] {
      word_counts[word] += 1;
    } else {
      word_counts[word] = 1;
    }
  }
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
  const melonPrice = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas'],
  };
  if (!melonPrice[price]) {
    return null;
  }
  return melonPrice[price].sort();
}
