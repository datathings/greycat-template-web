import { GreyCat, IndexedDbCache } from '@greycat/web';
import '../../components/app-layout';
import { About } from './About';
import { projectlib } from '../../common/project';

// initialize GreyCat
greycat.default = await GreyCat.init({
  cache: new IndexedDbCache('greycat.default'),
  libraries: [projectlib],
  unauthorizedHandler: () => location.assign('../login.html'),
});

document.body.append(
  <app-layout parent=".." current="about">
    {await About()}
  </app-layout>,
);
