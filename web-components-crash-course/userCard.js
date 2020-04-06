// Create HTML Template
const template = document.createElement('template');
template.innerHTML = `
  <style>
    h3 {
      color: coral;
    }
  </style>
  <div class="user-card">
    <h3></h3>
  </div>
`;

// Create Custom Element
class UserCard extends HTMLElement {
  constructor() {
    super();

    // Create Shadow DOM
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
  }
}

window.customElements.define('user-card', UserCard);
