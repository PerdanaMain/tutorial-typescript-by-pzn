// Tipe data array
const names: string[] = ["HAI", "JUDE", "IYA"];
const values: number[] = [1, 3, 5];
console.log(names, values);

// Tipe read only array
const hobbies: ReadonlyArray<string> = ["Coding", "For", "Life"];
console.log(hobbies);

// Tipe data tupple : merupakan array yang panjang dan tipe datanya sdh ditentukan
const person: [string, number, boolean] = ["Firman", 23, false];
// Tipe data readonly tupple
const things: readonly [string, number, boolean] = ["Vario", 2021, true];
