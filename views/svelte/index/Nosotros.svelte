<script>
    export let onJoin = () => {};
</script>

<section class="about-section container py-5">
    <div class="row g-4">

        <!-- BLOQUE PRINCIPAL -->
        <div class="col-lg-6">
            <div class="hero-box p-5 h-100 d-flex flex-column justify-content-center">
                <h2 class="fw-bold text-white">Sobre nosotros</h2>
                <p class="text-light mt-3">
                    Somos una empresa de rápido crecimiento en la búsqueda permanente 
                    de la innovación y la excelencia.
                </p>
                <button class="btn unite btn-lg mt-3 fw-semibold" on:click={onJoin}>
                    ¡Unite a Nuestro Equipo!
                </button>
            </div>
        </div>

        <!-- TARJETA: NUESTRA EMPRESA -->
        <div class="col-lg-6">
            <div class="info-card p-4 shadow-sm h-100">
                <div class="icon-wrapper mb-3">
                    <i class="bi bi-trophy-fill"></i>
                </div>
                <h4 class="fw-bold">Nuestra empresa</h4>
                <p>
                    23 años en el mercado avalan nuestra experiencia y más de 5000 empresas 
                    en todo el país confirman nuestra trayectoria.
                </p>
            </div>
        </div>

        <!-- TARJETA: PRODUCTOS -->
        <div class="col-lg-4">
            <div class="info-card p-4 shadow-sm h-100">
                <div class="icon-wrapper mb-3">
                    <i class="bi bi-graph-up"></i>
                </div>
                <h4 class="fw-bold">Nuestros productos</h4>
                <p>
                    Somos especialistas en Software de Gestión ERP y plataformas eCommerce 
                    para empresas, ofreciendo soluciones flexibles y modernas.
                </p>
            </div>
        </div>

        <!-- TARJETA: EQUIPO -->
        <div class="col-lg-4">
            <div class="info-card p-4 shadow-sm h-100">
                <div class="icon-wrapper mb-3">
                    <i class="bi bi-people-fill"></i>
                </div>
                <h4 class="fw-bold">Nuestro equipo</h4>
                <p>
                    Contamos con un equipo de especialistas y profesionales en cada área, 
                    garantizando la excelencia en cada proyecto.
                </p>
            </div>
        </div>

        <!-- TARJETA: FILOSOFÍA -->
        <div class="col-lg-4">
            <div class="info-card p-4 shadow-sm h-100">
                <div class="icon-wrapper mb-3">
                    <i class="bi bi-pen-fill"></i>
                </div>
                <h4 class="fw-bold">Nuestra filosofía</h4>
                <p>
                    Creemos en el crecimiento conjunto con nuestros clientes, impulsando 
                    mejoras continuas en productos, procesos y trabajo en equipo.
                </p>
            </div>
        </div>

    </div>
</section>

<style>
    .about-section {
        max-width: 1200px;
        background-color: aliceblue;
    }

    .hero-box {
        background: #0a4b89;
        border-radius: 14px;
        min-height: 350px;
        position: relative;
        overflow: hidden;
    }

    .unite{
        background-color: #ff6633;
        color:#fff;
    }

    .hero-box::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 180px;
        height: 180px;
        background: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q100 0 200 100 T400 100' fill='none' stroke='%23ffffff22' stroke-width='2'/%3E%3C/svg%3E");
        opacity: 0.3;
    }

    .info-card {
        background: #ffffff;
        border-radius: 14px;
        transition: transform .2s ease, box-shadow .2s ease;
    }

    .info-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 22px rgba(0, 0, 0, 0.12);
    }

    .icon-wrapper {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: #ff6633;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon-wrapper i {
        color: #fff;
        font-size: 1.4rem;
    }
</style>
