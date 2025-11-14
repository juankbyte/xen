<script>
    const items = views(true); 
	// items.splice(0, 1);
    </script>
    
    <section class="container">
        <h2 class="dashboard-title mb-5">
            ACCESOS DIRECTOS
        </h2>
        <div class="dashboard">
            {#each items as item}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div 
                    class="card" 
                    style="--color-base:{item.color};"
                    on:click={e=>item.go()}
                >
                    <i class="icon bi bi-{item.icon}"></i>
                    <h3>{item.title}</h3>
                    <p>{item.description??""}</p>
                </div>
            {/each}
        </div>
    </section>
    
<style>
.dashboard {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	gap: 2rem;
	justify-items: center;
}

.dashboard-title {
	font-size: 1.2rem;
	font-weight: 700;
	color: #333;
	text-transform: uppercase;
	letter-spacing: 1px;
}

.card {
	background: color-mix(in srgb, var(--color-base), rgb(255, 255, 255) 80%);
	color: #000;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 14px;
	padding: 1.5rem 1rem;
	width: 100%;
	max-width: 420px;
	text-align: center;
	cursor: pointer;
	transition: all 0.25s ease;
}

.card:hover {
	transform: translateY(-6px);
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.icon {
	font-size: 2.6rem;
	color: color-mix(in srgb, var(--color-base) 90%, black);
	transition: transform 0.25s ease;
}

.card:hover .icon {
	transform: scale(1.05);
}

h3 {
	margin: 0;
	font-size: 1.1rem;
	font-weight: 700;
}

p {
	margin: 0.4rem 0 0;
	font-size: 0.95rem;
	opacity: 0.9;
}


@media (max-width: 992px) {
	.dashboard {
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.card {
		max-width: 340px;
		padding: 1.2rem 0.8rem;
	}

	.icon {
		font-size: 2.2rem;
	}

	h3 {
		font-size: 1rem;
	}

	p {
		font-size: 0.9rem;
	}

	.dashboard-title {
		font-size: 1rem;
	}
}


@media (max-width: 768px) {
	.dashboard {
		grid-template-columns: 1fr 1fr;
		gap: 1.2rem;
	}

    .dashboard-title {
            font-size: 0.9rem;
    } 

	.card {
		max-width: 280px;
		padding: 1rem 0.8rem;
	}

	.icon {
		font-size: 2rem;
	}

	h3 {
		font-size: 0.95rem;
	}
}

@media (max-width: 500px) {
	.dashboard {
		grid-template-columns: 1fr;
		gap: 1rem;
        margin-top: 3rem;
	}

	.card {
		max-width: 260px;
		padding: 0.9rem 0.7rem;
	}

	.icon {
		font-size: 1.8rem;
	}

	h3 {
		font-size: 0.9rem;
	}

	p {
		font-size: 0.85rem;
	}

	.dashboard-title {
		display: none;
	}
}
</style>
    