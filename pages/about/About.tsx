import { prettyError, runtime } from '@greycat/web';

export async function About() {
  let info: runtime.RuntimeInfo | string;
  try {
    info = await runtime.Runtime.info();
  } catch (err) {
    info = prettyError(err, 'unable to load Runtime::info()');
  }

  return (
    <div className="container-fluid">
      <article>
        <header>Runtime Info</header>
        <div className="container-fluid">
          <gui-object value={info} />
        </div>
      </article>
    </div>
  );
}
