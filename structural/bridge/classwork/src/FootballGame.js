import { Game } from "./Game.js";

export class FootballGame extends Game {
  developGame() {
    console.log("Football game development in progress ...");
    this.developer.writeCode();
    console.log("Football game development completed");
  }
}
