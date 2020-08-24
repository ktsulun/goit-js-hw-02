(() => {
  function findLongestWord(string = '') {
    // Write code under this line
    let words = string.split(' ');
    let longestWordLength = 0;
    let longestWord = '';

    for (let i = 0; i < words.length; i += 1) {
      if (words[i].length > longestWordLength) {
        longestWordLength = words[i].length;
        longestWord = words[i];
      }
    }
    return longestWord;
  }
})();
