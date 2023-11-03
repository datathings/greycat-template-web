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

    const themeIcon = {
      dark: lightIcon,
      light: darkIcon,
    };

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

    const parent = this.parent;
    const current = this.current;

    this.appendChild(
      <aside>
        <nav>
          <ul>
            <li className="brand">
              <a href={parent}>{icon(LogoIcon)}</a>
            </li>
            <li>
              <a
                className={current === 'index' ? 'active' : undefined}
                href={parent}
                data-tooltip="Index"
                data-placement="right"
              >
                {icon(HomeIcon)}
              </a>
            </li>
            <li>
              <a
                className={current === 'table' ? 'active' : undefined}
                href={`${parent}/table/`}
                data-tooltip="Table"
                data-placement="right"
              >
                {icon(TableIcon)}
              </a>
            </li>
            {/* Example menu entry: */}
            {/* <li>
          <a
            className={current === 'routeName' ? 'active' : undefined}
            href={`${parent}/routeName/`}
            data-tooltip="Route Name"
            data-placement="right"
          >
            {icon(RouteIcon)}
          </a>
        </li> */}
            <li>
              <a
                className={current === 'about' ? 'active' : undefined}
                href={`${parent}/about/`}
                data-tooltip="About"
                data-placement="right"
              >
                {icon(InfoSquareRoundedIcon)}
              </a>
            </li>
            {greycat.default.hasPermission('protected') ? (
              <li>
                <a
                  className={current === 'protected' ? 'active' : undefined}
                  href={`${parent}/protected/`}
                  data-tooltip="Protected"
                  data-placement="right"
                >
                  {icon(LockOpenIcon)}
                </a>
              </li>
            ) : undefined}
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
