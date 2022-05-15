/**
 * @title: Crypt Kicker II
 * @uvaId: 850
 * @level: 2
 * @tags: #cipher
 */

// A popular but insecure method of encrypting text is to permute the letters of the
// alphabet. That is, in the text, each letter of the alphabet is consistently replaced
// by some other letter. To ensure that the encryption is reversible, no two letters are
// replaced by the same letter.
//
// A powerful method of cryptanalysis is the known plain text attack. In a known plain
// text attack, the cryptanalyst manages to have a known phrase or sentence encrypted by
// the enemy, and by observing the encrypted text then deduces the method of encoding.
//
// Your task is to decrypt several encrypted lines of text, assuming that each line uses
// the same set of replacements, and that one of the lines of input is encrypted form of
// the plain text _the quick brown fox jumps over the lazy dog_.
//
// ## Input
// The input contains several, encrypted as described above. The encrypted lines
// contain only lowercase letters and spaces and do not exceed 80 characters in length.
// There are at most 100 encrypted texts.
//
// ## Output
// For each encrypted text, decrypt it. If there is more than one possible decryption,
// any one will do. If decryption is impossible return null.
//
// ## Samples
// uva00850([
//   "vtz ud xnm xugm itr pyy jttk gmv xt otgm xt xnm puk ti xnm fprxq",
//   "xnm ceuob lrtzv ita hegfd tsmr xnm ypwq ktj",
//   "frtjrpgguvj otvxmdxd prm iev prmvx xnmq"
// ]) → [
//   "now is the time for all good men to come to the aid of the party",
//   "the quick brown fox jumps over the lazy dog",
//   "programming contests are fun arent they"
// ]

module.exports = uva00850;

function uva00850(lines) {
  return lines.map(decrypt);
}

function decrypt(str) {
  // Apparently, the one true substitution cipher.
  const substitutions = "xkqsupmjfgdbehcayrvoinztlw";

  return str
    .split("")
    .map((letter) =>
      letter === " " ? letter : substitutions[letter.charCodeAt(0) - "a".charCodeAt(0)]
    )
    .join("");
}
