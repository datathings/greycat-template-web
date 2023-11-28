import { logout } from '@greycat/web';
import LogoutIcon from '@tabler/icons/logout.svg?raw';
import BrightnessUpIcon from '@tabler/icons/brightness-up.svg?raw';
import MoonIcon from '@tabler/icons/moon.svg?raw';
import HomeIcon from '@tabler/icons/home.svg?raw';
import TableIcon from '@tabler/icons/table.svg?raw';
import InfoSquareRoundedIcon from '@tabler/icons/info-square-rounded.svg?raw';
import LockOpenIcon from '@tabler/icons/lock-open.svg?raw';
import LogoIcon from './logo.svg?raw';
import { icon } from '../../common/utils';
import { APP_LAYOUT_THEME } from '../../common/constants';
import './app-layout.css';

/**
 * Make sure to append this component to the DOM **after** GreyCat is initialized
 */
export class AppLayout extends HTMLElement {
  readonly main = document.createElement('main');

  /**
   * Relative path to parent page
   */
  get parent() {
    return this.getAttribute('parent') ?? '.';
  }

  set parent(parent: string) {
    this.setAttribute('parent', parent);
  }

  /**
   * Name of current page
   */
  get current() {
    return this.getAttribute('current') ?? 'index';
  }

  set current(current: string) {
    this.setAttribute('current', current);
  }

  connectedCallback() {
    const lightIcon = icon(BrightnessUpIcon);
    const darkIcon = icon(MoonIcon);
    const initialTheme = getCurrentTheme();
    const themeIcon = { dark: lightIcon, light: darkIcon };

    function toggleTheme() {
      const curTheme = getCurrentTheme();
      const newTheme = curTheme === 'dark' ? 'light' : 'dark';
      toggleThemeBtn.replaceChildren(themeIcon[newTheme]);
      setCurrentTheme(newTheme);
      // remove focus after update
      toggleThemeBtn.blur();
    }

    const toggleThemeBtn = (
      <button role="link" onclick={toggleTheme}>
        {initialTheme === 'dark' ? lightIcon : darkIcon}
      </button>
    ) as HTMLButtonElement;

    this.appendChild(
      <aside>
        <nav>
          <ul>
            <li className="brand">
              <a href={this.parent}>{icon(LogoIcon)}</a>
            </li>
            {this.createNavItem('Index', 'index', icon(HomeIcon), this.parent)}
            {this.createNavItem('Table', 'table', icon(TableIcon))}
            {this.createNavItem('About', 'about', icon(InfoSquareRoundedIcon))}
            {greycat.default.hasPermission('protected')
              ? this.createNavItem('Protected', 'protected', icon(LockOpenIcon))
              : undefined}
          </ul>

          <ul>
            <li>{toggleThemeBtn}</li>
            <li>
              <button
                role="link"
                onclick={this.signout}
                data-tooltip="Logout"
                data-placement="right"
              >
                {icon(LogoutIcon)}
              </button>
            </li>
          </ul>
        </nav>
      </aside>,
    );

    this.appendChild(this.main);
  }

  private createNavItem(
    label: string,
    route: string,
    child: Element,
    href = `${this.parent}/${route}/`,
  ) {
    return (
      <li>
        <a
          className={this.current === route ? 'active' : undefined}
          href={href}
          data-tooltip={label}
          data-placement="right"
        >
          {child}
        </a>
      </li>
    );
  }

  disconnectedCallback() {
    this.replaceChildren();
  }

  async signout() {
    await logout();
    location.reload();
  }
}

function getCurrentTheme(): 'dark' | 'light' {
  let theme = localStorage.getItem(APP_LAYOUT_THEME);
  if (theme === 'dark' || theme === 'light') {
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
  }

  theme = document.documentElement.getAttribute('data-theme') ?? 'dark';
  if (theme === 'light') {
    return 'light';
  }
  return 'dark';
}

function setCurrentTheme(theme: 'dark' | 'light') {
  localStorage.setItem(APP_LAYOUT_THEME, theme);
  document.documentElement.setAttribute('data-theme', theme);
}

declare global {
  interface HTMLElementTagNameMap {
    'app-layout': AppLayout;
  }

  namespace JSX {
    interface IntrinsicElements {
      'app-layout': GreyCat.Element<AppLayout>;
    }
  }
}

if (!customElements.get('app-layout')) {
  customElements.define('app-layout', AppLayout);
}
