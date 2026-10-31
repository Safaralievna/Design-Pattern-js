import { PC } from "./PC.js";

// Fluent builder: har bir setter `this` qaytaradi, shuning uchun zanjir qilib yozish mumkin.
// (PC.js va PCBuilder.js bir-birini import qiladi; ikkalasi ham faqat funksiya ichida
// ishlatilgani uchun ES modullarda bu muammo tug'dirmaydi.)
export class PCBuilder {
  #cpu;
  #ram;
  #os;
  #storage;
  #mouse;
  #keyboard;

  cpu(cpu) { this.#cpu = cpu; return this; }
  ram(ram) { this.#ram = ram; return this; }
  os(os) { this.#os = os; return this; }
  storage(storage) { this.#storage = storage; return this; }
  mouse(mouse) { this.#mouse = mouse; return this; }
  keyboard(keyboard) { this.#keyboard = keyboard; return this; }

  build() {
    // Java'da `== null`; bu yerda undefined ham null ham tekshiriladi (`== null` ikkalasini ushlaydi).
    if (
      this.#cpu == null || this.#ram == null || this.#os == null ||
      this.#storage == null || this.#mouse == null || this.#keyboard == null
    ) {
      // Java'dagi IllegalStateException o'rniga oddiy Error.
      throw new Error("RAM, OS, Storage, mouse and keyboards are required to build a PC.");
    }
    return new PC(this.#cpu, this.#ram, this.#os, this.#storage, this.#mouse, this.#keyboard);
  }
}
