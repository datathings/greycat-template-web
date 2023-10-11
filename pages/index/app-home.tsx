export class AppHome extends HTMLElement {
  connectedCallback() {
    this.appendChild(<div className="container-fluid">Hello, from index</div>);
  }

  disconnectedCallback() {
    this.replaceChildren();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-home': AppHome;
  }

  namespace JSX {
    interface IntrinsicElements {
      'app-home': GreyCat.Element<AppHome>;
    }
  }
}

if (!customElements.get('app-home')) {
  customElements.define('app-home', AppHome);
}
