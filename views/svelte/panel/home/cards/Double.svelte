<script>
    export let title = "";
    export let value = []; 
    export let color = "#9ed8e4"; 
</script>

<div class="card-double" style="--accent:{color}">
    <div class="side-label">{title}</div>

    <div class="content">
    {#each value as item}
        <div class="block">
        <div class="label">{item.label}</div>
        <div class="number" style="color:var(--accent)">
            {item.value.toString().replace(".", ",")}
        </div>
        </div>
    {/each}
    </div>
</div>

<style>
.card-double {
    display: flex;
    align-items: center;
    background: #fff;
    border-left: 6px solid var(--accent);
    border-radius: 14px;
    padding: 18px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
    width: fit-content;
    margin: 10px auto;
    transition: all 0.25s ease;
}

.card-double:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
}

.side-label {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--accent);
    opacity: 0.85;
    margin-right: 20px;
    letter-spacing: 0.4px;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: center;
}

.block {
    background: #f7f9fb;
    border-radius: 12px;
    padding: 10px 18px;
    width: 180px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
    text-align: center;
    transition: background 0.2s ease;
}

.block:hover {
    background: rgba(0, 0, 0, 0.02);
}

.label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #555;
    margin-bottom: 4px;
}

.number {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.1;
}
</style>
