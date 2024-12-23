import { css, GuiElement, sl } from '@greycat/web';
import '@greycat/web/css/greycat.css';
import './light-dom.css';
import style from './app-layout.css?inline';
import logo from './logo.svg';

export class AppLayout extends GuiElement {
  static override styles = [css(style)];

  route = '/';

  constructor() {
    super();

    this.shadowRoot.appendChild(
      <gui-layout2>
        <div slot="menu" className="menu">
          <header className="menu__header">
            <sl-button variant="text" href="/">
              {logo}
            </sl-button>
          </header>
          <aside className="menu__body">
            <sl-button variant="text" href="/">
              Index
            </sl-button>
            <sl-button variant="text" href="/about/">
              About
            </sl-button>
          </aside>
          <aside className="menu__footer">
            <sl-icon-button name="sun" onclick={this._toggleTheme} />
          </aside>
        </div>
        <main className="body">
          <slot />
        </main>
      </gui-layout2>,
    );
  }

  private _toggleTheme(this: sl.SlIconButton) {
    const is_dark = document.documentElement.classList.contains('sl-theme-dark');
    const is_light = document.documentElement.classList.contains('sl-theme-light');
    if ((!is_dark && !is_light) || is_dark) {
      document.documentElement.classList.remove('sl-theme-dark');
      document.documentElement.classList.add('sl-theme-light');
      this.name = 'moon';
    } else {
      document.documentElement.classList.remove('sl-theme-light');
      this.name = 'sun';
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-layout': AppLayout;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'app-layout': GreyCat.Element<AppLayout>;
      }
    }
  }
}

if (!customElements.get('app-layout')) {
  customElements.define('app-layout', AppLayout);
}
