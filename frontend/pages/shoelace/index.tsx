import { GreyCat, IndexedDbCache } from '@greycat/web';
import '../../components/app-layout';
import { projectlib } from '../../common/project';
import { AppLayout } from '../../components/app-layout';
import { SlExample } from './examples';

// initialize GreyCat
greycat.default = await GreyCat.init({
  cache: new IndexedDbCache('greycat.default'),
  libraries: [projectlib],
  unauthorizedHandler: () => location.assign('../login.html'),
});

const app = (<app-layout parent=".." current="shoelace" />) as AppLayout;
// add <app-layout /> to the DOM
document.body.prepend(app);

app.main.replaceChildren(SlExample());
