// Tipe enum: tipe data yang nilainya sudah pasti kemudian dikonversi menjadi string pada javascript, namun juga dikonversi menjadi number

// Default Enum
// export enum ECustomerType {
//   REGULAR,
//   GOLD,
//   PLATINUM,
// }

// Kode enum sebagai string
export enum ECustomerType {
  REGULAR = "REGULAR",
  GOLD = "GOLD",
  PLATINUM = "PLATINUM",
}

export type TCustomer = {
  id: number;
  name: string;
  type: ECustomerType;
};

// contoh:
const customer: TCustomer = {
  id: 1,
  name: "Lex",
  type: ECustomerType.GOLD,
};
