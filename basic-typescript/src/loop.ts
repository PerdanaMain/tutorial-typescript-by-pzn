/**
 *  loop: sama seperti pada yang dilakukan dalam javascript dan mendukung semua tipe loop seperti for, for in, for of
 *
 *
 */

const names2 = ["Eko", "Kurniawan", "Khannedy"];

// for i
for (let i = 0; i < names2.length; i++) {
  console.info(names2[i]);
}

// for of
for (const name of names2) {
  console.info(name);
}

// for in
for (const index in names2) {
  console.info(names[index]);
}

let counter = 0;

// while loop
while (counter > 0) {
  counter++;
}

// do while
do {
  counter++;
} while (counter < 10);

// break and continue
do {
  counter++;

  if (counter == 4) {
    break;
  }

  if (counter % 2 == 0) {
    continue;
  }
} while (true);
