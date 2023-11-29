import './shoelace.css';

import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js';
import '@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/tree/tree.js';
import '@shoelace-style/shoelace/dist/components/tree-item/tree-item.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

export function SlExample() {
  return (
    <div className={['container-fluid', 'sl-theme-dark']}>
      <div className="grid">
        <article>
          <header>Breadcrumb</header>
          <sl-breadcrumb>
            <sl-breadcrumb-item>
              <sl-icon slot="prefix" name="house"></sl-icon>
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
              <sl-icon slot="prefix" name="envelope"></sl-icon>
              Email
              <sl-icon slot="suffix" name="patch-check"></sl-icon>
            </sl-option>

            <sl-option value="option-2">
              <sl-icon slot="prefix" name="telephone"></sl-icon>
              Phone
              <sl-icon slot="suffix" name="patch-check"></sl-icon>
            </sl-option>

            <sl-option value="option-3">
              <sl-icon slot="prefix" name="chat-dots"></sl-icon>
              Chat
              <sl-icon slot="suffix" name="patch-check"></sl-icon>
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
              <sl-divider></sl-divider>
              <sl-menu-item type="checkbox" checked>
                Checkbox
              </sl-menu-item>
              <sl-menu-item disabled>Disabled</sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item>
                Prefix
                <sl-icon slot="prefix" name="gift"></sl-icon>
              </sl-menu-item>
              <sl-menu-item>
                Suffix Icon
                <sl-icon slot="suffix" name="heart"></sl-icon>
              </sl-menu-item>
            </sl-menu>
          </sl-dropdown>
        </article>
      </div>
    </div>
  );
}
