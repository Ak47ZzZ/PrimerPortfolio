fetch('./JSON/Jason.json')
  .then(response => response.json())
  .then(data => {
    let output = '<div class="cajonImg">';
    for (let i = 0; i < data.imagenes.length && i < 2; i++) {
      output += `
          <div class="imagenesProyecto">
            <a href="${data.imagenes[i].enlace}"><img src="${data.imagenes[i].img}" alt=""></a>
          </div>
      `;
    }
    output += '</div>'; 
    document.querySelector('.cajaProyectos').innerHTML = output;
  });
