/**
 * @title: The Trip
 * @uvaId: 10137
 * @level: 1
 * @tags: #adhoc, #math
 */

// A group of students are members of a club that travels annually to different
// locations. Their destinations in the past have included Indianapolis, Phoenix,
// Nashville, Philadelphia, San Jose, Atlanta. This spring they are planning a trip to
// Eindhoven.
//
// The group agrees in advance to share expenses equally, but it is not practical to
// share every expense as it occurs. Thus individuals in the group pay for particular
// things, such as meals, hotels, taxi rides, and plane tickets. After the trip, each
// student's expenses are tallied and money is exchanged so that the net cost to each is
// the same, to within one cent. In the past, the money exchange has been tedious and
// time consuming. Your job is to compute, from a list of expenses, the minimum amount
// of money that must change hands in order to equalize (within one cent) all the
// students' costs.
//
// ## Input
// An array denoting the tallied amount spent by each student in dollars and cents.
// There are no more than 1000 students and no student spent more than $10,000.00.
//
// ## Output
// Return the total amount, in dollars and cents, that must be exchanged to equalize the
// students cost.
//
// ## Sample
// uva10137([10.00, 20.00, 30.00]) // → 10.00
// uva10137([15.00, 15.01, 3.00, 3.01]) // → 11.99

function uva10137(spends) {
  return spends[1] - spends[0]; // Obviously wrong
}

module.exports = uva10137;
