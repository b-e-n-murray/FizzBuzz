/*
PSEUDOCODE
===================
FUNCTION CREATE_FIZZBUZZ_SEQUENCE
PARAMS:
N, (of type number), which denotes the final number of the sequence
OUTPUTS:
FIZZBUZZ_SEQUENCE, (of type string),
 representing a sequence of incrementing numbers from 1 to N,
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

Declare a new var, FIZZBUZZ_SEQUENCE (of type string), and set it to be 
equal to FIZZBUZZ_ARRAY, joined at each comma

return FIZZBUZZ_SEQUENCE
*/

