// Singleton: butun dastur bo'yicha faqat bitta `database` obyekti bo'ladi.
//
// Java: `private static database instance;` va `private database(String url)`.
// JavaScript: klass ichidagi `static #instance` (private static) va getInstance() ishlatiladi.
// Muhim farq: JavaScript'da konstruktorni "private" qilib bo'lmaydi, shuning uchun
// `new database(...)` ni tashqaridan to'sib bo'lmaydi. Quyida buni konstruktorda `#creating`
// bayrog'i bilan to'sib, Java'dagi `private` konstruktorga yaqinlashtiramiz.
export class database {
  static #instance = null;
  static #creating = false;
  #url;

  constructor(url) {
    if (!database.#creating) {
      throw new Error("new database() ishlatmang: database.getInstance(url) dan foydalaning.");
    }
    this.#url = url;
    console.log("Database connected to " + url);
  }

  static getInstance(url) {
    if (database.#instance === null) {
      database.#creating = true;
      try {
        database.#instance = new database(url);
      } finally {
        database.#creating = false;
      }
    }
    // Java'dagidek: ikkinchi chaqiruvdagi url e'tiborga olinmaydi, mavjud obyekt qaytariladi.
    return database.#instance;
  }

  get url() {
    return this.#url;
  }
}
