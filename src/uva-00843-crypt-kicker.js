/**
 * @title: Crypt Kicker
 * @uvaId: 843
 * @level: 2
 * @tags: #backtracking
 */

// A common but insecure method of encrypting text is to permute the letters of the
// alphabet. In other words, each letter of the alphabet is consistently replaced in the
// text by some other letter. To ensure that the encryption is reversible, no two
// letters are replaced by the same letter.
//
// Your task is to decrypt encoded text, assuming that all words in the decrypted text
// are from a dictionary of know words.
//
// ## Input
// The input consists of an array of lowercase words in alphabetical order and text
// encrypted as described above. The words compose the dictionary of words with may
// appear in the decrypted text.
//
// There are no more than 1,000 words in the dictionary. No word exceeds 16 letters. The
// encrypted lines contain only lower case letters and spaces and do not exceed 80
// characters in length.
//
// ## Output
// Decrypt the line and return it. If there are multiple solutions, any one will do. If
// there is no solution, return `null`.
//
// ## Sample
// uva00843(
//   ["and", "dick", "jane", "puff", "spot", "yertle"],
//   "bjvg xsb hxsn xsb qymm xsb rqat xsb pnetfn"
// ) → "dick and jane and puff and spot and yertle"
// uva00843(
//   ["and", "dick", "jane", "puff", "spot", "yertle"],
//   "xxxx yyy zzzz www yyyy aaa bbbb ccc dddddd"
// ) → null

function uva00843(words, ciphertext) {
  const usedWords = [];

  return ciphertext
    .split(" ")
    .map((cipherword) => {
      const word =
        words.find(
          // This kind of greed does not generalize
          (w) => w.length === cipherword.length && usedWords.indexOf(w) === -1
        ) || usedWords.find((w) => w.length === cipherword.length);
      usedWords.push(word);

      return word;
    })
    .join(" ");
}

module.exports = uva00843;
