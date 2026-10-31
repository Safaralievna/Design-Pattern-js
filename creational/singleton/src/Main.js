import { database } from "./database.js";

const prodDB = database.getInstance("jdbc:mysql://localhost/shop");
const devDB = database.getInstance("jdbc:mysql://localhost/shop");

// Ikkalasi bitta obyekt bo'lgani uchun `true` chiqadi (=== JavaScript'da havola tengligini tekshiradi,
// xuddi Java'dagi == kabi).
console.log(prodDB === devDB);
