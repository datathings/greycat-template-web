import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';

import MailIcon from '@tabler/icons/outline/mail.svg';
import PhoneIcon from '@tabler/icons/outline/phone.svg';
import MessageIcons from '@tabler/icons/outline/message.svg';
import CheckIcon from '@tabler/icons/outline/check.svg';
import HeartIcon from '@tabler/icons/outline/heart.svg';
import GiftIcon from '@tabler/icons/outline/gift.svg';
import HouseIcon from '@tabler/icons/outline/home.svg';

// Those icons will be available in any shoelace component
// by using the "tabler" library:
//
// eg.
//  <sl-icon library="tabler" name="heart" />
//
// add/del icons fitting your needs
// the full list is available at https://tabler.io/icons
const ICONS: Record<string, string | undefined> = {
  mail: MailIcon,
  phone: PhoneIcon,
  message: MessageIcons,
  check: CheckIcon,
  heart: HeartIcon,
  gift: GiftIcon,
  house: HouseIcon,
};

registerIconLibrary('tabler', {
  resolver: (name) => ICONS[name] ?? '',
});