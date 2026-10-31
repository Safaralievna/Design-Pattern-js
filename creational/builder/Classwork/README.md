# Builder Pattern — PC Classwork (JavaScript)

[Java versiyasi](../../../../creational/builder/Classwork) ning JavaScript (ES modules) varianti. Bir xil mahsulot (`PC`) ikki yo'l bilan yig'iladi: **Director** builder'ni qat'iy "retsept" bo'yicha yuritadi yoki **fluent builder** har bir qismni zanjir bilan o'rnatadi.

## Fayllar

```
src/
  Main.js                   kirish nuqtasi
  PC.js                     product
  PCBuilder.js              fluent builder
  ComputerBuilder.js        builder "interfeysi" (abstrakt klass)
  Director.js               yig'ish retseptlari
  MacBuilder.js
  WindowsLinuxBuilder.js
  check.js                  avtomatik tekshiruv
  enums/
    cpu.js  RAM.js  OS.js  storage.js  mouse.js  keyboard.js
```

## Java -> JavaScript farqlari

| Java | JavaScript'da qanday |
| --- | --- |
| `interface ComputerBuilder` | Interface yo'q. Metodlari `throw new Error(...)` qiladigan bazaviy klass; `new.target` bilan to'g'ridan-to'g'ri yaratish taqiqlangan. Xato kompilyatsiyada emas, **ishga tushganda** bilinadi. |
| `implements` | `extends` |
| `enum` | `Object.freeze({...})`; qiymatli enum (`RAM_8(8)`) uchun frozen obyekt `{ name, value, getValue(), toString() }` |
| `private final` | `#maydon` (haqiqiy private). `final` yo'q — o'zgarmaslik faqat kelishuv |
| package-private konstruktor | Yo'q; konstruktor ochiq, `PC.builder()` orqali yaratish kelishuvi |
| `IllegalStateException` | oddiy `Error` |
| tip tekshiruvi (`cpu`, `RAM` turlari) | Yo'q; noto'g'ri qiymat berilsa kompilyator emas, faqat o'zingiz yozgan tekshiruv ushlaydi |
| `toString()` + text block | `toString()` + template literal. Eslatma: Java matni oxirida `\n` bor edi (`println` bilan bo'sh qator chiqardi); bu yerda yo'q |

## Talab

Node.js 18 yoki yangiroq. `DESIGN-PATTERN-JS/package.json` da `"type": "module"` bor.

## Ishga tushirish

Shu papkadan:

```bash
node src/Main.js
node src/check.js     # natijani avtomatik tekshirish, oxirida "OK" chiqadi
```

Kutilgan natija (`Main.js`):

```
======== PC Specifications ========
CPU      : Apple_M4
RAM      : 16 GB
OS       : MACOS
Storage  : 512GB SSD
Mouse    : MOUSE
Keyboard : MECHANIC
===================================
======== PC Specifications ========
CPU      : Intel_Core_i7
RAM      : 8 GB
OS       : WINDOWS
Storage  : 256GB SSD
Mouse    : MOUSE
Keyboard : MECHANIC
===================================
```

## Fluent misol

`Main.js` da izoh qilib qoldirilgan (Java'dagidek). `check.js` uni sinaydi.

```js
const macBookAir = PC.builder()
  .cpu(cpu.Apple_M1)
  .ram(RAM.RAM_16)
  .os(OS.MACOS)
  .storage(storage.SSD_512)
  .mouse(mouse.TOUCHPAD)
  .keyboard(keyboard.MECHANIC)
  .build();
```

`build()` biror qism qo'yilmagan bo'lsa `Error` tashlaydi.
