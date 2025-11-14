import Nav from './index/Nav.svelte';
import Header from './index/Header.svelte';
import Footer from './index/Footer.svelte';
import Nosotros from './index/Nosotros.svelte';
import Historia from './index/Historia.svelte';
import Trayectoria from './index/Trayectoria.svelte';

import './index/style.css';

// elias: colocar un header + footer + 3 secciones

// juank: armar y colocar armado automatico ddel menu
section(Nav);
section(Header);
section(Nosotros);
section(Historia);
section(Trayectoria);
section(Footer);

log('Hello XEN')
