let estudiantes = {}; // Objeto para guardar las notas de cada estudiante

document.getElementById('guardar').addEventListener('click', function () {
  const nombre = document.getElementById('nombre').value.trim();
  const nota = parseFloat(document.getElementById('nota').value);

  if (!nombre || isNaN(nota) || nota < 0 || nota > 10) {
    alert('Por favor, ingresa un nombre válido y una nota entre 0 y 10.');
    return;
  }

  // Si el estudiante no existe en el objeto, inicializamos su array de notas
  if (!estudiantes[nombre]) {
    estudiantes[nombre] = [];
  }

  // Guardamos la nota
  estudiantes[nombre].push(nota);

  // Actualizamos la tabla
  actualizarTabla();
});

function calcularPromedio(notas) {
  const sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return sumaNotas / notas.length;
}

function actualizarTabla() {
  const tablaBody = document.querySelector('#tablaNotas tbody');
  tablaBody.innerHTML = ''; // Limpiar tabla antes de volver a renderizar

  for (const [nombre, notas] of Object.entries(estudiantes)) {
    const promedio = calcularPromedio(notas).toFixed(2);
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${nombre}</td>
      <td>${notas.join(', ')}</td>
      <td>${promedio}</td>
    `;
    tablaBody.appendChild(fila);
  }
}
