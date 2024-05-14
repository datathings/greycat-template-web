import '../../common/shoelace';

export class AppShoelace extends HTMLElement {
  private _root: HTMLElement;

  constructor() {
    super();

    this._root = (
      <div className={['container-fluid', 'sl-theme-dark']}>
        <div className="grid">
          <article>
            <header>Breadcrumb</header>
            <sl-breadcrumb>
              <sl-breadcrumb-item>
                <sl-icon library="tabler" slot="prefix" name="house" />
                Home
              </sl-breadcrumb-item>
              <sl-breadcrumb-item>Clothing</sl-breadcrumb-item>
              <sl-breadcrumb-item>Shirts</sl-breadcrumb-item>
            </sl-breadcrumb>
          </article>

          <article>
            <header>Tree</header>
            <sl-tree>
              <sl-tree-item>
                Deciduous
                <sl-tree-item>Birch</sl-tree-item>
                <sl-tree-item>
                  Maple
                  <sl-tree-item>Field maple</sl-tree-item>
                  <sl-tree-item>Red maple</sl-tree-item>
                  <sl-tree-item>Sugar maple</sl-tree-item>
                </sl-tree-item>
                <sl-tree-item>Oak</sl-tree-item>
              </sl-tree-item>

              <sl-tree-item>
                Coniferous
                <sl-tree-item>Cedar</sl-tree-item>
                <sl-tree-item>Pine</sl-tree-item>
                <sl-tree-item>Spruce</sl-tree-item>
              </sl-tree-item>

              <sl-tree-item>
                Non-trees
                <sl-tree-item>Bamboo</sl-tree-item>
                <sl-tree-item>Cactus</sl-tree-item>
                <sl-tree-item>Fern</sl-tree-item>
              </sl-tree-item>
            </sl-tree>
          </article>

          <article>
            <header>Tabs</header>
            <sl-tab-group>
              <sl-tab slot="nav" panel="general">
                General
              </sl-tab>
              <sl-tab slot="nav" panel="custom">
                Custom
              </sl-tab>
              <sl-tab slot="nav" panel="advanced">
                Advanced
              </sl-tab>
              <sl-tab slot="nav" panel="disabled" disabled>
                Disabled
              </sl-tab>

              <sl-tab-panel name="general">This is the general tab panel.</sl-tab-panel>
              <sl-tab-panel name="custom">This is the custom tab panel.</sl-tab-panel>
              <sl-tab-panel name="advanced">This is the advanced tab panel.</sl-tab-panel>
              <sl-tab-panel name="disabled">This is a disabled tab panel.</sl-tab-panel>
            </sl-tab-group>
          </article>
          <article>
            <header>Select</header>
            <sl-select label="Select one">
              <sl-option value="option-1">
                <sl-icon library="tabler" slot="prefix" name="mail" />
                Email
                <sl-icon library="tabler" slot="suffix" name="check" />
              </sl-option>

              <sl-option value="option-2">
                <sl-icon library="tabler" slot="prefix" name="phone" />
                Phone
                <sl-icon library="tabler" slot="suffix" name="check" />
              </sl-option>

              <sl-option value="option-3">
                <sl-icon library="tabler" slot="prefix" name="message" />
                Chat
                <sl-icon library="tabler" slot="suffix" name="check" />
              </sl-option>
            </sl-select>
          </article>
          <article>
            <header>Dropdown</header>
            <sl-dropdown>
              <sl-button slot="trigger" caret>
                Dropdown
              </sl-button>
              <sl-menu>
                <sl-menu-item>Dropdown Item 1</sl-menu-item>
                <sl-menu-item>Dropdown Item 2</sl-menu-item>
                <sl-menu-item>Dropdown Item 3</sl-menu-item>
                <sl-divider />
                <sl-menu-item type="checkbox" checked>
                  Checkbox
                </sl-menu-item>
                <sl-menu-item disabled>Disabled</sl-menu-item>
                <sl-divider />
                <sl-menu-item>
                  Prefix
                  <sl-icon library="tabler" slot="prefix" name="gift" />
                </sl-menu-item>
                <sl-menu-item>
                  Suffix Icon
                  <sl-icon library="tabler" slot="suffix" name="heart" />
                </sl-menu-item>
              </sl-menu>
            </sl-dropdown>
          </article>
        </div>
      </div>
    ) as HTMLElement;
  }

  connectedCallback() {
    this.appendChild(this._root);
  }

  disconnectedCallback() {
    this.replaceChildren();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-shoelace': AppShoelace;
  }

  namespace JSX {
    interface IntrinsicElements {
      'app-shoelace': GreyCat.Element<AppShoelace>;
    }
  }
}

if (!customElements.get('app-shoelace')) {
  customElements.define('app-shoelace', AppShoelace);
}
