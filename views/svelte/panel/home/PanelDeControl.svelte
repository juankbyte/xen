<script>
    import metricas from './metricasxen.js';
    import CardBusinessLogic from './cards/BusinessLogic.svelte';
    import Spinner from '../../xenplates/recursos/Spinner.svelte';
    import CardNumber from "./cards/Number.svelte";
    import CardGraphic from "./cards/Graphic.svelte";
    import CardIcon from "./cards/Icon.svelte";
    import CardMultiple from "./cards/Multiple.svelte";
    import CardDouble from "./cards/Double.svelte";

    const VEN_MTC_CARDS_X3_VALORES = 1;
    const VEN_MTC_CARDS_GRAPHIC = 2;

    let cards = [];

    metricas(v => cards = v);
</script>

<section class="container">
    <div class="header-content">
        <h2 class="dashboard-title mb-5">
            PANEL DE CONTROL
        </h2>
    </div>

    {#if cards.length}
        <div class="cards-grid">
            {#each cards.filter(c => c.type === "businessLogic") as card}
                <CardBusinessLogic {...card} />
            {/each}
        </div>
        <div class="stats">
            {#each cards.filter(c => c.type !== "businessLogic") as card}
                <div class="card-stats">
                    {#if card.type === "number"}
                        <CardNumber {...card} />
                    {:else if card.type === VEN_MTC_CARDS_GRAPHIC}
                        <CardGraphic {...card} />
                    {:else if card.type === "icon"}
                        <CardIcon {...card} />
                    {:else if card.type === VEN_MTC_CARDS_X3_VALORES}
                        <CardMultiple {...card} />
                    {:else if card.type === "double"}
                        <CardDouble {...card} />
                    {:else}
                        <div class="error">⚠️ Tipo de card desconocido: "{card.type}"</div>
                    {/if}
                </div>
            {/each}
        </div>
    {:else}            
        <Spinner />
    {/if}    

    <!-- svelte-ignore missing-declaration -->
    {#if setting[SETTING_CLIENT_GOOGLE_ANALYTICS]}
        <div class="link-container">
            <a class="icon-link" href="https://analytics.google.com/analytics/web">
                Estadísticas analytics
                <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </a>
        </div>    
    {/if}
    
</section>

<style>
    .card-stats {
        display: inline-block;
        vertical-align: top;
        margin: 10px;
    }

    .error {
        background-color: #ffeaea;
        border: 1px solid #ffb0b0;
        color: #b30000;
        padding: 10px;
        border-radius: 6px;
        font-size: 0.85rem;
    }

    .link-container {
        display: flex;
        justify-content: flex-end; /* 👈 Alinea el enlace a la derecha */
        margin-top: 2rem;
    }

    .dashboard-title {
        font-size: 1.2rem;
        font-weight: 700;
        color: #333;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
    }

    .stats {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-around;
        margin-top: 30px;
        align-items: center;
    }
/* 
    .more-metrics {
        text-align: center;
        margin-top: 2rem;
    }

    .more-metrics a {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        background: #ffffff;
        color: #0b0b0b;
        border: 1px solid #e0e0e0;
        border-radius: 10px;
        padding: 0.5rem 1.5rem;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.3s ease;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
    }

    .more-metrics a:hover {
        background: #2867ed;
        color: white;
        border-color: #2867ed;
        transform: translateY(-2px);
    }

    .stats-icon {
        width: 50px;
        height: 50px;
        object-fit: contain;
        transition: filter 0.3s ease;
    }

    .more-metrics a:hover .stats-icon {
        filter: brightness(0) invert(1);
    } */

    @media (max-width: 992px) {
        .dashboard-title {
            font-size: 1rem;
        }
    }

    @media (max-width: 768px) {
        .dashboard-title {
            font-size: 0.9rem;
        }
        .cards-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 500px) {
        .dashboard-title {
            display: none;
        }
    }
</style>
