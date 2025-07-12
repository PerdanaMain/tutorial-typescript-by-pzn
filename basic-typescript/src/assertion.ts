/**
 *  Assertion: untuk melakukan konversi ke tipe data yang diinginkan
 *
 */
export interface IPerson {
  name: string;
  age: number;
}

const person5: any = {
  name: "Eko",
  age: 22,
};

const person6: IPerson = person5 as IPerson;
console.info(person6);
