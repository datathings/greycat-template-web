import '~/common/components/app-layout';

await gc.sdk.init();

document.body.appendChild(
  <app-layout>
    <div slot="main">The index page</div>
  </app-layout>
);
