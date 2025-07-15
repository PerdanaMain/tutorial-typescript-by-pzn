/**
 *  Switch: sama seperti yang dilakukan pada javascript
 *
 */

export function sayHello(name: string): string {
  switch (name) {
    case "Eko":
      return "Hi Eko";
    case "Budi":
      return "Hi Budi";
    default:
      return "Hello";
  }
}

