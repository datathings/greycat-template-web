import { GreyCat, IndexedDbCache } from '@greycat/web';
import '../../components/app-layout';
import { projectlib } from '../../common/project';

// initialize GreyCat
greycat.default = await GreyCat.init({
  cache: new IndexedDbCache('greycat.default'),
  libraries: [projectlib],
  unauthorizedHandler: () => location.assign('../login.html'),
});

// load 'app-shoelace' asynchronously
await import('./app-shoelace');

// add <app-layout /> to the DOM
document.body.appendChild(
  <app-layout parent=".." current="shoelace">
    <app-shoelace />
  </app-layout>,
);
