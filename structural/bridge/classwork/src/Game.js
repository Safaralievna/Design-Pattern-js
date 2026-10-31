import { Developer } from "./Developer.js";

// Abstraction: Java'dagi `abstract class Game`. `protected` JavaScript'da yo'q,
// shuning uchun `developer` oddiy ochiq maydon (kelishuv: faqat subklasslar ishlatadi).
export class Game {
  constructor(developer) {
    if (new.target === Game) {
      throw new TypeError("Game abstrakt: RacingGame yoki FootballGame'dan foydalaning.");
    }
    if (!(developer instanceof Developer)) {
      throw new TypeError("developer Developer bo'lishi kerak.");
    }
    this.developer = developer;
  }

  developGame() {
    throw new Error("developGame() ni subklass amalga oshirishi kerak.");
  }
}
