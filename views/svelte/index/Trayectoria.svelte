<script>
</script>

<div class="main-wrapper">

    <!-- HERO -->
    <div class="hero-section">
        <img class="hero-image" loading="lazy" src="./images/logo/dark.png" alt="Centro de Desarrollo">
        <div class="hero-overlay"> 
            <h1 class="hero-title" data-aos="fade-up" data-aos-duration="3000">
                NUESTRA TRAYECTORIA TECNOLÓGICA
            </h1>
        </div>
    </div>

    <!-- CONTENIDO -->
    <div class="content-section">
        <div class="content-container" data-aos="fade-up" data-aos-duration="3000">

            <p class="text-block">
                Desde nuestros inicios en 2011 trabajamos en el desarrollo de herramientas digitales orientadas a mejorar la gestión y productividad de empresas de distintos rubros. Nuestro objetivo fue brindar soluciones que resolvieran la falta de automatización, trazabilidad y centralización de la información, problemas frecuentes en los entornos empresariales de aquel momento.     
            </p>
            
            <div class="image-wrapper">
                <div class="image-overlay-container">
                    <img class="content-image" src="./images/logo/dark.png" alt="Desarrollo de sistemas">
                    <div class="overlay-gradient"></div>
                </div>
            </div>
            
            <p class="text-block">
                Con el respaldo de empresas, profesionales y organismos locales, logramos introducir nuestras primeras implementaciones de software de gestión. Esto permitió que numerosas organizaciones pudieran optimizar procesos operativos, integrar datos críticos y adoptar nuevas tecnologías en sus flujos de trabajo con mayor accesibilidad y eficiencia.
            </p>
            
            <div class="image-wrapper">
                <div class="image-overlay-container">
                    <img class="content-image" src="./images/logo/dark.png" alt="Infraestructura tecnológica">
                    <div class="overlay-gradient"></div>
                </div>
            </div>
            
            <p class="text-block">
                Nuestra empresa creció gracias al compromiso de nuestro equipo y al aporte de clientes que confiaron en nuestra visión tecnológica. A lo largo de los años implementamos soluciones innovadoras en sectores como comercio, industria, servicios y administración, impulsando su digitalización y fortaleciendo su competitividad mediante herramientas modernas y escalables.
            </p>
            
            <div class="timeline-section">

                <div class="timeline-item">
                    <span class="year">2016</span>
                    <p>Realizamos una actualización integral de nuestras plataformas de gestión, incorporando módulos de automatización, reportes avanzados y conectividad con aplicaciones externas mediante APIs.</p>
                </div>
                
                <div class="timeline-item">
                    <span class="year">2020</span>
                    <p>Durante este período reforzamos nuestra infraestructura en la nube y ampliamos nuestras soluciones ERP, facilitando la operación remota de cientos de usuarios y acompañando la transición digital acelerada por el contexto global.</p>
                </div>
            </div>
            
            <p class="text-block highlight">
                Actualmente contamos con una suite completa de herramientas tecnológicas que incluyen sistemas ERP, gestión comercial, control de stock, herramientas analíticas y soluciones integradas para empresas de todos los tamaños.
            </p>
        </div>
    </div>
</div>


<style>
    .main-wrapper {
        background-color: #07437a;
        color: #ffffff;
    }

    /* HERO */
    .hero-section {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .hero-image {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        filter: brightness(0.5);
    }

    .hero-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to bottom, rgba(10, 14, 20, 0.3), rgba(10, 14, 20, 0.7));
    }

    .hero-title {
        font-size: clamp(2.5rem, 6vw, 4rem);
        font-weight: 900;
        font-family: "Impact", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        color: #ff6633;
        text-align: center;
        letter-spacing: 0.05em;
        text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
        padding: 2rem;
        border: 3px solid #ff6633;
        background: rgba(10, 14, 20, 0.6);
    }

    /* CONTENIDO */
    .content-section {
        background-color: #07437a;
        padding: 4rem 1rem;
    }

    .text-block {
        font-size: 1.125rem;
        line-height: 1.8;
        color: #e0e0e0;
        margin: 2.5rem auto;
        max-width: 80ch;
        text-align: justify;
        padding: 0 1rem;
    }

    .text-block::first-letter {
        font-size: 3rem;
        font-weight: 700;
        color: #ff6633;
        float: left;
        line-height: 1;
        margin-right: 0.5rem;
        margin-top: 0.1rem;
    }

    .text-block.highlight {
        background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05));
        padding: 2rem;
        border-left: 4px solid #ff6633;
        border-radius: 4px;
        margin-top: 3rem;
    }

    /* IMÁGENES CON OVERLAY */
    .image-wrapper {
        display: flex;
        justify-content: center;
        margin: 3rem 0;
        padding: 0 1rem;
    }

    .image-overlay-container {
        position: relative;
        display: inline-block;
    }

    .content-image {
        max-width: 100%;
        width: 900px;
        height: auto;
        max-height: 600px;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        border: 2px solid rgba(255, 215, 0, 0.3);
        display: block;
    }

    .overlay-gradient {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            135deg,
            rgba(0, 175, 239, 0.45) 0%,
            rgba(255, 149, 0, 0.35) 25%,
            rgba(29, 89, 229, 0.2) 50%,
            rgba(20, 130, 255, 0.2) 75%,
            rgba(0, 51, 180, 0.4) 100%
        );
        mix-blend-mode: overlay;
        pointer-events: none;
        transition: opacity 0.4s ease;
        z-index: 1;
        border-radius: 8px;
    }

    /* TIMELINE */
    .timeline-section {
        margin: 4rem auto;
        max-width: 900px;
    }

    .timeline-item {
        position: relative;
        padding: 2rem 2rem 2rem 5rem;
        margin-bottom: 2rem;
        border-left: 3px solid #ff6633;
        background: rgba(255, 215, 0, 0.05);
        border-radius: 4px;
    }

    .year {
        position: absolute;
        left: -1.5rem;
        top: 1.5rem;
        font-size: 2rem;
        font-weight: 900;
        color: #ff6633;
        background: #0a0e14;
        padding: 0.5rem 1rem;
        border: 2px solid #ff6633;
        border-radius: 4px;
        font-family: "Impact", sans-serif;
    }

    .timeline-item p {
        margin: 0;
        color: #e0e0e0;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        .hero-title {
            font-size: 2.5rem;
            padding: 1.5rem;
        }

        .content-section {
            padding: 2rem 2rem;
        }

        .text-block {
            font-size: 1rem;
            padding: 0 0.5rem;
        }

        .timeline-item {
            padding: 2rem 1rem 1.5rem 4rem;
        }

        .year {
            font-size: 1.5rem;
            left: -1rem;
            padding: 0.3rem 0.6rem;
        }

        .content-image {
            width: 100%;
        }
    }
</style>
