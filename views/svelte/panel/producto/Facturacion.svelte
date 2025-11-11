<script>
    import Spinner from "../recursos/Spinner.svelte";
    
    let pendientes=[], promesa, contenedor, table_pagos, historial=false;

    let datos="", info__dolar={};
    
    fetch("https://dolarapi.com/v1/dolares/bolsa")
        .then(response => response.json())
        .then(data => (info__dolar = data, datos = `Fecha: ${(new Date(data.fechaActualizacion)+'').replace(/ GMT.*/,'')} venta:${data.venta} `));
        
    function formatFecha(fechaISO){
        const fecha = new Date(fechaISO)
        const opcionesFecha = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const opcionesHora = { hour: '2-digit', minute: '2-digit', hour12: false };
        const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
        const horaFormateada = fecha.toLocaleTimeString('es-ES', opcionesHora);
        return `${fechaFormateada} ${horaFormateada}`
    }

    export function onshow(){
        promesa = XENPAGOS.read([OR,[_estado,IGUAL,1],[_estado,IGUAL,3]]).then(v=> {
                pendientes=v;
                if(!pendientes.length){
                    alert(`a la fecha no hay pagos pendientes`,6)
                }
            });
    };

    function pagar(id){
        log("pagar factura: ",id)
    }
    function irAPlanes(){
        log("ir A Planes")
    }

    function verMasFacturaciones(){
        contenedor.append(table_pagos=table([],{
            sync:_XENPAGOS,
            columns:[
                {key:"Y", title:"ID"},
                {key:"fechaPago", title:"Fecha de pago", format: (value) =>`${new Date(value).toLocaleDateString()}`},
                {key:"importe"},
                {
                    title:"Action", 
                    key:"estado", 
                    onclick: (celda,fila) => celda !=2 ? pagar(fila.Y):"",
                    html: (v)=> v !=2 ? `<div class="d-flex justify-content-between px-2"><p class="m-0 me-2">${LISTA_XENPAGOSESTADOS[v]}</p> <button type="button" class="btn btn-sm btn-outline-dark">Pagar</button> </div>` : `<p class="m-0 me-2">${LISTA_XENPAGOSESTADOS[v]}</p>`},
                {key: "facturaURL", title:"Descargar PDF", icon:'-filetype-pdf', value: fila => {log(fila.facturaURL), window.open(`${fila.facturaURL}`, '_blank')}}
            ]
        }));
        historial=true;
    }

</script>



<section>
    <div class="cotizacion">
        
        <p class="">
            <small>
                Cotizacion del dolar = $ {info__dolar.venta}
            </small>
        </p>
        <p class="">
            <small>
                Fecha de ultima actualizacion = {formatFecha(info__dolar.fechaActualizacion)}
            </small>
        </p>
    </div>


    <div class="card cards__item shadow rounded-4 m-2 my-3">
        <div class="row">
            <div class="col-auto plan_name__container border rounded p-2 m-3">
                <p class="m-0">
                    Plan actual: 
                    <small class="text-primary fw-semibold">
                        Normal
                    </small>
                </p>
            </div>
            <div class="col">
                <p class="m-0">
                    Este plan permite desarrollar una aplicación de una sola página (OnePage) que incluye un panel de cliente donde se podrá gestionar usuarios y niveles de permisos, así como la carga y gestión de datos para la venta de artículos. La solución proporcionará una experiencia centralizada y eficiente para los administradores y clientes.
                </p>
            </div>
            <div class="col-auto precio__container">
                usd 70 + impuestos.
            </div>
        </div>
    </div>
    <button type="button" class="btn btn-sm btn-outline-dark button__plan" on:click={irAPlanes}>Ver Planes</button>

    {#await promesa} <Spinner/> {:then data}
        <div class="cards__pendientes my-3">
            {#if pendientes.length}
                {#each pendientes as pendiente}    
                    <div class="card card__pendiente shadow rounded-4">
                        <div class="header mb-2">
                            <div class="icon__container border rounded-5 ">
                                {#if pendiente.estado==1 }
                                    <i class="bi bi-clock-history"></i>
                                {:else}
                                    <i class="bi bi-hourglass-bottom"></i>
                                {/if}
                            </div>
                            <div class="estado" style="color: {pendiente.estado==1? "LimeGreen":"OrangeRed"};">
                                <!-- svelte-ignore missing-declaration -->
                                <p class="m-0">
                                    Pago {LISTA_XENPAGOSESTADOS[pendiente.estado]}
                                </p>
                            </div>
                        </div>
                        <p class="">
                            Periodo: {new Date(pendiente.fechaPago).getMonth()==0?12:Date(pendiente.fechaPago).getMonth()}/{new Date(pendiente.fechaPago).getMonth()==0 ? new Date(pendiente.fechaPago).getUTCFullYear()-1:new Date(pendiente.fechaPago).getUTCFullYear()}
                        </p>
                        <p class="">
                            Monto a pagar = $ {pendiente.importe}
                        </p>
                        <p class="">
                            Fecha de vencimiento: 10/{new Date(pendiente.fechaPago).getMonth()+1}/{new Date(pendiente.fechaPago).getUTCFullYear()}
                        </p>
                        <div class="buttons gap-2">
                            <button type="button" class="btn btn-sm btn-outline-dark" on:click={pagar(pendiente.Y)}>Pagar</button>
                        </div>
                    </div>
                {/each}
            {:else}
                <p class="text-center ">A la fecha no hay pagos pendientes o vencidos</p>
            {/if}
        </div>
    {/await}

    {#if !historial}
        <button type="button" class="btn btn-sm btn-outline-dark" on:click={verMasFacturaciones}>
            Ver historial de pagos
        </button>
    {/if}
    <div bind:this={contenedor}></div>

</section>

<style>
    .header{
        display: flex;
        justify-content: space-between;
    }

    .plan_name__container,.precio__container{
        align-content: center;
    }

    .button__plan{
        width: max-content;
        align-self: self-end;
    }

    .cards__pendientes{
        display: flex;
        flex-wrap: wrap;
    }

    .card__pendiente{
        width: 300px;
        padding:15px;
        margin: 10px;
    }

    .cards__item{
        margin: 10px;
        padding:15px;
    }

    .buttons{
        display: flex;
        align-self: end;
    }

    .icon__container{
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>