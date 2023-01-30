import createFizzBuzzSequence from "./create-fizzbuzz-array";

test("length of array matches input, n", () => {
  expect(createFizzBuzzSequence(15).length).toEqual(15);
  expect(createFizzBuzzSequence(30).length).toEqual(30);
  expect(createFizzBuzzSequence(0).length).toEqual(0);
});
