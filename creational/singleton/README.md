# Singleton (JavaScript)

[Java versiyasi](../../../creational/singleton) ning JavaScript (ES modules) varianti. Singleton — klassdan butun dastur davomida **faqat bitta** obyekt yaratilishini kafolatlaydi.

## Fayllar

```
src/
  Main.js        ikki marta getInstance() chaqiradi va ular bir obyekt ekanini ko'rsatadi
  database.js    Singleton klass
  check.js       avtomatik tekshiruv
```

## Java -> JavaScript farqlari

- Java'da `private` konstruktor tashqaridan `new` ni butunlay taqiqlaydi. JavaScript'da private konstruktor **yo'q**; `database.js` da `static #creating` bayrog'i bilan `new database()` ni qo'lda to'sdik. Bu to'liq himoya emas, kelishuvga yaqin yechim.
- Java'da `private static database instance;` -> JavaScript'da `static #instance`.
- `==` (havola tengligi) -> `===`.
- JavaScript'ga xos soddaroq yo'l: ES moduli o'zi bir marta bajariladi va keshlanadi, shuning uchun `export const db = new Database(url)` ham amalda Singleton. Bu yerda esa Java misoliga mos `getInstance` ko'rsatildi.
- Node.js bitta jarayonda ishlaydi (`worker_threads` ishlatilmasa), shuning uchun Java'dagi ko'p oqimli (thread-safe) muammo bu yerda yo'q.

## Ishga tushirish

Shu papkadan (Node.js 18+):

```bash
node src/Main.js
node src/check.js    # oxirida "OK" chiqadi
```

Kutilgan natija (`Main.js`):

```
Database connected to jdbc:mysql://localhost/shop
true
```

"Database connected" faqat **bir marta** chiqadi — ikkinchi `getInstance` yangi obyekt yaratmaydi.
