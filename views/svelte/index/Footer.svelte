<script>
    export let logo = "./images/logo/dark.png";
    export let instagram = "#";
    export let facebook = "#";
    export let email = "mailto:info@asaclub.com";
</script>

<footer class="footer text-center text-white py-5">
    <div class="container position-relative">
    <!-- Logo -->
    <div class="mb-3">
        <img
        src={logo}
        alt="Logo"
        class="footer-logo img-fluid p-2"
        />
    </div>

    <!-- Texto -->
    <p class="fs-5 mb-3">Contáctanos:</p>

    <!-- Redes -->
    <div class="d-flex justify-content-center gap-3 mb-3">
        <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        class="btn icon-btn"
        >
        <i class="bi bi-instagram"></i>
        </a>
        <a
        href={facebook}
        target="_blank"
        rel="noopener noreferrer"
        class="btn icon-btn"
        >
        <i class="bi bi-facebook"></i>
        </a>
        <a
        href={email}
        class="btn icon-btn"
        >
        <i class="bi bi-envelope"></i>
        </a>
    </div>

    </div>
</footer>


<style>
    /* ====== FOOTER ====== */
.footer {
    background-color: #000000;
    position: relative;
}

.footer::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.676);
    z-index: 0;
}

.footer > .container {
    position: relative;
    z-index: 1;
}

.footer-logo {
    width: 180px;
    object-fit: cover;
}

/* Iconos circulares */
.icon-btn {
    width: 45px;
    height: 45px;
    color:#a9d351;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.icon-btn:hover {
    background-color: #ffffff;
    color: #000;
}

/* Tamaño de íconos */
.bi {
    font-size: 2rem;
}

/* Responsividad */
@media (max-width: 576px) {
    .footer-logo {
    width: 110px;
    }

    .bi {
    font-size: 1.5rem;
    }
}

</style>
