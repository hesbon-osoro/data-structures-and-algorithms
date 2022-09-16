function LetterCount(str) {
  let separateWords = str.split(' ');
  let wordCount = [];
  for (let i = 0; i < separateWords.length; i++) {
    for (let j = 0; j < separateWords[i].length; j++) {
      if (charCount(separateWords[i], separateWords[i][j]) > 1) {
        return separateWords[i];
      }
      // console.log(charCount(separateWords[i],separateWords[i][j] ))
    }
  }
  return -1;
}

function charCount(str, l) {
  var letterCount = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === l) {
      letterCount++;
    }
  }
  return letterCount;
}
