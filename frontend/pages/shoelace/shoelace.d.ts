import '@greycat/web/jsx';
import * as sl from '@shoelace-style/shoelace';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sl-menu': Partial<GreyCat.Element<sl.SlMenu>>;
      'sl-menu-item': Partial<GreyCat.Element<sl.SlMenuItem>>;
      'sl-divider': Partial<GreyCat.Element<sl.SlDivider>>;
      'sl-breadcrumb': Partial<GreyCat.Element<sl.SlBreadcrumb>>;
      'sl-breadcrumb-item': Partial<GreyCat.Element<sl.SlBreadcrumbItem>>;
      'sl-icon': Partial<GreyCat.Element<sl.SlIcon>>;
      'sl-tree': Partial<GreyCat.Element<sl.SlTree>>;
      'sl-tree-item': Partial<GreyCat.Element<sl.SlTreeItem>>;
      'sl-tab': Partial<GreyCat.Element<sl.SlTab>>;
      'sl-tab-group': Partial<GreyCat.Element<sl.SlTabGroup>>;
      'sl-tab-panel': Partial<GreyCat.Element<sl.SlTabPanel>>;
      'sl-select': Partial<GreyCat.Element<sl.SlSelect>>;
      'sl-option': Partial<GreyCat.Element<sl.SlOption>>;
      'sl-dropdown': Partial<GreyCat.Element<sl.SlDropdown>>;
      'sl-button': Partial<GreyCat.Element<sl.SlButton>>;
    }
  }
}