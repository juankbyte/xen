<script>
    export let type; 
    export let color = "#8d99c7";
    export let icon = "bi-truck";
    export let title = "Título";
    export let value = 0;
    export let onClick = null;

    type=0;
</script>

<button class="card" style="--accent:{color}" on:click={() => onClick && onClick()}>
    <div class="card-top"></div>

    <!-- Icono flotante -->
    <i class="bi {icon} icon"></i>

    <div class="card-body">
        <div class="info">
            <div class="value">{value}</div>
            <div class="title">{title}</div>
            <a class="details" href={"#"} on:click|stopPropagation={() => onClick && onClick()}>
                Ver detalles →
            </a>
        </div>
    </div>
</button>

<style>
.card {
    position: relative;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    padding: 2rem 1.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}

/* Línea superior */
.card-top {
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: 100%;
    background-color: var(--accent);
    border-radius: 10px 10px 0 0;
}

/* Cuerpo principal */
.card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

/* Información */
.info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.value {
    font-size: 2.5rem;
    font-weight: 700;
    color: #000;
    line-height: 1;
}

.title {
    font-weight: 600;
    color: #111;
    margin: 0.8rem 0;
    font-size: 1.3rem;
}

/* Enlace */
.details {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--accent);
    text-decoration: none;
    transition: color 0.2s ease;
}

.details:hover {
    text-decoration: underline;
}

/* Ícono superior derecho */
.icon {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    font-size: 2.8rem;
    color: var(--accent);
    opacity: 0.9;
}

/* Hover */
.card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0,0,0,0.06);
}

/* Responsive */
@media (max-width: 768px) {
    .icon {
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
    }
}
</style>
