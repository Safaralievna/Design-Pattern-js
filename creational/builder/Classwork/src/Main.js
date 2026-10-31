import { Director } from "./Director.js";
import { MacBuilder } from "./MacBuilder.js";
import { WindowsLinuxBuilder } from "./WindowsLinuxBuilder.js";
import { OS } from "./enums/OS.js";

const director = new Director();

const mac = director.constructPowerPC(new MacBuilder());
const windows = director.constructOfficePC(new WindowsLinuxBuilder(OS.WINDOWS));

console.log(mac.toString());
console.log(windows.toString());

// --- Fluent builder (Java versiyasida izohda qoldirilgan edi; bu yerda ham izohda) ---
// import { PC } from "./PC.js";
// import { cpu } from "./enums/cpu.js";
// import { RAM } from "./enums/RAM.js";
// import { storage } from "./enums/storage.js";
// import { mouse } from "./enums/mouse.js";
// import { keyboard } from "./enums/keyboard.js";
//
// const macBookAir = PC.builder()
//   .cpu(cpu.Apple_M1)
//   .ram(RAM.RAM_16)
//   .os(OS.MACOS)
//   .storage(storage.SSD_512)
//   .mouse(mouse.TOUCHPAD)
//   .keyboard(keyboard.MECHANIC)
//   .build();
//
// const lenovo = PC.builder()
//   .cpu(cpu.Intel_Core_i5)
//   .ram(RAM.RAM_8)
//   .os(OS.WINDOWS)
//   .storage(storage.SSD_256)
//   .mouse(mouse.MOUSE)
//   .keyboard(keyboard.MECHANIC)
//   .build();
//
// console.log(lenovo.toString());
// console.log(macBookAir.toString());
