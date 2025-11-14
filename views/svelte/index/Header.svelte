<script>

</script>

<div class="hero-container">
<!-- Fondo estático -->
<div class="background-image"></div>

<div class="overlay"></div>


<!-- Contenido principal -->
<div class="main-content" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">

    <div class="logo-container">
    <img 
        src="./images/logo/dark.png" 
        alt="ASA Club"
        class="logo"
        on:error={(e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
        }}
    />

    <!-- Texto descriptivo -->
    <div class="logo-subtitle">
        Tecnología que acompaña tu crecimiento<br />
    </div>
    </div>

    <!-- Etiquetas flotantes -->
    <div class="tags-container">
    {#each ['#CONTACTANOS', '#NOVEDADES', '#NOSOTROS', '#SERVICIOS'] as tag, i}
        <span 
        class="tag"
        style="animation-duration: {3 + i * 0.5}s;"
        >
        {tag}
        </span>
    {/each}
    </div>

    <!-- Indicador scroll -->
    <div class="scroll-indicator">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
    </div>
</div>

<!-- Efectos de spray -->
<div class="splatter splatter-1"></div>
<div class="splatter splatter-2"></div>
<div class="splatter splatter-3"></div>
</div>

<style>
.hero-container {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    background-color: #172554;
}

.background-image {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    /* imagen fija sin parallax */
    background-attachment: scroll;
}

.overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0, 22, 65, 0.6), rgba(18, 123, 228, 0.8));
}


.main-content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 1.5rem;
    text-align: center;
}

.logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    transition: transform 0.3s;
}

.logo-container:hover {
    transform: scale(1.05);
}

.logo {
    width: clamp(18rem, 25vw, 20rem) !important;
    max-width: 100%;
    object-fit: contain;
    filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5));
    animation: float 4s ease-in-out infinite;
}

.logo-subtitle {
    margin-top: 1.5rem;
    color: #e5e7eb;
    font-size:3rem;
    font-weight: 800;
    line-height: 1.4;
    letter-spacing: 0.03em;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.6);
}

.tags-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
}

.tag {
    padding: 0.5rem 1.5rem;
    background-color: rgba(0,0,0,0.7);
    backdrop-filter: blur(4px);
    color: #ff6633;
    font-weight: 700;
    font-size: 1.125rem;
    border: 2px solid #ff6633;
    transition: transform 0.3s;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    animation: float ease-in-out infinite;
}

.tag:hover {
    transform: rotate(3deg);
}

.scroll-indicator {
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
    color: #00aeef;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));
}

.splatter {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
}

.splatter-1 {
    top: 25%;
    left: 25%;
    width: 8rem;
    height: 8rem;
    background-color: rgba(236, 72, 153, 0.2);
}

.splatter-2 {
    bottom: 25%;
    right: 25%;
    width: 10rem;
    height: 10rem;
    background-color: rgba(34, 211, 238, 0.2);
}

.splatter-3 {
    top: 33%;
    right: 33%;
    width: 6rem;
    height: 6rem;
    background-color: rgba(163, 230, 53, 0.2);
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(3deg); }
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
}

@keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-10px); }
}
</style>
