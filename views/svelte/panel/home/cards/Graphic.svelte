<script>
    export let type; 
    export let title = "";
    export let value = [];
    export let color = "#9a83c9";

    type=0;
    
    const MESES = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];
    

    let canvas, canvasContainer;

    cdns("https://cdn.jsdelivr.net/npm/chart.js").then(renderChart);

    function renderChart() {
        // Ajustar altura según cantidad de items
        const baseHeight = 20; // alto por barra
        const minHeight = 200;
        const newHeight = Math.max(minHeight, value.length * baseHeight);
        canvasContainer.style.height = newHeight + "px";

        new Chart(canvas, {
            type: "bar",
            data: {
                labels: MESES,
                datasets: [
                    {
                        data: value,
                        backgroundColor: color + "cc",
                        borderRadius: 10,
                        barThickness: 14,
                        hoverBackgroundColor: color,
                        barPercentage: 0.6,
                        categoryPercentage: 0.2,
                    }
                ]
            },
            options: {
                indexAxis: "y",
                maintainAspectRatio: false, // importante para respetar el alto asignado
                responsive: true,
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: { color: "#f0f0f0" },
                        ticks: { color: "#777", font: { size: 12 } },
                    },
                    y: {
                        grid: { display: false },
                        ticks: {
                            color: "#333",
                            font: { size: 12, weight: "500" },
                            autoSkip: false,
                            maxRotation: 0,
                            minRotation: 0,
                        },
                    },
                },
            },
        });
    }

</script>

<div class="card-graphic" style="--accent: {color}">
    <div class="header">
        <h4>{title}</h4>
    </div>
    <div class="canvas-container" bind:this={canvasContainer}>
        <canvas bind:this={canvas}></canvas>
    </div>
</div>

<style>
.card-graphic {
    background: #fff;
    border-left: 6px solid var(--accent);
    border-radius: 14px;
    padding: 16px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
    max-width: 500px;
    margin: 10px auto;
    transition: all 0.25s ease;
    display: flex;
    flex-direction: column;
}

.canvas-container {
    position: relative;
    width: 100%;
    height: 280px; /* valor base, luego se ajusta dinámicamente */
}

canvas {
    width: 100% !important;
    height: 100% !important;
}
</style>
