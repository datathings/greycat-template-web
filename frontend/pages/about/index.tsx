import { GreyCat, IndexedDbCache, runtime } from '@greycat/web';
import { info, projectlib } from '@/common/project';

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
    <h1>About</h1>
    <div className="list">
      <gui-object header value={await runtime.Runtime.info()} />
      <gui-card>
        <header slot="header">Dependencies</header>
        <gui-table headers={['Name', 'Version', 'License']} value={await info.info()} />  
      </gui-card>
    </div>
  </app-layout>,
);
