document.getElementById("formDisponibilidad").addEventListener("submit", function(e) {
  e.preventDefault();
  const origen = document.getElementById("origen").value;
  const destino = document.getElementById("destino").value;
  const fecha = document.getElementById("fecha").value;
  const pasajeros = document.getElementById("pasajeros").value;

  const resultado = document.getElementById("resultado");

  if (origen && destino && fecha && pasajeros) {
    resultado.innerHTML = `
      <h3>Resultado de Disponibilidad</h3>
      <p>Ruta: <strong>${origen} → ${destino}</strong></p>
      <p>Fecha: <strong>${fecha}</strong></p>
      <p>Pasajeros: <strong>${pasajeros}</strong></p>
      <p style="color:green; font-weight:bold;">✅ Cupos disponibles</p>
    `;
  } else {
    resultado.innerHTML = `<p style="color:red;">❌ Por favor, complete todos los campos.</p>`;
  }
});
