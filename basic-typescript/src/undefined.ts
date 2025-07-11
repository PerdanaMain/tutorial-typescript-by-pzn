import { sayHello } from "./say.hello";

const name: string | undefined = undefined;
sayHello(name ?? "");
// sayHello(null); // error
