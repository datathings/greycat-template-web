import { GreyCat, IndexedDbCache } from '@greycat/web';
import '../../components/app-layout';
import './app-table';
import { projectlib } from '../../common/project';
import { AppLayout } from '../../components/app-layout';

// initialize GreyCat
greycat.default = await GreyCat.init({
  cache: new IndexedDbCache('greycat.default'),
  libraries: [projectlib],
  unauthorizedHandler: () => location.assign('../login.html'),
});

const app = (<app-layout parent=".." current="table" />) as AppLayout;
// add <app-layout /> to the DOM
document.body.prepend(app);

// initialize <app-table /> and set it to the `app.main` which is the main page area
app.main.replaceChildren(<app-table />);
