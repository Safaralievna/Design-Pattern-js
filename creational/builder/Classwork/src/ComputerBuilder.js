// Java: public interface ComputerBuilder { ... }
// JavaScript'da `interface` YO'Q. Eng yaqin yechim -- metodlari xato tashlaydigan
// "abstrakt" bazaviy klass. Voris klass metodlarni override qilmasa, chaqirilganda
// xato chiqadi (Java'da esa bu kompilyatsiya vaqtida aniqlanardi).
export class ComputerBuilder {
  constructor() {
    if (new.target === ComputerBuilder) {
      throw new TypeError("ComputerBuilder abstrakt: uni to'g'ridan-to'g'ri yaratib bo'lmaydi.");
    }
  }

  buildCpu() { throw new Error("buildCpu() ni amalga oshirish kerak"); }
  buildOs() { throw new Error("buildOs() ni amalga oshirish kerak"); }
  buildRam(_ram) { throw new Error("buildRam() ni amalga oshirish kerak"); }
  buildStorage(_storage) { throw new Error("buildStorage() ni amalga oshirish kerak"); }
  buildMouse(_mouse) { throw new Error("buildMouse() ni amalga oshirish kerak"); }
  buildKeyboard(_keyboard) { throw new Error("buildKeyboard() ni amalga oshirish kerak"); }
  getPc() { throw new Error("getPc() ni amalga oshirish kerak"); }
}
