/*
PSEUDOCODE
===================
FUNCTION CREATE_FIZZBUZZ_ARRAY
PARAMS:
N, (of type number), which denotes the final number of the sequence
OUTPUTS:
FIZZBUZZ_ARRAY, (of type string/number array),
 a sequence of incrementing numbers from 1 to N,
 where all numbers that meet one of three conditions are substituted for specific strings
===================
Declare new var, CURRENT_NUM, (of type number), to act as an incrementor of the following 'while' loop, and set it to 1
Declare new var, FIZZBUZZ_ARRAY, (of type string/number array), and set it to be empty

WHILE CURRENT_NUM is less than or equal to N
      IF 
            CURRENT_NUM divided by 3 gives a whole number
            AND CURRENT_NUM divided by 5 gives a whole number
                push "FizzBuzz" into FIZZBUZZ_ARRAY
      ENDIF.
      IF 
            CURRENT_NUM divided by 3 gives a whole number
            push "Fizz" into FIZZBUZZ_ARRAY
      ENDIF.
      IF 
            CURRENT_NUM divided by 3 gives a whole number
            push "Buzz" into FIZZBUZZ_ARRAY
      ENDIF.
ENDWHILE.

return FIZZBUZZ_ARRAY

=================== */

function createFizzBuzzArray(n: number): (string | number)[] {
  let currentNum = 1;
  const fizzBuzzArr: (string | number)[] = [];
  while (currentNum <= n) {
    currentNum % 3 === 0 && currentNum % 5 === 0
      ? fizzBuzzArr.push("FizzBuzz")
      : currentNum % 3 === 0
      ? fizzBuzzArr.push("Fizz")
      : currentNum % 5 === 0
      ? fizzBuzzArr.push("Buzz")
      : fizzBuzzArr.push(currentNum);
    currentNum++;
  }
  return fizzBuzzArr;
}
export default createFizzBuzzArray;
