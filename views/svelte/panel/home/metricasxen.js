
let callback = v=>v;

const VEN_MTC_CARDS_X3_VALORES = 1;
const VEN_MTC_CARDS_GRAPHIC = 2;

let vehiculos=0, presupuestos=0, viajes=0; 
export function onshow() {
    render();
} 
function render() {

}



function update_metricas(){

  let NUEVA_CARD=(title,type,value,color)=>({title,type,value,color}), cards = []; 

  METRICS.calc((metrics,stats)=>{

    let monthCount=stats(MTC_COUNT_BY_MONTH, onload);
    let indexLoad=stats(MTC_COUNT,onload, RENDERY_INDEX);
    let panelLoad=stats(MTC_COUNT,onload, RENDERY_PANEL);
    let newDevice=stats(MTC_COUNT,onnewdevice);

    cards.push(NUEVA_CARD("Ingresos", VEN_MTC_CARDS_X3_VALORES, [
        { label: "Pagina Principal", value: indexLoad, color: "#98d3ba" },
        { label: "Nuevos Dispositivos", value: newDevice, color: "#84c5e1" },
        { label: "Sistema", value: panelLoad, color: "#b7a6c9" }
    ]));

    cards.push(NUEVA_CARD("Visitas Mensuales",VEN_MTC_CARDS_GRAPHIC,monthCount,"#9a83c9"));
    //cards.push(NUEVA_CARD("Visitas Mensuales",VEN_MTC_CARDS_GRAPHIC,monthCount,"#9a83c9"));

    // cards.push({
    //   type: "businessLogic",
    //   title: "Vehículos activos",
    //   value:vehiculos,
    //   icon: "bi-truck",
    //   color: "#8d99c7",
    //   onClick: () => views.vehiculos()
    // });


    callback(cards);
  });

  
}

update_metricas();

export default function(cb) {
  callback=cb, 
  update_metricas();
}
