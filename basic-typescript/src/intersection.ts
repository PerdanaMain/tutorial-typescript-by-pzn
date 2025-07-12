/**
 *  Intersection: cara baru untuk membuat tipe data dengan menggabungkan dua tipe data lain
 *
 *
 *
 */

export interface HasName {
  name: string;
}

export interface HasId {
  id: string;
}

export type TDomain = HasId & HasName;

const domain: TDomain = {
  id: "1",
  name: "Eko",
};
console.info(domain);
