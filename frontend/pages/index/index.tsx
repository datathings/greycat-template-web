import { GreyCat, IndexedDbCache } from '@greycat/web';
import { projectlib } from '@/common/project';

await GreyCat.init({
  cache: new IndexedDbCache('my.app'),
  libraries: [projectlib],
  unauthorizedHandler: () => location.assign('../login.html'),
});

// load the app-layout *after* GreyCat so that the AppLayout can use
// app-specific types/functions if needed
await import('@/common/app-layout');

document.body.appendChild(
  <app-layout>
    <h1>Index</h1>
    <div>
      <p>Hello, world!</p>
    </div>
  </app-layout>,
);
