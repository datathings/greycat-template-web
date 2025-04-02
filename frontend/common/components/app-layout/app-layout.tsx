import { css, GuiElement, GuiNav, toggleTheme } from '@greycat/web';
import '@greycat/web/greycat.css';
import '~/common/components/app-logo';
import style from './app-layout.css?inline';
import './global.css';

/**
 * This component serves as a layout for all pages in the application,
 * ensuring consistent functionality across them.
 *
 * Append an instance of it to `document.body`, then define a `"main"` slot
 * to render content within the inner `gui-layout` component.
 *
 * By default, this layout includes a top header bar and a left navigation tree.
 * While this provides a sensible default, it may not fit every use case.
 * Feel free to modify it as needed.
 *
 * Navigation is managed by `gui-nav`, which relies on a `nav.json` file
 * to define the available tree items. This file is located in `public/nav.json`
 * and is copied to `webroot/nav.json` during the build process.
 */
export class AppLayout extends GuiElement {
  static override styles = [css(style)];

  private readonly _nav: GuiNav;

  constructor() {
    super();

    this._nav = (<gui-nav slot="navigation" />) as GuiNav;

    this.shadowRoot.appendChild(
      <gui-layout>
        <div slot="header" className="app-header">
          <app-logo />
          <h3>App</h3>
        </div>
        <sl-button slot="header" variant="text" onclick={toggleTheme}>
          Light / Dark
        </sl-button>
        {this._nav}
        <div className="app-main" slot="main">
          <slot name="main" />
        </div>
      </gui-layout>
    );
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
