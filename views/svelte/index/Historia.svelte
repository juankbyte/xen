<section class="historia-section py-5">
    <div class="background-image"></div>
    <div class="overlay"></div>

    <div class="container position-relative text-center text-dark py-5"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">

        <h2 class="titulo mb-4">
            Historia
        </h2>

        <div class="texto">
            <p>
                Nuestra empresa nació en el año 2008 con el propósito de cubrir la creciente necesidad de soluciones tecnológicas innovadoras para la gestión empresarial. Desde nuestros primeros pasos, tuvimos como objetivo acompañar a las organizaciones en su transformación digital mediante herramientas modernas, eficientes y escalables.
            </p>

            <p>
                Durante nuestros primeros años desarrollamos plataformas personalizadas para distintos sectores, lo que nos permitió consolidar una base técnica sólida y un profundo entendimiento de los procesos de negocio que hoy forman parte de nuestro ADN.
            </p>

            <p>
                Con el apoyo de nuestros clientes y un equipo altamente especializado, en el año 2011 lanzamos nuestra primera suite de Software de Gestión ERP, diseñada para optimizar operaciones, automatizar tareas y mejorar la toma de decisiones mediante datos confiables.
            </p>

            <p>
                A lo largo del tiempo hemos participado en <strong>proyectos tecnológicos de gran impacto</strong>, integrando soluciones en empresas de diferentes tamaños e industrias. Entre 2020 y 2022 impulsamos un fuerte crecimiento en áreas como comercio electrónico, infraestructura en la nube y automatización de procesos.
            </p>

            <p>
                Hoy somos una empresa dedicada al <strong>desarrollo de software empresarial</strong>, enfocada en brindar herramientas que potencien la productividad, la eficiencia y el crecimiento de nuestros clientes. Nuestro compromiso es seguir liderando la innovación tecnológica y aportar valor real al ecosistema empresarial.
            </p>
        </div>
    </div>
</section>

<style>

    
    .historia-section {
        position: relative;
        overflow: hidden;
        background-color: #020c3c;
    }
    
    .background-image {
        position: absolute;
        inset: 0;
        background-image: url("../images/logo/light.png");
        background-size: cover;
        background-position: center;
        z-index: 1;
        filter: brightness(0.7);
        transform: scale(1.1);
    }
    
    .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.387), rgba(24, 153, 233, 0.417));
        z-index: 2;
    }
    
    .container {
        position: relative;
        z-index: 3;
        width: 100%;
        padding: 0 5vw;
    }
    
    .titulo {
        display: inline-block; 
        font-size: clamp(2.8rem, 6vw, 4.2rem);
        color: #ff6633;
        font-weight: 700;
        padding: 0em 1em; /* espacio interno */
        margin: 0 auto;
        cursor: pointer;
        animation: float 4s ease-in-out infinite;
        transition: transform 0.3s, text-shadow 0.3s;
    }
    
    .titulo:hover {
        transform: scale(1.08) rotate(-2deg);
        text-shadow: 0 0 10px #facc15, 0 0 20px #facc15;
    }
    
    /* ✨ efecto flotante más natural */
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
    }
    
    .texto {
        font-size: 1rem;
        color: #ffffff;
        padding: 2rem 0rem;
        border-radius: 1rem;
        font-weight: 500;
    }
    
    .texto strong {
        color: #ff6633;
        font-weight: 900;
        transition: color 0.3s ease;
    }
    
    .texto strong:hover {
        color: #0096c7;
    }
    </style>
    