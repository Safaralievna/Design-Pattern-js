// Tarmoqsiz tekshiruv: `node src/check.js`. fetch o'rniga soxta (fake) funksiya beriladi.
import assert from "node:assert/strict";
import { http } from "./http.js";
import { Methods } from "./enums/Methods.js";

const req = http.builder()
  .method(Methods.GET)
  .url("https://jsonplaceholder.typicode.com/posts/1")
  .headers("Accept: application/json")
  .secure(true)
  .build();

const text = req.toString();
assert.match(text, /^HTTPS Request:/);
assert.match(text, /"method": "GET"/);
assert.match(text, /"url": "https:\/\/jsonplaceholder.typicode.com\/posts\/1"/);
assert.match(text, /"headers": "Accept: application\/json"/);
assert.match(text, /"body": null/);
assert.match(text, /"secure": "true"/);

// secure berilmasa -> HTTP / "false"
const plain = http.builder().method(Methods.POST).url("http://x").build().toString();
assert.match(plain, /^HTTP Request:/);
assert.match(plain, /"secure": "false"/);

// send(): URL ga GET so'rov ketadi va javob matni qaytadi
let called;
const fakeFetch = async (url, options) => {
  called = { url, options };
  return { text: async () => '[{"id":1}]' };
};
assert.equal(await req.send(fakeFetch), '[{"id":1}]');
assert.deepEqual(called, { url: "https://jsonplaceholder.typicode.com/posts/1", options: { method: "GET" } });

console.log("OK: Http request tekshiruvlari o'tdi");
