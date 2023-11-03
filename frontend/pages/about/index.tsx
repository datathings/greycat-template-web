import { GreyCat, IndexedDbCache } from '@greycat/web';
import '../../components/app-layout';
import { About } from './About';
import { projectlib } from '../../common/project';
import type { AppLayout } from '../../components/app-layout';

// initialize GreyCat
greycat.default = await GreyCat.init({
  cache: new IndexedDbCache('greycat.default'),
  libraries: [projectlib],
  unauthorizedHandler: () => location.assign('../login.html'),
});

const app = (<app-layout parent=".." current="about" />) as AppLayout;
// add <app-layout /> to the DOM
document.body.prepend(app);

// initialize <About /> and set it to the `app.main` which is the main page area
app.main.replaceChildren(await About());
