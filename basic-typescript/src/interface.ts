/** Interface: untuk mendeklarasikan data selain type
 *  Perbedaan Interface dan Type:
 *  1. Interface dapat digunakan lebih fleksibel seperti penggunaan pewarisan (inheritence) dan extends
 *  2. Type hanya dapat digunakan untuk data terbatas untuk data primitif seperti union, enum, string, dll
 *
 *
 *  Readonly Interface: properti tidak dapat diubah lagi
 *  Function Interface: untuk mendeklarasikan function dalam interface seperti mendeklarasikan variabel
 *  Indexable Interface: untuk membuat tipe data dengan jenis yang memiliki index seperti array atau object
 *  Extending Interface: untuk melanjutkan tipe data ke interface lain
 *  Function Interface:   untuk menambahkan function sebagai attribute interface
 */

export interface ISeller {
  id: number;
  name: string;
  address?: string;
  readonly nib: string; // readonly interface
  readonly npwp: string; // readonly interface
}

const seller: ISeller = {
  id: 1,
  name: "Seller 1",
  address: "Alamat",
  nib: "2511",
  npwp: "2511",
};

console.info(seller);

// Function Interface
export interface IAddFunction {
  (value1: number, value2: number): number;
}

export const add: IAddFunction = (value1: number, value2: number): number => {
  return value1 + value2;
};

// Indexable Interface: array
export interface IStringArray {
  [index: number]: string;
}
const names: IStringArray = ["Eko", "Kurniawan", "Yes"];
console.info(names);

// Indexable Interface: object
export interface IStringDictionary {
  [key: string]: string;
}
const dictionary: IStringDictionary = { name: "Eko", address: "Surabaya" };
console.info(dictionary);

// Extending Interface
interface IEmployee {
  id: string;
  name: string;
  division: string;
}

interface IManager extends IEmployee {
  numberOfEmployee: number;
}

const employee: IEmployee = {
  id: "1",
  name: "Eko",
  division: "IT",
};

const manager: IManager = {
  id: "1",
  name: "kurniawan",
  division: "IT",
  numberOfEmployee: 5,
};

console.info(employee, manager);

// Function interface
interface IPerson {
  name: string;
  sayHello(name: string): string;
}

const person: IPerson = {
  name: "Eko",
  sayHello: (name: string): string => {
    return `Hello, my name is ${name}`;
  },
};
console.info(person.sayHello("Budi"));
