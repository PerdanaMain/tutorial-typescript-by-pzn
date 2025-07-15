import { sayHello2, sayHello3, toUpper, sum, callMe } from "../src/function";

test("Handle parameter function", () => {
  expect(sayHello2()).toBe("Hello, my name is Guest");
  expect(sum(1, 2, 3, 4, 5)).toBe(15);
  expect(callMe(100)).toBe(100);
  expect(callMe("Eko")).toBe("Eko");

  expect(sayHello3("Eko", toUpper)).toBe("Hello EKO");
  //   anonymous function
  expect(
    sayHello3("Eko", (name: string): string => {
      return name.toUpperCase();
    })
  ).toBe("Hello EKO");
});
