import { css, GuiElement, svg } from '@greycat/web';
import style from './app-logo.css?inline';
import logo from './logo.svg?raw';

export class AppLogo extends GuiElement {
  static override styles = [css(style)];

  constructor() {
    super();

    this.shadowRoot.appendChild(<a href="/">{svg(logo, 'logo')}</a>);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-logo': AppLogo;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'app-logo': GreyCat.Element<AppLogo>;
      }
    }
  }
}

if (!customElements.get('app-logo')) {
  customElements.define('app-logo', AppLogo);
}
