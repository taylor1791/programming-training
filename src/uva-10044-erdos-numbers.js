/**
 * @title: Erdös Numbers
 * @uvaId: 10044
 * @level: 2
 * @tags: #bfs, #graph, #tedious
 */

// The Hungarian Paul Erdös (1913-1996) was one of the most famous mathematicians of the
// 20th century. Every mathematician having the honor of being a co-author of Erdös is
// well respected.
//
// Unfortunately, not everybody got the change to write a paper with Erdös, so the best
// they could do was publish a paper with somebody who had published a scientific paper
// with Erdös. This gave rise to the so-called _Erdös numbers_. An author who has
// jointly published with Erdös had Erdös number 1. An author who had not published with
// Erdös but with somebody with Erdös number 1 obtained Erdös number 2, and so on.
//
// Your task is to write a function which computes the Erdös number for a scientist
// given set of papers.
//
// ## Input
// The input will contain the set of papers and the name of an author. A paper is
// specified in the following way:
//
// > Smith, M.N., Martin, G., Erdos, P.: Newtonian forms of prime factors
//
// Note that umlauts, like "ö," are simply written as "o". Author's names are written in
// the following format:
//
// > Martin, G.
//
// ## Output
// Return the Erdös number based on the set of papers for the provided author. Authors
// which do not have any relation to Erdös the papers via the papers have Erdös number
// `infinity`.
//
// ## Sample
// const papers = [
//   "Smith, M.N., Martin, G., Erdos, P.: Newtonian forms of prime factors",
//   "Erdos, P., Reisig, W.: Stuttering in petri nets",
//   "Smith, M.N., Chen, X.: First order derivates in structured programming",
//   "Jablonski, T., Hsueh, Z.: Self stabilizing data structures"
// ];
// uva10044(papers, "Smith, M.N.") -> 1
// uva10044(papers, "Hsueh, Z.") -> Infinity
// uva10044(papers, "Chen, X.") -> 2

module.exports = uva10044;

function uva10044(papers, author) {
  return papers.filter((paper) => paper.match(author)).length / 2;
}
