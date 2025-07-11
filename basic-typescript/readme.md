## This is For Documentation of Learning Basic Typescript

#### TS Compilation :

    1. Kode Typescript tidak bisa langsung dijalankan / eksekusi, harus dilakukan kompilasi ke javascript dahulu.
    2. Menggunakan perintah ``` npx tsc ```
    3. Secara default, semua file hasil kompilasi akan disimpan di lokasi yang sama dengan typescript
    4. Kadang praktek programmer typscript, memisahkan lokasi kompilasi ke sebuah folder misal dist (distribution)

    ----- Kode : Mengubah Lokasi Hasil Kompilasi -----
    dapat diubah pada file tsconfig.json
    "outDir": "dist/",

    ----- Include dan Exclude -----
    1. Secara default, semua file ts akan coba dikompilasi oleh TypeScript, kadang-kadang kita tidak membutuhkan hal tersebut
    2. Misal kita hanya ingin melakukan kompilasi untuk kode program, dan tidak butuh melakukan kompilasi untuk kode unit test
    3. Kita bisa tambahkan include dan exclude pada tsconfig.json nya
        "include": ["src/**/*.ts", "src/**/*.tsx"],
        "exclude": ["src/**/*.test.ts", "src/**/*.test.tsx"],

### TS Primitif Data :
