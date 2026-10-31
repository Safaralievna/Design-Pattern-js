// `node src/check.js` -- Singleton xatti-harakatini tekshiradi.
import assert from "node:assert/strict";
import { database } from "./database.js";

const a = database.getInstance("jdbc:mysql://localhost/shop");
const b = database.getInstance("jdbc:mysql://boshqa/url");
assert.equal(a, b);                                   // bitta obyekt
assert.equal(b.url, "jdbc:mysql://localhost/shop");   // ikkinchi url e'tiborga olinmagan
assert.throws(() => new database("x"), /getInstance/); // to'g'ridan-to'g'ri yaratib bo'lmaydi

console.log("OK: Singleton tekshiruvlari o'tdi");
