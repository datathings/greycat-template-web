import { prettyError, runtime } from '@greycat/web';

export class AppAbout extends HTMLElement {
  private _root: HTMLElement;
  private _info: HTMLElement;

  constructor() {
    super();

    this._info = document.createElement('div');

    this._root = (
      <div className="container-fluid">
        <h4>GreyCat Template Web</h4>
        {this._info}
        <article>
          <header>Dependencies</header>
          <div>
            <ul>
              <li>@tabler/icons - MIT License</li>
            </ul>
          </div>
        </article>
      </div>
    ) as HTMLElement;
  }

  connectedCallback() {
    this.replaceChildren(this._root);
    this.update();
  }

  /**
   * Infaillible Promise, you don't need to try/catch
   */
  async update(): Promise<void> {
    if (greycat.default.hasPermission('graph.read')) {
      let info: runtime.RuntimeInfo | string;
      try {
        info = await runtime.Runtime.info();
      } catch (err) {
        info = prettyError(err, 'unable to load Runtime::info()');
      }
      this._info.replaceWith(
        <article>
          <header>Runtime Info</header>
          <div className="container-fluid">
            <gui-object value={info} />
          </div>
        </article>,
      );
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-about': AppAbout;
  }

  namespace JSX {
    interface IntrinsicElements {
      'app-about': GreyCat.Element<AppAbout>;
    }
  }
}

if (!customElements.get('app-about')) {
  customElements.define('app-about', AppAbout);
}
