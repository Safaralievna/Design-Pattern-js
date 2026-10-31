// Oddiy tekshiruv: `node src/check.js`. Hammasi to'g'ri bo'lsa "OK" chiqadi, aks holda xato bilan to'xtaydi.
import assert from "node:assert/strict";
import { Developer } from "./Developer.js";
import { Game } from "./Game.js";
import { RacingGame } from "./RacingGame.js";
import { FootballGame } from "./FootballGame.js";
import { JavaDeveloper } from "./JavaDeveloper.js";
import { CppDeveloper } from "./CppDeveloper.js";

// console.log'ni vaqtincha ushlab, chiqqan satrlarni yig'amiz
function capture(fn) {
  const lines = [];
  const original = console.log;
  console.log = (s) => lines.push(s);
  try {
    fn();
  } finally {
    console.log = original;
  }
  return lines;
}

assert.deepEqual(capture(() => new RacingGame(new JavaDeveloper()).developGame()), [
  "Racing game development in progress ...",
  "Java developer writes Java code",
  "Racing game development completed",
]);
assert.deepEqual(capture(() => new RacingGame(new CppDeveloper()).developGame()), [
  "Racing game development in progress ...",
  "C++ developer writes C++ code",
  "Racing game development completed",
]);
assert.deepEqual(capture(() => new FootballGame(new JavaDeveloper()).developGame()), [
  "Football game development in progress ...",
  "Java developer writes Java code",
  "Football game development completed",
]);
assert.deepEqual(capture(() => new FootballGame(new CppDeveloper()).developGame()), [
  "Football game development in progress ...",
  "C++ developer writes C++ code",
  "Football game development completed",
]);

// Abstrakt klasslar to'g'ridan-to'g'ri yaratilmaydi
assert.throws(() => new Developer(), TypeError);
assert.throws(() => new Game(new JavaDeveloper()), TypeError);
// Noto'g'ri developer rad etiladi
assert.throws(() => new RacingGame({}), TypeError);
// Metodni override qilmagan subklass xato beradi
class Lazy extends Developer {}
assert.throws(() => new Lazy().writeCode(), /subklass amalga oshirishi/);

console.log("OK: Bridge tekshiruvlari o'tdi");
