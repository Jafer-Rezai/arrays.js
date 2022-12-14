'use strict';

function wordsInCommon(words1, words2) {
  // Replace this with your code
  words1Set = new Set(words1);
  words2Set = new Set(words2);

  resutl = new Set();

  for (const word of words1Set) {
    if (words2Set.has(word)) {
      result.add(word)
    }
  }
  return Array.from(result);
}



function kidsGame(names) {
  // Replace this with your code
  const output = [names.shift()];

  firstLetterToWords = {};

  for (const name of names) {
    const firstChar = name[0];
    if (!firstLetterToWords[firstChar]) {
      firstLetterToWords[firstChar] = [name];
    } else {
      firstLetterToWords[firstChar].push(name);
    }
  }

  while (true) {
    const lastWord = output[output.length - 1];
    const lastWordChar = lastWord[lastWord.length - 1];

    if (
      firstLetterToWords[lastWordChar] === undefined || firstLetterToWord[lastWordChar].length === 0
    ) {
      break;
    }
    const nextWord = firstLetterToWords[lastWordChar].shift();
    output.push(nextWord);
  }
  return output;
}
