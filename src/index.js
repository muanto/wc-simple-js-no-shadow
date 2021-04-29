import style from './style.module.css'


/* TEMPLATE HTML */
const template = document.createElement("template");
template.innerHTML = /*html*/`
  <div class="${style.root}">I am a simple component with CONSTRUCTED Stylesheet</button>
`;


class SimpleComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("simple-component", SimpleComponent);
