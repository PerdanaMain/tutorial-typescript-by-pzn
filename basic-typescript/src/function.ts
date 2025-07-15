/**
 *  Function: sama seperti pada javascript, tetapi parameter perlu menentukan tipe datanya
 *  1. Pada return function, perlu juga menentukan tipe data return valuenya
 *  2. Jika bukan return function, bisa menggunakan tipe void atau tidak disebutkan
 *
 */

function sayHello(name: string): string {
  return `Hello, my name is ${name}`;
}

function printHello(name: string): void {
  console.info(`Hello, my name is ${name}`);
}

/**
 *  Function Parameter: setiap parameter wajib diisi kecuali ditentukan sebagai optional menggunakan tanda tanya (?)
 *
 */

export function sayHello2(name: string = "Guest"): string {
  return `Hello, my name is ${name}`;
}

export function sum(...values: number[]): number {
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total;
}

/**
 *  Function Overloading: untuk membuat function dengan nama yang sama, namun dengan parameter input yang berbedas
 *
 */

export function callMe(value: number): number;
export function callMe(value: string): string;
export function callMe(value: any) {
  if (typeof value === "string") {
    return value;
  } else if (typeof value === "number") {
    return value;
  }
}

/**
 *  Function sebagai parameter: ketika memanggil function yang membutuhkan callback function lainnya
 *  1.  dapat menggunakan interface atau bisa langsung disebutkan pada parameter lainnya, jumlah parameter dan return value function yang dibutuhkan
 */

export function sayHello3(name: string, filter: (name: string) => string) {
  return `Hello ${filter(name)}`;
}

export function toUpper(name: string): string {
  return name.toUpperCase();
}
