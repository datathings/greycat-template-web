import '../../components/app-layout';
import { About } from './About';

// initialize <app-layout />
const app = document.createElement('app-layout');
app.parent = '..'; // this is the root, so the parent is '.'
app.current = 'about'; // this is the name of the page
await app.init(); // initialize the app (eg. GreyCat.init, etc.)

// add <app-layout /> to the DOM
document.body.prepend(app);

// initialize <About /> and set it to the `app.main` which is the main page area
app.main.replaceChildren(await About());
