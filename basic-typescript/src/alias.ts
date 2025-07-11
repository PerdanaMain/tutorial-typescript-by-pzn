// Tipe alias: untuk membuat tipe data sendiri
export type TCategory = {
  id: ID;
  name: string;
};

export type TProduct = {
  id: ID;
  name: string;
  price: number;
  category: TCategory;
};

// Alias dapat digunakan untuk membuat tipe data union
export type ID = string | number;

