import { ComputerBuilder } from "./ComputerBuilder.js";
import { PC } from "./PC.js";
import { cpu } from "./enums/cpu.js";
import { OS } from "./enums/OS.js";

// Concrete builder: Intel Core i7 + konstruktorga berilgan OS (Windows yoki Linux).
export class WindowsLinuxBuilder extends ComputerBuilder {
  #cpu;
  #ram;
  #os;
  #storage;
  #mouse;
  #keyboard;

  constructor(os) {
    super(); // voris klass konstruktorida `this` dan oldin super() chaqirilishi shart
    if (os === OS.MACOS) {
      throw new Error("Use MacBuilder for macOS.");
    }
    this.#os = os;
  }

  buildCpu() { this.#cpu = cpu.Intel_Core_i7; }
  // OS konstruktorda o'rnatilgan, shuning uchun bu yerda hech narsa qilinmaydi (Java'dagidek).
  buildOs() {}
  buildRam(ram) { this.#ram = ram; }
  buildStorage(storage) { this.#storage = storage; }
  buildMouse(mouse) { this.#mouse = mouse; }
  buildKeyboard(keyboard) { this.#keyboard = keyboard; }

  getPc() {
    if (
      this.#cpu == null || this.#ram == null || this.#os == null ||
      this.#storage == null || this.#mouse == null || this.#keyboard == null
    ) {
      throw new Error("All parts are required to build a Windows/Linux PC.");
    }
    return new PC(this.#cpu, this.#ram, this.#os, this.#storage, this.#mouse, this.#keyboard);
  }
}
