// Oddiy tekshiruv: `node src/check.js`. Hammasi to'g'ri bo'lsa "OK" chiqadi, aks holda xato bilan to'xtaydi.
import assert from "node:assert/strict";
import { Director } from "./Director.js";
import { MacBuilder } from "./MacBuilder.js";
import { WindowsLinuxBuilder } from "./WindowsLinuxBuilder.js";
import { ComputerBuilder } from "./ComputerBuilder.js";
import { PC } from "./PC.js";
import { OS } from "./enums/OS.js";
import { cpu } from "./enums/cpu.js";
import { RAM } from "./enums/RAM.js";
import { storage } from "./enums/storage.js";
import { mouse } from "./enums/mouse.js";
import { keyboard } from "./enums/keyboard.js";

const d = new Director();
const mac = d.constructPowerPC(new MacBuilder()).toString();
assert.match(mac, /CPU      : Apple_M4/);
assert.match(mac, /RAM      : 16 GB/);
assert.match(mac, /Storage  : 512GB SSD/);
const win = d.constructOfficePC(new WindowsLinuxBuilder(OS.WINDOWS)).toString();
assert.match(win, /CPU      : Intel_Core_i7/);
assert.match(win, /OS       : WINDOWS/);
assert.match(win, /RAM      : 8 GB/);
assert.match(d.constructOfficePC(new WindowsLinuxBuilder(OS.LINUX)).toString(), /OS       : LINUX/);

// macOS WindowsLinuxBuilder'ga berilsa rad etiladi
assert.throws(() => new WindowsLinuxBuilder(OS.MACOS), /Use MacBuilder for macOS/);
// Abstrakt klass to'g'ridan-to'g'ri yaratilmaydi
assert.throws(() => new ComputerBuilder(), TypeError);
// Qadamlar bajarilmasa getPc() xato beradi
assert.throws(() => new MacBuilder().getPc(), /All parts are required/);

// Fluent builder
const air = PC.builder().cpu(cpu.Apple_M1).ram(RAM.RAM_16).os(OS.MACOS)
  .storage(storage.SSD_512).mouse(mouse.TOUCHPAD).keyboard(keyboard.MECHANIC).build();
assert.match(air.toString(), /CPU      : Apple_M1[\s\S]*Mouse    : TOUCHPAD/);
assert.throws(() => PC.builder().cpu(cpu.Apple_M1).build(), /required to build a PC/);

console.log("OK: Classwork tekshiruvlari o'tdi");
