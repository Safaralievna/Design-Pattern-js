import { http } from "./http.js";
import { Methods } from "./enums/Methods.js";

// Java versiyasida izohda qoldirilgan misollar:
// const googleRequest = http.builder()
//   .method(Methods.GET)
//   .url("https://www.google.com")
//   .headers("Content-Type: application/json")
//   .body("{\n\t'name': 'John',\n\t'age': 30\n\t}")
//   .secure(true)
//   .build();

const request = http.builder()
  .method(Methods.GET)
  .url("https://jsonplaceholder.typicode.com/posts")
  .build();

// const request2 = http.builder()
//   .method(Methods.GET)
//   .url("https://jsonplaceholder.typicode.com/posts/2")
//   .build();

// send() asinxron, shuning uchun await kerak (ES modullarda top-level await mumkin).
console.log(await request.send());
// console.log(await request2.send());
