function cargarDepartamentos() {
    var paisSeleccionado = document.getElementById("paises").value;
    var departamentosSelect = document.getElementById("departamentos");

    // Limpia las opciones existentes
    while (departamentosSelect.options.length > 1) {
        departamentosSelect.remove(1);
    }

    // Lógica para cargar departamentos según el país seleccionado
    if (paisSeleccionado === "Colombia") {
        // departamentos de Colombia
        agregarOpcion("Antioquia", "departamentos");
        agregarOpcion("Amazonas", "departamentos");
        agregarOpcion("Quindio", "departamentos");
}

function cargarCiudades() {
    var paisSeleccionado = document.getElementById("paises").value;
    var departamentoSeleccionado = document.getElementById("departamentos").value;
    var ciudadesSelect = document.getElementById("ciudades");

    // Limpia las opciones existentes
    while (ciudadesSelect.options.length > 1) {
        ciudadesSelect.remove(1);
    }

    // Opciones de paises, departamentos y ciudades/municipios
    /* COLOMBIA */
    if (paisSeleccionado === "Colombia" && departamentoSeleccionado === "Antioquia") {
        agregarOpcionCiudad("Medellín");
        agregarOpcionCiudad("Bello");
        agregarOpcionCiudad("Envigado");
        agregarOpcionCiudad("Itagüí");
        agregarOpcionCiudad("Sabaneta");
        agregarOpcionCiudad("Rionegro");
        agregarOpcionCiudad("Apartadó");
        agregarOpcionCiudad("Turbo");
        agregarOpcionCiudad("Santa Fe de Antioquia");
        agregarOpcionCiudad("Caucasia");
    } else if (paisSeleccionado === "Colombia" && departamentoSeleccionado === "Amazonas"){
        agregarOpcionCiudad("Leticia");
        agregarOpcionCiudad("Puerto Nariño");
        agregarOpcionCiudad("Tarapacá");
        agregarOpcionCiudad("Puerto Santander");
        agregarOpcionCiudad("La Chorrera");
        agregarOpcionCiudad("Puerto Arica");
        agregarOpcionCiudad("El Encanto");
        agregarOpcionCiudad("La Pedrera");
        agregarOpcionCiudad("Mirití-Paraná");
        agregarOpcionCiudad("Puerto Alegría");
    } else if (paisSeleccionado === "Colombia" && departamentoSeleccionado === "Quindio") {
        agregarOpcionCiudad("Armenia");
        agregarOpcionCiudad("Calarcá");
        agregarOpcionCiudad("Quimbaya");
        agregarOpcionCiudad("Montenegro");
        agregarOpcionCiudad("La Tebaida");
        agregarOpcionCiudad("Salento");
        agregarOpcionCiudad("Circasia");
        agregarOpcionCiudad("Filandia");
        agregarOpcionCiudad("Pijao");
        agregarOpcionCiudad("Buenavista");
    }

}

function agregarOpcion(valor, selectId) {
    var option = document.createElement("option");
    option.text = valor;
    option.value = valor;
    document.getElementById(selectId).add(option);
}

function agregarOpcionCiudad(valor) {
    agregarOpcion(valor, "ciudades");
}
}