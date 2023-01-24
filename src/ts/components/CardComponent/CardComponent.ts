import type Character from "../../classes/Character/Character";
import CardBodyComponent from "../CardBodyComponent/CardBodyComponent";
import CardOverlayComponent from "../CardOverlayComponent/CardOverlayComponent";
import ImageComponent from "../ImageComponent/ImageComponent";

interface CardComponentStructure {
  element: Element;
}

class CardComponent implements CardComponentStructure {
  element: Element;

  constructor(
    parentElement: Element,
    secondParentElement: Element,
    tagName: string,
    className: string,
    character: Character
  ) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    secondParentElement.appendChild(this.element);
    parentElement.appendChild(secondParentElement);

    const photo = new ImageComponent(
      this.element,
      "img",
      "character__picture card-img-top",
      character
    );
    const body = new CardBodyComponent(
      this.element,
      "div",
      "card-body",
      character
    );
    const overlay = new CardOverlayComponent(
      this.element,
      "div",
      "character__overlay",
      character
    );
    this.element.appendChild(photo.element);
    this.element.appendChild(body.element);
    this.element.appendChild(overlay.element);
  }
}

export default CardComponent;
