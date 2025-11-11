<script>
  
  let managers = [];

  view.spinner = variable(VAR_ST_MANAGERS,v=>managers=v);

</script>

<section class="container">

  <div class="row align-items-center">
    {#each managers as manager }
      <!-- Columna de la foto -->
      <div class="col-auto">
        <i class="bi bi-person-circle" style="font-size: xxx-large;"></i>
      </div>
      <!-- Columna del nombre y modo -->      
      <div class="col">
        <h4 class="mb-1">{manager.name}</h4>
        <p class="text-muted mb-0">{manager.rol}</p>
      </div>  
    {/each}    
  </div>
</section>

<style>

</style>
