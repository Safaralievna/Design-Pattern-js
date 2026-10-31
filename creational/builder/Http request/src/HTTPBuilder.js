import { http } from "./http.js";

// Fluent builder: har bir setter `this` qaytaradi.
export class HTTPBuilder {
  #method;
  #url;
  #headers;
  #body;
  #secure = false; // Java'da boolean standart qiymati false

  method(method) { this.#method = method; return this; }
  url(url) { this.#url = url; return this; }
  headers(headers) { this.#headers = headers; return this; }
  body(body) { this.#body = body; return this; }
  secure(secure) { this.#secure = secure; return this; }

  build() {
    // Java versiyasida bu tekshiruv izohda qoldirilgan:
    // if (method == Methods.GET && body != null) throw new IllegalArgumentException("GET requests must not have a body");
    return new http(this.#method, this.#url, this.#headers, this.#body, this.#secure);
  }
}
