const myFunction = require("./functions.js");

test("should run basic test", () => {
  expect(myFunction.returnTwo()).toBe(2);
});

test("should return Hello name", () => {
  expect(myFunction.greeting("James")).toBe("Hello, James");
});

test("should return sum of two nums", () => {
  expect(myFunction.add(1, 2)).toBe(3);
});