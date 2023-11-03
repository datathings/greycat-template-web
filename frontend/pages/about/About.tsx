import { prettyError, runtime } from '@greycat/web';

/**
 * Unfaillible Promise, you don't need to try/catch
 * @returns 
 */
async function RuntimeInfo() {
  let info: runtime.RuntimeInfo | string;
  try {
    info = await runtime.Runtime.info();
  } catch (err) {
    info = prettyError(err, 'unable to load Runtime::info()');
  }

  return (
    <article>
      <header>Runtime Info</header>
      <div className="container-fluid">
        <gui-object value={info} />
      </div>
    </article>
  );
}

export async function About() {
  return (
    <div className="container-fluid">
      <h4>GreyCat Template Web</h4>
      {greycat.default.hasPermission('graph.read') ? await RuntimeInfo() : undefined}
      <article>
        <header>Dependencies</header>
        <ul>
          <li>@tabler/icons - MIT License</li>
        </ul>
      </article>
    </div>
  );
}
