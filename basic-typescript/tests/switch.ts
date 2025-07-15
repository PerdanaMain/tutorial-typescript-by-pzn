import { sayHello } from "../src/switch";

test("handle switch", (): void => {
  expect(sayHello("Eko")).toBe("Hello Eko");
  expect(sayHello("asdas")).toBe("Hello");
});
