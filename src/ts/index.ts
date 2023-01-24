import { King } from "./King/King";
import { type CharacterDataStructure } from "./types";
import CardComponent from "./CardComponent/CardComponent";

const appContainer = document.querySelector(".app")!;
const cardContainer = document.createElement("ul");
cardContainer.className = "characters-list row list-unstyled";
const cardItem = document.createElement("li");
cardItem.className = "character col";
cardContainer.appendChild(cardItem);
appContainer.appendChild(cardContainer);

const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "../img/joffrey.jpg",
};

export const joffrey: King = new King(joffreyData, 2);
const cardComponent = new CardComponent(
  cardItem,
  "div",
  "card character__card"
);

cardComponent.render();
