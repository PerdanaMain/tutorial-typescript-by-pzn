// Tipe data union: untuk membuat variable yang bisa berubah bentuk tipe data
let sample: number | string | boolean = "Firman";
sample = 12;
sample = true;

export const process = (value: number | string | boolean) => {
  if (typeof value == "string") {
    return value.toUpperCase();
  } else if (typeof value == "number") {
    return value + 2;
  } else {
    return !value;
  }
};
