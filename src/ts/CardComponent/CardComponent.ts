/* eslint-disable @typescript-eslint/consistent-type-definitions */
interface CardComponentStructure {
  element: Element;
}

class CardComponent implements CardComponentStructure {
  element: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    parentElement.appendChild(this.element);

    this.render();
  }

  render() {
    return this.element;
  }
}

export default CardComponent;
