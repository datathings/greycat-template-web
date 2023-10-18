import { GuiObject } from '@greycat/web';
import { hello } from '../../common/project';

export class AppHome extends HTMLElement {
  info: GuiObject;

  constructor() {
    super();

    this.info = document.createElement('gui-object');
  }

  async connectedCallback() {
    this.appendChild(
      <div className="container-fluid">
        <article>
          <header>HelloInfo</header>
          <div className="container-fluid">{this.info}</div>
        </article>
      </div>
    );

    try {
      this.info.value = await hello.get_hello_info('Hello, from GreyCat!');
    } catch (err) {
      // handle potential error
      console.error(err);
    }
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
