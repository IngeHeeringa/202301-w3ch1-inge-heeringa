import { King } from "./King/King";
import { type CharacterDataStructure } from "./types";
import CardComponent from "./CardComponent/CardComponent";

const appContainer = document.querySelector(".app")!;

const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "../img/joffrey.jpg",
};

export const joffrey: King = new King(joffreyData, 2);
const cardComponent = new CardComponent(
  appContainer,
  "div",
  "card character__card"
);

cardComponent.render();
