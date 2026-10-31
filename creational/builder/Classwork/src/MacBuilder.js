import { ComputerBuilder } from "./ComputerBuilder.js";
import { PC } from "./PC.js";
import { cpu } from "./enums/cpu.js";
import { OS } from "./enums/OS.js";

// Concrete builder: Apple M4 + macOS ga qotirilgan.
// Java'dagi `implements ComputerBuilder` -> JavaScript'da `extends ComputerBuilder`.
export class MacBuilder extends ComputerBuilder {
  #cpu;
  #ram;
  #os;
  #storage;
  #mouse;
  #keyboard;

  buildCpu() { this.#cpu = cpu.Apple_M4; }
  buildOs() { this.#os = OS.MACOS; }
  buildRam(ram) { this.#ram = ram; }
  buildStorage(storage) { this.#storage = storage; }
  buildMouse(mouse) { this.#mouse = mouse; }
  buildKeyboard(keyboard) { this.#keyboard = keyboard; }

  getPc() {
    if (
      this.#cpu == null || this.#ram == null || this.#os == null ||
      this.#storage == null || this.#mouse == null || this.#keyboard == null
    ) {
      throw new Error("All parts are required to build a Mac.");
    }
    return new PC(this.#cpu, this.#ram, this.#os, this.#storage, this.#mouse, this.#keyboard);
  }
}
