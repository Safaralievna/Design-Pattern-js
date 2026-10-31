import { RAM } from "./enums/RAM.js";
import { storage } from "./enums/storage.js";
import { mouse } from "./enums/mouse.js";
import { keyboard } from "./enums/keyboard.js";

// Director: "retsept"larni biladi, qaysi builder berilishidan qat'i nazar bir xil qadamlarni bajaradi.
export class Director {
  constructOfficePC(builder) {
    builder.buildCpu();
    builder.buildOs();
    builder.buildRam(RAM.RAM_8);
    builder.buildStorage(storage.SSD_256);
    builder.buildMouse(mouse.MOUSE);
    builder.buildKeyboard(keyboard.MECHANIC);
    return builder.getPc();
  }

  constructPowerPC(builder) {
    builder.buildCpu();
    builder.buildOs();
    builder.buildRam(RAM.RAM_16);
    builder.buildStorage(storage.SSD_512);
    builder.buildMouse(mouse.MOUSE);
    builder.buildKeyboard(keyboard.MECHANIC);
    return builder.getPc();
  }
}
