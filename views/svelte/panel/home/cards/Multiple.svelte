<script>
    export let title = "";
    export let value = []; 
    //Es solo para solventar el warning de svelte para q no salga en consola
    export let type; 
    export let color;
    type=0;
    color = "#9a83c9";

</script>

<div class="card-multiple">
    <div class="header">
        <h4>{title}</h4>
    </div>

    <div class="bars">
        {#each value as item}
            <div class="bar" style="--accent:{item.color}">
                <div class="label">{item.label}</div>
                <div class="circle">
                    <span style="color:var(--accent)">
                        {item.value.toString().replace(".", ",")}
                    </span>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
.card-multiple {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-left: 6px solid #6683a5;
    border-radius: 14px;
    padding: 18px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
    width: fit-content;
    max-width: 100%;
    margin: 10px auto;
    transition: all 0.25s ease;
}

.card-multiple:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
}

.header {
    width: 100%;
    text-align: center;
    margin-bottom: 14px;
}

.header h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #444;
    margin: 0;
    letter-spacing: 0.3px;
}

.bars {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
}

.bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--accent, #ddd);
    border-radius: 12px;
    padding: 8px 14px;
    width: 350px;
    max-width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    color: #fff;
    transition: all 0.2s ease;
}

.bar:hover {
    transform: scale(1.02);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
}

.label {
    font-size: 0.9rem;
    font-weight: 600;
    word-break: break-word;
}

.circle {
    background: #fff;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1rem;
    margin-left: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 576px) {
    .card-multiple {
        padding: 14px;
        border-left-width: 4px;
    }

    .header h4 {
        font-size: 0.95rem;
    }

    .bar {
        width: 100%;
        padding: 8px 10px;
        flex-direction: row;
        gap: 8px;
    }

    .label {
        font-size: 0.85rem;
        flex: 1;
    }

    .circle {
        width: 32px;
        height: 32px;
        font-size: 0.85rem;
    }
}
</style>
