import createFizzBuzzString from "../fizzbuzz";

test("input n produces correct string", () => {
  expect(createFizzBuzzString(0)).toBe("");
  expect(createFizzBuzzString(5)).toBe("1, 2, Fizz, 4, Buzz");
  expect(createFizzBuzzString(15)).toBe(
    "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz"
  );
});
