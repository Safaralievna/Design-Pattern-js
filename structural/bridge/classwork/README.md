# Bridge — Classwork (JavaScript)

Bridge pattern: **abstraction** (`Game`: `RacingGame`, `FootballGame`) va **implementor** (`Developer`: `JavaDeveloper`, `CppDeveloper`) bir-biridan mustaqil o'zgaradi; `Game` ichida `developer` havolasi ko'prik vazifasini bajaradi.

## Fayllar

```
src/
  Main.js            kirish nuqtasi
  Game.js            abstraction (abstrakt klass)
  RacingGame.js      refined abstraction
  FootballGame.js    refined abstraction
  Developer.js       implementor "interfeysi" (abstrakt klass)
  JavaDeveloper.js
  CppDeveloper.js
  check.js           avtomatik tekshiruv
```

## Java -> JavaScript farqlari

| Java | JavaScript'da qanday |
| --- | --- |
| `interface Developer` | Interface yo'q. `writeCode()` xato tashlaydigan bazaviy klass; `new.target` bilan to'g'ridan-to'g'ri yaratish taqiqlangan. Xato ishga tushganda bilinadi. |
| `abstract class Game` | `new.target` tekshiruvi bilan oddiy klass |
| `implements` / `extends` | ikkalasi ham `extends` |
| `protected Developer developer` | `protected` yo'q; oddiy ochiq maydon. Tip tekshiruvi o'rniga konstruktorda `instanceof Developer` |
| `System.out.println` | `console.log` |

## Talab

Node.js 18 yoki yangiroq. `DESIGN-PATTERN-JS/package.json` da `"type": "module"` bor.

## Ishga tushirish

Shu papkadan:

```bash
node src/Main.js
node src/check.js     # oxirida "OK" chiqadi
```
