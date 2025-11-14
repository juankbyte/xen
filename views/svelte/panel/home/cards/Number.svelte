<script>
    export let title = "";
    export let value = 0;
    export let icon = "";
    export let color = "#4d8aea"; // color de acento
    export let type = "value";
    export let onclick = () => {};

    $: formattedValue = value.toString().replace(".", ",");
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card-number" on:click={onclick} style="--accent: {color}">
    <div class="side-label">{title}</div>

    <div class="content">
    {#if icon}
        <div class="icon-container">
        <i class="bi {icon}"></i>
        </div>
    {/if}

    <div class="value">{formattedValue}</div>
    {#if type === "value"}
        <div class="subtitle">Var. % mensual</div>
    {/if}
    </div>
</div>

<style>
.card-number {
    display: flex;
    align-items: center;
    background: #fff;
    border-left: 6px solid var(--accent);
    border-radius: 14px;
    padding: 16px 20px;
    color: #2e2e2e;
    cursor: pointer;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
    transition: all 0.25s ease;
    max-width: 260px;
    min-height: 100px;
}

.card-number:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
}

.side-label {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--accent);
    opacity: 0.8;
    margin-right: 18px;
    letter-spacing: 0.5px;
}

.content {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.icon-container {
    width: 40px;
    height: 40px;
    background: var(--accent);
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    margin-bottom: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.value {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.1;
    color: var(--accent);
    margin-bottom: 4px;
}

.subtitle {
    font-size: 0.85rem;
    color: #666;
    font-weight: 500;
}
</style>
