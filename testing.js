// Unit Test:

// 1. Function "multiplication" 
// Expected inputs to be multiplied and return result
//      multiplication(2, 10) to return result 
//      multiplication('a', 10) to expect numbers
//      multiplicaiton('4', 5) to expect integers not strings
//      multiplication() to give error for arguments
//      multiplication(3) to give error for 2 arguments

// 2. Function "concatOdds"
// Expected to take in 2 arrays and return odd nums in ascending order array
//      concatOdds([1,2],[4,5]) expect array  
//      concatOdds(arr1, arr2) expect variables containing arrays
//      concatOdds([1,2],[4,5]) return odds array [1,5]
//      concatOdds({1,2},[4,5]) expect error
//      concatOdds(['1','2'],['4','5]') expect convert strings to nums
//      concatOdds([9,2,3,7],[4,5]) expect sort arrays before iteration


// Functional Test:

// 1. Shopping cart feature for guest or account checkout
// Expected to allow users to checkout with their account or as guest with ability to create an account or log in through guest option.
//      if Cart is empty expect empty cart page
//      if user is already logged in expect checkout steps of payment, order review, shipping, then confirmation
//      if Cart has items and user is not signed in when selecting checkout, expect prompt for user log in or guest option as well as create account option.
//      if cart has items and user selects log in expect correct email and password then expect checkout steps
//      if cart has items and user selects log in with incorrect  email or password them expect error message for email and/or password
//      if cart has items and user selects checkout as guest expect checkout steps
//      if cart has items and user selects create account expect "create account" form to populate.
