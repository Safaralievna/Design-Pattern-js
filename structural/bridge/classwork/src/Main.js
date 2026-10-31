import { RacingGame } from "./RacingGame.js";
import { FootballGame } from "./FootballGame.js";
import { JavaDeveloper } from "./JavaDeveloper.js";
import { CppDeveloper } from "./CppDeveloper.js";

const racingJava = new RacingGame(new JavaDeveloper());
const racingCpp = new RacingGame(new CppDeveloper());

const footballJava = new FootballGame(new JavaDeveloper());
const footballCpp = new FootballGame(new CppDeveloper());

racingJava.developGame();
racingCpp.developGame();

footballJava.developGame();
footballCpp.developGame();
