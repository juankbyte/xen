<script>
	
	import AccesosDirectos from './home/AccesosDirectos.svelte';
	import PanelDeControl from './home/PanelDeControl.svelte';

	const MODO_ACCESO_DIRECTO = 1;
	const MODO_PANEL_DE_CONTROL = 2;

	let modo = localStorage.modo??MODO_ACCESO_DIRECTO;

	if ( !views(true).length ) {
		modo = MODO_PANEL_DE_CONTROL;
	}

	function onclickSwitch(){
		if (modo==MODO_ACCESO_DIRECTO) {
			modo=localStorage.modo=MODO_PANEL_DE_CONTROL;
		} else {
			modo=localStorage.modo=MODO_ACCESO_DIRECTO;
		}
	}

</script>

<section class="contenedor">
	
	<div class="switch-wrapper">
		<div class="modo-container">
			<button
				class="opcion {modo == MODO_ACCESO_DIRECTO ? 'activo' : ''}"
				on:click={onclickSwitch}
			>
				<i class="bi bi-grid-fill"></i>
				Acces
			</button>
			<button
				class="opcion {modo == MODO_PANEL_DE_CONTROL ? 'activo' : ''}"
				on:click={onclickSwitch}
			>
				Control
				<i class="bi bi-motherboard-fill"></i>
			</button>
			
		</div>
	</div>

	<div class="vista">
		{#if modo == MODO_ACCESO_DIRECTO}
			<AccesosDirectos/>
		{:else}
			<PanelDeControl/>
		{/if}
	</div>
</section>

<style>
	.contenedor {
		position: relative;	
	}

	.switch-wrapper {
		position: fixed;
		top: 5rem;
		right: 1.5rem;
		z-index: 9999; 
	}

	.modo-container {
		display: inline-flex;
		background: rgba(255, 255, 255, 0.85);
		border: 1px solid rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		border-radius: 14px;
		overflow: hidden;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
	}

	.opcion {
		flex: 1;
		border: none;
		padding: 10px 18px;
		font-size: 0.95rem;
		font-weight: 500;
		color: #141414;
		background: transparent;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		transition: all 0.3s ease;
	}

	.opcion.activo {
		background: linear-gradient(90deg, #2563eb, #3b82f6);
		color: white;
		box-shadow: 0 0 12px rgba(37, 99, 235, 0.4);
	}

	.vista {
		margin-top: 0.7rem; /* 🔹 Deja espacio debajo del switch fijo */
	}

	@media (max-width: 600px) {
		.switch-wrapper {
			right: 1rem;
		}

		.opcion {
			padding: 8px 10px;
			font-size: 0.85rem;
		}
	}
</style>
