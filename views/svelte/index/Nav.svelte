<script>
    setTimeout(() => {
        const navbar = document.getElementById("navbarScroll");
        if (!navbar) return;
        const collapse = new bootstrap.Collapse(navbar, { toggle: false });
        document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => collapse.hide());
        });
    }, 500);
</script>
    
<nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
        <!-- Logo con imagen -->
        <a class="navbar-brand" href="/">
            <img src="./images/logo/dark.png" alt="Logo" height="50" />
        </a>

        <!-- Botón hamburguesa -->
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i class="bi bi-list"></i>
        </button>

        
        <div class="collapse navbar-collapse justify-content-end" id="navbarScroll">
        <!-- Links -->
        <ul class="navbar-nav my-2 my-lg-0">
        <!-- El navbar tenia un scroll innecesario solo para tres elementos -->
        <!-- <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;"> -->
            <li class="nav-item">
            <a class="nav-link" href="#nosotros">Nosotros</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#servicios">Historia</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#contacto">Trayectoria</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="login.html">Ingresar</a>
            </li>
        </ul>
        </div>
    </div>
</nav>

    <!-- Estilos -->
<style>
    nav {
        background-color: #000000;
        padding: 16px !important;
        border-bottom: 1px solid #4980d7;
    }

    /* Links del navbar */
    .nav-link {
        position: relative; 
        color:#f1f1f1 !important;
        font-size: 17px;
        margin: 0 10px;
        letter-spacing: 1px;
        transition: color 0.3s;
        font-weight: 600;
        text-decoration: none; 
    }

    .nav-link::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -3px; 
        width: 0;
        height: 2px;
        background-color: var(--color-secundario);
        transition: width 0.3s ease-in-out;
    }

    .nav-link:hover {
        color: #ff6633 !important;
    }

    .nav-link:hover::after {
        width: 100%;
    }

    /* Botón hamburguesa */

    .navbar-toggler {
        border: none;
        outline: none;
    }

    .navbar-toggler i {
        font-size: 1.8rem;
        color: #4980d7;
        transition: transform 0.3s;
    }

    .navbar-toggler:focus {
        box-shadow: none;
    }

    .navbar-toggler:hover i {
        transform: rotate(90deg);
    }

    @media (max-width: 575.98px) {
    }
</style>
