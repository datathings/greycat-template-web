import { GreyCat, IndexedDbCache, prettyError } from '@greycat/web';
import { hello, projectlib } from '../../common/project';
import '../../components/app-layout';
import type { AppLayout } from '../../components/app-layout';

// initialize GreyCat
greycat.default = await GreyCat.init({
  cache: new IndexedDbCache('greycat.default'),
  libraries: [projectlib],
  unauthorizedHandler: () => location.assign('../login.html'),
});

const app = (<app-layout parent=".." current="protected" />) as AppLayout;
// add <app-layout /> to the DOM
document.body.prepend(app);

let main: Node;
try {
  const response = await hello.protected_endpoint();
  main = document.createTextNode(response);
} catch (err) {
  main = document.createTextNode(prettyError(err, 'something went wrong'));
}
app.main.replaceChildren(main);
