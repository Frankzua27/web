/* =============================
   DISPONIBILIDAD
   ============================= */
const formDisponibilidad = document.getElementById("formDisponibilidad");
if (formDisponibilidad) {
  formDisponibilidad.addEventListener("submit", function (e) {
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
}

/* =============================
   COTIZAR
   ============================= */
const formCotizar = document.getElementById("formCotizar");
if (formCotizar) {
  formCotizar.addEventListener("submit", function (e) {
    e.preventDefault();

    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const pasajeros = parseInt(document.getElementById("pasajeros").value);

    const resultado = document.getElementById("resultadoCotizar");

    // Simulación de precios por ruta
    let precioBase = 100000;
    if (origen === "Valledupar" && destino === "Bogotá") {
      precioBase = 120000;
    } else if (origen === "Valledupar" && destino === "Medellín") {
      precioBase = 150000;
    }

    if (origen && destino && pasajeros > 0) {
      const total = precioBase * pasajeros;
      resultado.innerHTML = `
        <h3>Resultado de Cotización</h3>
        <p>Ruta: <strong>${origen} → ${destino}</strong></p>
        <p>Pasajeros: <strong>${pasajeros}</strong></p>
        <p>Total a pagar: <strong>$${total.toLocaleString("es-CO")}</strong></p>
      `;
    } else {
      resultado.innerHTML = `<p style="color:red;">❌ Complete todos los campos para cotizar.</p>`;
    }
  });
}

/* =============================
   COMPRAR TIQUETE
   ============================= */
const formCompra = document.getElementById("formCompra");
if (formCompra) {
  formCompra.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const empresa = document.getElementById("empresa").value;
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const fecha = document.getElementById("fecha").value;
    const pasajeros = document.getElementById("pasajeros").value;

    const mensaje = document.getElementById("mensajeCompra");

    if (empresa && origen && destino && fecha && pasajeros) {
      // Generar número de reserva aleatorio
      const reserva = "RES-" + Math.random().toString(36).substr(2, 6).toUpperCase();

      mensaje.innerHTML = `
        <h3>✅ Compra Exitosa</h3>
        <p>Gracias <strong>${nombre}</strong>, tu compra ha sido confirmada.</p>
        <p>Viajarás con la empresa <strong>${empresa}</strong> en la ruta <strong>${origen} → ${destino}</strong>.</p>
        <p>Fecha: <strong>${fecha}</strong> | Pasajeros: <strong>${pasajeros}</strong></p>
        <p>Número de reserva: <strong>${reserva}</strong></p>
      `;
      mensaje.classList.remove("error");
    } else {
      mensaje.innerHTML = `<p>❌ Por favor complete todos los campos.</p>`;
      mensaje.classList.add("error");
    }
  });
}

/* =============================
   CONTACTO
   ============================= */
const formContacto = document.getElementById("formContacto");
if (formContacto) {
  formContacto.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensajeUsuario = document.getElementById("mensaje").value;

    const resultado = document.getElementById("resultadoContacto");

    if (nombre && email && mensajeUsuario) {
      resultado.innerHTML = `
        <h3>✅ Mensaje enviado</h3>
        <p>Gracias <strong>${nombre}</strong>, hemos recibido tu mensaje y responderemos a <strong>${email}</strong> lo antes posible.</p>
      `;
      resultado.classList.remove("error");
    } else {
      resultado.innerHTML = `<p>❌ Por favor completa todos los campos.</p>`;
      resultado.classList.add("error");
    }
  });
}
