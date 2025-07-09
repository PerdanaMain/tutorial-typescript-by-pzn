import { sayHello } from "../src/say.hello";

describe("sayHello", (): void => {
  it("should return hello lex", (): void => {
    expect(sayHello("lex")).toBe("Hello, my name is lex");
  });
});
