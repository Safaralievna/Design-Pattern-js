import { HTTPBuilder } from "./HTTPBuilder.js";

// Product: o'zgarmas (immutable) HTTP so'rov.
// Java'da konstruktor package-private edi; JavaScript'da bunday daraja yo'q,
// shuning uchun so'rovlarni `http.builder()` orqali yaratish kelishuvi.
export class http {
  #method;
  #url;
  #headers;
  #body;
  #secure;

  constructor(method, url, headers, body, secure) {
    this.#method = method;
    this.#url = url;
    this.#headers = headers;
    this.#body = body;
    this.#secure = secure;
  }

  static builder() {
    return new HTTPBuilder();
  }

  toString() {
    // Java versiyasidagi chiqish shaklini saqlaymiz (JSON emas, shunchaki matn).
    // undefined/null qiymat Java'dagi `null` kabi "null" deb chiqariladi.
    const show = (v) => (v == null ? "null" : v);
    return [
      `${this.#secure ? "HTTPS" : "HTTP"} Request:`,
      "{",
      `  "method": "${show(this.#method)}"`,
      `  "url": "${show(this.#url)}"`,
      `  "headers": "${show(this.#headers)}"`,
      `  "body": ${show(this.#body)}`,
      `  "secure": "${this.#secure ? "true" : "false"}"`,
      "}",
    ].join("\n");
  }

  // Java'da HttpClient.send() bloklanadi; JavaScript'da tarmoq so'rovi asinxron,
  // shuning uchun send() Promise qaytaradi va `await` bilan chaqiriladi.
  // Java'dagidek hozircha faqat GET yuboriladi: method/headers/body/secure saqlanadi,
  // lekin yuborishda ishlatilmaydi.
  async send(fetchImpl = fetch) {
    const response = await fetchImpl(this.#url, { method: "GET" });
    return await response.text();
  }
}
