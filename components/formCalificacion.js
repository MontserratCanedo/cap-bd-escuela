export default class menuBarElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = `
      <p>sdfgasdfasdfadsf</p>

    `;
  }
}