import { GreyCat, IndexedDbCache, prettyError } from '@greycat/web';
import { hello, projectlib } from '../../common/project';
import '../../components/app-layout';

// initialize GreyCat
greycat.default = await GreyCat.init({
  cache: new IndexedDbCache('greycat.default'),
  libraries: [projectlib],
  unauthorizedHandler: () => location.assign('../login.html'),
});

let content: Node;
try {
  const response = await hello.protected_endpoint();
  content = document.createTextNode(response);
} catch (err) {
  content = document.createTextNode(prettyError(err, 'something went wrong'));
}

document.body.appendChild(
  <app-layout parent=".." current="protected">
    {content}
  </app-layout>,
);
