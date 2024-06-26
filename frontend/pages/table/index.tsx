import { GreyCat, IndexedDbCache } from '@greycat/web';
import '../../components/app-layout';
import { projectlib } from '../../common/project';

// initialize GreyCat
greycat.default = await GreyCat.init({
  cache: new IndexedDbCache('greycat.default'),
  libraries: [projectlib],
  unauthorizedHandler: () => location.assign('../login.html'),
});

// load 'app-table' asynchronously
await import('./app-table');

// add <app-layout /> to the DOM
document.body.append(
  <app-layout parent=".." current="table">
    <app-table />
  </app-layout>,
);
