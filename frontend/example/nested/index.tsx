import '~/common/components/app-layout';

await gc.sdk.init();

document.body.appendChild(
  <app-layout>
    <div slot="main">The nested page</div>
  </app-layout>
);
