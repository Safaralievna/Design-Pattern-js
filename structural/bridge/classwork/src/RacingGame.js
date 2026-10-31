import { Game } from "./Game.js";

export class RacingGame extends Game {
  developGame() {
    console.log("Racing game development in progress ...");
    this.developer.writeCode();
    console.log("Racing game development completed");
  }
}
