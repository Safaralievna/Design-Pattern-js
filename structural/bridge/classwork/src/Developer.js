// Implementor: Java'dagi `interface Developer`. JavaScript'da interface yo'q, shuning uchun
// metodi xato tashlaydigan bazaviy klass ishlatiladi; to'g'ridan-to'g'ri yaratish taqiqlangan.
// Xato kompilyatsiyada emas, ishga tushganda bilinadi.
export class Developer {
  constructor() {
    if (new.target === Developer) {
      throw new TypeError("Developer abstrakt: JavaDeveloper yoki CppDeveloper'dan foydalaning.");
    }
  }

  writeCode() {
    throw new Error("writeCode() ni subklass amalga oshirishi kerak.");
  }
}
