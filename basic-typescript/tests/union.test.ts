import { process } from "../src/union";

test("process handling input", () => {
  expect(process("hello")).toBe("HELLO");
  expect(process(1)).toBe(3);
  expect(process(false)).toBe(true);
});
