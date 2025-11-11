
// --------------------------------------------------------------
// import local
// --------------------------------------------------------------

import Home from './panel/Home.svelte';
import './panel/style.css';


// --------------------------------------------------------------
// configuracion
// --------------------------------------------------------------

setting({
    [SETTING_MENU_FORGET]:{forget:true},
});


// --------------------------------------------------------------
// Menu
// --------------------------------------------------------------

// elias: copiar el componente de accesos directorio
menu('Home',view(Home),{icon:"house",color:'#b7e0cc',shortcut,header:false});

// elias: Seccion IT menu de equipo IT 
// DATOS VIENEN de una variable: xenit = {
//	info:{meet,wp} 
//	equipo:[{name,lugar,description, }]
// }

// josue: Planes vigentes + con seleccion del mismo + ide: colocar inflfacion mensual
// 2 variable: una con los detalles de los planes y otra con el plan actual

// josue: historico de pagos simple con modelo


// --------------------------------------------------------------
// Logica de negocio
// --------------------------------------------------------------

