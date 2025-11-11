<script>
	
	import Spinner from '../recursos/Spinner.svelte';
	
	let precios = [0,0,0], custom;
	let planes, plan_actual, promesa = new Promise(done/*then(api.json(JSON_TARIFARIO_PLANES),api.var(VAR_TARIFARIO_PLAN_ACTUAL)).then((...argv)*/=>{

		// NOTA: bonificado=descuento en % y patrocinado=total cubierto en % 

		//[planes,plan_actual]=argv;
		plan_actual = {
  "actual":0, 
  "bonificado":10,
  "patrocinado":80,
  "custom":[]
}
;
		planes = {
  "nombres": ["Base", "Pro", "Custom"],
  "descripciones":[
			"Plan básico que ofrece las herramientas y funcionalidades esenciales para gestionar una organización en sus primer etapa",
			"Plan intermedio diseñado para fundaciones en crecimiento, con características avanzadas para maximizar el impacto y la eficiencia operativa",
			"Plan más completo y robusto, orientado a necesidades personalizadas, que incluye herramientas/servicios a otra escala"
		],
  "caracteristicas": [
    {
      "obligatorio": true,
      "caracteristica": "Hosting",
      "planes": [0, 1, 2],
      "precio": 1,
      "descripcion": "bla bla bla"
    },
    {
      "caracteristica": "Dominio",
      "planes": [0, 1, 2],
      "precio": 2,
      "descripcion": "bla bla bla"
    },
    {
      "caracteristica": "One page",
      "planes": [1, 2],
      "precio": 3,
      "descripcion": "bla bla bla"
    },
    {
      "caracteristica": "Programador",
      "planes": [],
      "precio": 4,
      "descripcion": "bla bla bla"
    },
    {
      "caracteristica": "Unlimited members",
      "planes": [],
      "precio": 5,
      "descripcion": "bla bla bla"
    },
    {
      "caracteristica": "Extra security",
      "planes": [],
      "precio": 6,
      "descripcion": "bla bla bla"
    }
  ]
};

done();

		custom=plan_actual.personalizado;

		precioPorPlan();

	});

	function precioPorPlan() {
		let precio = 0;
		for(let j=0;j<3;j++){
			for(let i=0;i<planes.caracteristicas.length;i++){
				if(planes.caracteristicas[i].planes.includes(j) || (plan_actual.personalizado.includes(planes.caracteristicas[i].caracteristica) && j==2)){
					precio += planes.caracteristicas[i].precio;
				}
			}
			precios[j]=precio, precio=0;
		}
	}

	function customPlan(itemCaract){
		if(custom.includes(itemCaract)){
			custom = custom.filter(item => item !== itemCaract);
		}else{
			custom.push(itemCaract)
		}
		plan_actual.personalizado = custom;
		precioPorPlan();
	}

	function changePlan(pos) {
		plan_actual.actual=pos, api.var(VAR_TARIFARIO_PLAN_ACTUAL,plan_actual);
	}

</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<section>
	<div>
		{#await promesa}
			<Spinner/>
		{:then skyp } 
			<div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
				{#each planes.nombres as plan, pos}
					<div class="col">
						<div class="card mb-4 rounded-3 shadow-sm {plan_actual.actual == pos ? "border-primary":""}">
							<div class="card-header py-3 {plan_actual.actual == pos ? "text-bg-primary border-primary":""}"> 
								<h4 class="my-0 fw-normal">{plan}</h4>
							</div>
							<div class="card-body" style="min-height: 255px;">
								<h1 class="card-title pricing-card-title">USD {precios[pos]}<small class="text-body-secondary fw-light">/mes</small></h1>
								<p class="fs-5 text-body-secondary">
									{planes.descripciones[pos]}
								</p>
							</div>
							<div class="card-footer">
								<button type="button" class="w-100 btn btn-lg {plan_actual.actual == pos ? "btn-primary":"btn-outline-primary"}" on:click={e=>changePlan(pos)}>Seleccionar</button>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<h5 class="mb-4">Comparativa de planes</h5>
			<div class="table-responsive">
				<table class="table text-center">
					<thead>
						<tr>
							<th style="width: 25%;"></th>
							{#each planes.nombres as plan, pos}
								<th style="width: 25%;">{plan}</th>
							{/each}							
						</tr>
					</thead>
					<tbody>
						{#each planes.caracteristicas as item}
							<tr>
								<th scope="row" class="text-start">{item.caracteristica}</th>
								{#each planes.nombres as plan, pos}
									{#if item.planes.includes(pos)}
										<td>check</td>
									{:else}
										{#if pos == 2}
											<!-- <td on:click={e=> customPlan(item.caracteristica)} >{@html checkeable}</td> -->
											<td on:click={e=> customPlan(item.caracteristica)}  style="cursor:pointer; " class="celdas" > {@html plan_actual.personalizado.includes(item.caracteristica) ? 'check' : 'cross'}</td>
										{:else}
											<td>cross</td>
										{/if}
									{/if}
								{/each}
							</tr>
						{/each}
						<tr class="table-primary">
							<th scope="row" class="text-start">Total</th>
							{#each planes.nombres as plan, pos}
								<td class="fw-bold ">USD {precios[pos]}</td>
							{/each}
						</tr>
					</tbody>
				</table>
			</div>
		{/await}
	</div>
</section>

<style>
	.celdas{
		background-color: rgba(0, 123, 255, 0.1);
	}
</style>caracteristica": "Programador",
      "planes": [],
