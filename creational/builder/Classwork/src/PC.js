import { PCBuilder } from "./PCBuilder.js";

// Product: tayyor kompyuter. Java'dagi `private final` maydonlar o'rniga
// JavaScript'ning haqiqiy private maydonlari (#nom) ishlatiladi.
// Eslatma: Java'da konstruktor package-private (`PC(...)`) edi; JavaScript'da bunday
// darajа yo'q, shuning uchun konstruktor oddiy ochiq qoladi (kelishuv: builder orqali yarating).
export class PC {
  #cpu;
  #ram;
  #os;
  #storage;
  #mouse;
  #keyboard;

  constructor(cpu, ram, os, storage, mouse, keyboard) {
    this.#cpu = cpu;
    this.#ram = ram;
    this.#os = os;
    this.#storage = storage;
    this.#mouse = mouse;
    this.#keyboard = keyboard;
  }

  static builder() {
    return new PCBuilder();
  }

  // Java'dagi toString() -- JavaScript'da ham shu nom; shablon satri (template literal)
  // Java text block + formatted() o'rnini bosadi.
  toString() {
    const ram = this.#ram != null ? `${this.#ram.getValue()} GB` : "Not selected";
    const storage = this.#storage != null ? `${this.#storage.getValue()}GB SSD` : "Not selected";
    return [
      "======== PC Specifications ========",
      `CPU      : ${this.#cpu}`,
      `RAM      : ${ram}`,
      `OS       : ${this.#os}`,
      `Storage  : ${storage}`,
      `Mouse    : ${this.#mouse}`,
      `Keyboard : ${this.#keyboard}`,
      "===================================",
    ].join("\n");
  }
}
