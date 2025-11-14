
<svg 
width="200" 
height="200" 
viewBox="0 0 200 200" 
xmlns="http://www.w3.org/2000/svg"
class="no-news-icon"
>
<!-- Fondo del periódico -->
<rect 
    x="40" 
    y="30" 
    width="120" 
    height="140" 
    rx="8" 
    fill="#f8f9fa" 
    stroke="#e9ecef" 
    stroke-width="2"
    class="newspaper"
/>

<!-- Título vacío (líneas punteadas) -->
<line 
    x1="55" 
    y1="50" 
    x2="145" 
    y2="50" 
    stroke="#dee2e6" 
    stroke-width="3" 
    stroke-dasharray="5,5"
    class="title-line"
/>

<!-- Líneas de contenido vacío -->
<line 
    x1="55" 
    y1="70" 
    x2="130" 
    y2="70" 
    stroke="#e9ecef" 
    stroke-width="2" 
    stroke-dasharray="3,3"
    class="content-line-1"
/>

<line 
    x1="55" 
    y1="85" 
    x2="140" 
    y2="85" 
    stroke="#e9ecef" 
    stroke-width="2" 
    stroke-dasharray="3,3"
    class="content-line-2"
/>

<line 
    x1="55" 
    y1="100" 
    x2="125" 
    y2="100" 
    stroke="#e9ecef" 
    stroke-width="2" 
    stroke-dasharray="3,3"
    class="content-line-3"
/>

<!-- Ícono de búsqueda con X -->
<circle 
    cx="100" 
    cy="130" 
    r="15" 
    fill="none" 
    stroke="#6c757d" 
    stroke-width="2"
    class="search-circle"
/>

<line 
    x1="111" 
    y1="141" 
    x2="120" 
    y2="150" 
    stroke="#6c757d" 
    stroke-width="2"
    class="search-handle"
/>

<!-- X dentro del círculo -->
<line 
    x1="93" 
    y1="123" 
    x2="107" 
    y2="137" 
    stroke="#dc3545" 
    stroke-width="2"
    class="x-line-1"
/>

<line 
    x1="107" 
    y1="123" 
    x2="93" 
    y2="137" 
    stroke="#dc3545" 
    stroke-width="2"
    class="x-line-2"
/>
</svg>


<style>
    .title-line {
        animation: drawLine 3s ease-in-out 0.3s infinite alternate;
    }
    .content-line-1 {
        animation: drawLine 3s ease-in-out 0.5s infinite alternate;
    }
    .content-line-2 {
        animation: drawLine 3s ease-in-out 0.7s infinite alternate;
    }
    .content-line-3 {
        animation: drawLine 3s ease-in-out 0.9s infinite alternate;
    }

    .x-line-1, .x-line-2 {
        stroke-dasharray: 20;
        stroke-dashoffset: 20; /* arranca "oculta" */
        animation: drawX 2.5s ease-in-out 1.3s infinite alternate;
    }

    @keyframes drawLine {
        from { 
            stroke-dashoffset: 100;
            opacity: 0;
        }
        to { 
            stroke-dashoffset: 0;
            opacity: 1;
        }
    }

    @keyframes drawX {
        from { 
            stroke-dashoffset: 20;
            opacity: 0;
        }
        to { 
            stroke-dashoffset: 0;
            opacity: 1;
        }
    }

</style>