import { GreyCat, IndexedDbCache } from '@greycat/web';
import '../../components/app-layout';
import { projectlib } from '../../common/project';

// initialize GreyCat
greycat.default = await GreyCat.init({
  cache: new IndexedDbCache('greycat.default'),
  libraries: [projectlib],
  unauthorizedHandler: () => location.assign('../login.html'),
});

// load 'app-about' asynchronously
await import('./app-about');

document.body.append(
  <app-layout parent=".." current="about">
    <app-about />
  </app-layout>,
);
