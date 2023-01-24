import { King } from "./classes/King/King";
import { type CharacterDataStructure } from "./types";
import CardComponent from "./components/CardComponent/CardComponent";
import ImageComponent from "./components/ImageComponent/ImageComponent";
import joffreyPhoto from "../img/joffrey.jpg";

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
  imageSource: String(joffreyPhoto),
};

export const joffrey: King = new King(joffreyData, 2);

const cardComponent = new CardComponent(
  cardItem,
  "div",
  "card character__card"
);

const card = document.querySelector(".character__card")!;

const imageComponent = new ImageComponent(
  card,
  "img",
  "character__picture card-img-top",
  joffrey
);

cardComponent.render();
imageComponent.render();
