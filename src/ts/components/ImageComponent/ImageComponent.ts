import { type Character } from "../../classes/Character/Character";

interface ImageComponentStructure {
  element: Element;
}

class ImageComponent implements ImageComponentStructure {
  element: Element;

  constructor(
    parentElement: Element,
    tagName: string,
    className: string,
    character: Character
  ) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    parentElement.appendChild(this.element);
    (this.element as HTMLImageElement).src =
      character.characterData.imageSource;

    this.render();
  }

  render() {
    this.element.innerHTML = (this.element as HTMLImageElement).src;
  }
}

export default ImageComponent;
