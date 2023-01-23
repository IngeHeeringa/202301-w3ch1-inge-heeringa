import { King } from "./King/King";
import { type CharacterDataStructure } from "./types";

const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "../img/joffrey.jpg",
};

export const joffrey: King = new King(joffreyData, 2);
