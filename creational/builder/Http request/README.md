# Builder Pattern — HTTP Request (JavaScript)

[Java versiyasi](../../../../creational/builder/Http%20request) ning JavaScript (ES modules) varianti. **Fluent Builder** HTTP so'rovni yig'adi: method, URL, headers, body va secure flag zanjir bilan beriladi, `build()` esa o'zgarmas `http` obyektini qaytaradi.

## Fayllar

```
src/
  Main.js            kirish nuqtasi
  http.js            product
  HTTPBuilder.js     fluent builder
  check.js           tarmoqsiz avtomatik tekshiruv
  enums/
    Methods.js       GET, POST, PUT, DELETE
```

## Nimani ko'rsatadi

- **Product** — `http` method, URL, headers, body va secure ni saqlaydi.
- **Fluent builder** — `HTTPBuilder` har bir setterda `this` qaytaradi; qismlarni istalgan tartibda berish mumkin. Kirish nuqtasi: `http.builder()`.
- `Main.js` JSONPlaceholder `posts` ro'yxatiga GET so'rov yuboradi va javob matnini chiqaradi.
- `send()` hozircha faqat URL ga **GET** yuboradi (Java'dagidek). Method, headers, body, secure obyektda saqlanadi va `toString()` da ko'rinadi, lekin yuborishda ishlatilmaydi.

## Java -> JavaScript farqlari

| Java | JavaScript'da qanday |
| --- | --- |
| `java.net.http.HttpClient` (bloklaydi) | Node'ning o'rnatilgan `fetch` — **asinxron**. `send()` Promise qaytaradi, shuning uchun `await` kerak; `throws Exception` o'rniga `try/catch` yoki rejected Promise |
| `enum Methods` | `Object.freeze({...})` |
| package-private konstruktor | Yo'q; `http.builder()` orqali yaratish kelishuvi |
| `private final` | `#maydon` |
| `boolean secure` (standart `false`) | `#secure = false` deb aniq berildi |
| tip tekshiruvi | Yo'q; `url` ga string o'rniga boshqa narsa berilsa faqat ishga tushganda xato chiqadi |
| text block `toString()` | template literal / `join("\n")` |

`send(fetchImpl = fetch)` ga ixtiyoriy parametr qo'shildi — shu bilan `check.js` tarmoqsiz, soxta `fetch` bilan tekshira oladi.

## Talab

Node.js 18+ (o'rnatilgan `fetch` uchun). Hech qanday kutubxona kerak emas.

## Ishga tushirish

Shu papkadan:

```bash
node src/Main.js     # internet kerak: JSON massivi chiqadi ([{ "userId": 1, "id": 1, ... }, ...])
node src/check.js    # internetsiz tekshiruv, oxirida "OK" chiqadi
```

## Fluent misol

```js
const request = http.builder()
  .method(Methods.GET)
  .url("https://jsonplaceholder.typicode.com/posts/1")
  .headers("Accept: application/json")
  .secure(true)
  .build();

console.log(request.toString());
console.log(await request.send());
```
