import createFizzBuzzArray from "./create-fizzbuzz-array";

function createFizzBuzzString(n: number) {
  let fizzBuzzString = createFizzBuzzArray(n).join(", ");
  return fizzBuzzString;
}

export default createFizzBuzzString;

/*
PSEUDOCODE
===================
FUNCTION CREATE_FIZZBUZZ_STRING
PARAMS:
The output of function CREATE_FIZZBUZZ_ARRAY, (of type string/number array)
OUTPUTS:
FIZZBUZZ_STRING, (of type string),
 representing a sequence of incrementing numbers from 1 to N,
 where all numbers that meet one of three conditions are substituted for specific strings
===================
Declare a new var, FIZZBUZZ_STRING (of type string), and set it to be
 the output of CREATE_FIZZBUZZ_ARRAY, joined into a string, separated by ", "

 return FIZZBUZZ_STRING
*/
