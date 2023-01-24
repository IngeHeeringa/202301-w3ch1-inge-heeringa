interface ComponentStructure {
  element: Element;
}

class Component implements ComponentStructure {
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

export default Component;
