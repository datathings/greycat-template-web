import '~/common/components/app-layout';

await gc.sdk.init();

const result = document.createElement('gui-value');
const data = new gc.example.add$args(2, 4);

async function callAdd() {
  const { a, b } = data;
  const res = await gc.example.add(a, b);
  result.value = res;
}

document.body.appendChild(
  <app-layout>
    <div
      slot="main"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing)',
      }}
    >
      <div>Change the inputs, and click on 'Call'</div>
      <gui-input-fn value={data} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing)',
        }}
      >
        <sl-button onclick={callAdd}>Call</sl-button>
        {result}
      </div>
    </div>
  </app-layout>
);
