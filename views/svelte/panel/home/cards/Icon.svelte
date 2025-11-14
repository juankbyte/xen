<script>
    export let title = "";
    export let value = 0;
    export let icon = "";
    export let color = "#f4e2b4"; 
    export let onclick = () => {};

    $: formattedValue = value.toString().replace(".", ",");
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card-icon" on:click={onclick} style="--accent:{color}">
    <div class="card-header">{title}</div>

    <div class="card-body">
    {#if icon.includes(".")}
        <img src={icon} alt={title} class="icon-img" />
    {:else}
        <div class="icon-box">
        <i class="bi {icon}"></i>
        </div>
    {/if}

    <div class="value">{formattedValue}</div>
    </div>
</div>

<style>
.card-icon {
    background: #fff;
    border-left: 6px solid var(--accent);
    border-radius: 14px;
    padding: 16px 18px;
    text-align: center;
    width: 160px;
    min-height: 150px;
    cursor: pointer;
    box-shadow: 0 3px 8px rgba(0,0,0,0.06);
    transition: all 0.25s ease;
}

.card-icon:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0,0,0,0.1);
}

.card-header {
    font-size: 0.9rem;
    font-weight: 600;
    color: #444;
    margin-bottom: 10px;
    line-height: 1.2;
    text-align: center;
}

.card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.icon-box {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background-color: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}

.icon-box i {
    font-size: 1.8rem;
    color: #fff;
}

.icon-img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 8px;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
}

.value {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--accent);
    margin-top: 4px;
}
</style>
